#!/usr/bin/env tsx

/**
 * Renders the favicon set from the brand mark: a phosphor M on the
 * green-black ground, set in the shipped Space Grotesk. Writes
 * public/favicon.ico (16+32 PNG entries) and public/apple-touch-icon.png.
 * Rerun after brand changes: `pnpm tsx scripts/generate-icons.ts`.
 */

import { readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "@playwright/test"

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)

const font = readFileSync(
  path.resolve(repoRoot, "public/fonts/space-grotesk/space-grotesk-700.woff2"),
).toString("base64")

const markHtml = (size: number) => `<!doctype html>
<html><head><style>
  @font-face {
    font-family: "Space Grotesk";
    font-weight: 700;
    src: url(data:font/woff2;base64,${font}) format("woff2");
  }
  * { margin: 0; }
  body { width: ${size}px; height: ${size}px; background: #0c120e; }
  .mark {
    align-items: center;
    background: #0c120e;
    color: #6fe0a0;
    display: flex;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    font-size: ${Math.round(size * 0.72)}px;
    height: 100%;
    justify-content: center;
    line-height: 1;
    width: 100%;
  }
</style></head>
<body><div class="mark">M</div></body></html>`

const buildIco = (pngEntries: Buffer[]) => {
  const count = pngEntries.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)
  const entries: Buffer[] = []
  let offset = 6 + 16 * count
  const sizes = [16, 32]
  pngEntries.forEach((png, i) => {
    const entry = Buffer.alloc(16)
    const size = sizes[i] ?? 0
    entry.writeUInt8(size === 256 ? 0 : size, 0)
    entry.writeUInt8(size === 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(png.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    offset += png.length
  })
  return Buffer.concat([header, ...entries, ...pngEntries])
}

const main = async () => {
  const browser = await chromium.launch()
  const shots: Record<number, Buffer> = {}
  for (const size of [16, 32, 180]) {
    const page = await browser.newPage({
      viewport: { width: size, height: size },
      deviceScaleFactor: 1,
    })
    // Opaque, full-bleed, square: iOS composites transparency onto black and
    // applies its own corner mask, so pre-rounding produces black wedges.
    await page.setContent(markHtml(size), { waitUntil: "networkidle" })
    shots[size] = Buffer.from(await page.screenshot({ type: "png" }))
    await page.close()
  }
  await browser.close()

  const icoTarget = path.resolve(repoRoot, "public/favicon.ico")
  const png16 = shots[16]
  const png32 = shots[32]
  const png180 = shots[180]
  if (!png16 || !png32 || !png180) throw new Error("capture failed")
  writeFileSync(icoTarget, buildIco([png16, png32]))
  const appleTarget = path.resolve(repoRoot, "public/apple-touch-icon.png")
  writeFileSync(appleTarget, png180)
  process.stdout.write(`wrote ${icoTarget} and ${appleTarget}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
