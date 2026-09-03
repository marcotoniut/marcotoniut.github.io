#!/usr/bin/env tsx

/**
 * Renders public/og.png (1200x630) from the self-hosted fonts, so the Open
 * Graph card always matches shipped typography and the title-block brand.
 * Rerun after brand changes: `pnpm tsx scripts/generate-og.ts`.
 */

import { readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "@playwright/test"

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)

const fontData = (relPath: string) =>
  readFileSync(path.resolve(repoRoot, "public/fonts", relPath)).toString(
    "base64",
  )

const html = `<!doctype html>
<html>
<head>
<style>
  @font-face {
    font-family: "Space Grotesk";
    font-weight: 700;
    src: url(data:font/woff2;base64,${fontData("space-grotesk/space-grotesk-700.woff2")}) format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-weight: 400;
    src: url(data:font/woff2;base64,${fontData("ibm-plex-mono/ibm-plex-mono-400.woff2")}) format("woff2");
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #0c120e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "IBM Plex Mono", monospace;
    color: #eff3ee;
  }
  .block {
    position: relative;
    width: 1040px;
    border: 1px solid rgba(154, 163, 156, 0.35);
    padding: 88px 72px;
  }
  .corner {
    position: absolute;
    font-size: 19px;
    letter-spacing: 0.22em;
    color: #9aa39c;
    background: #0c120e;
    padding: 0 14px;
  }
  .corner.tl { top: -11px; left: 40px; }
  .corner.tr { top: -11px; right: 40px; }
  h1 {
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    font-size: 104px;
    letter-spacing: -0.015em;
    line-height: 1.05;
    margin-bottom: 30px;
  }
  .url { font-size: 24px; letter-spacing: 0.06em; color: #6fe0a0; }
</style>
</head>
<body>
  <div class="block">
    <span class="corner tl">SOFTWARE ENGINEER · TECHNICAL LEAD</span>
    <span class="corner tr">LONDON</span>
    <h1>Marco Toniut</h1>
    <div class="url">marcotoniut.github.io</div>
  </div>
</body>
</html>`

const main = async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  })
  await page.setContent(html, { waitUntil: "networkidle" })
  const png = await page.screenshot({ type: "png" })
  const target = path.resolve(repoRoot, "public/og.png")
  writeFileSync(target, png)
  await browser.close()
  process.stdout.write(`wrote ${target} (${png.length} bytes)\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
