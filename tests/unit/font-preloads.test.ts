import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { SITE_FONT_FILES } from "@/styles/font-files"

const root = resolve(import.meta.dirname, "../..")

const pageFonts = import.meta.glob<{ default: readonly string[] }>(
  "/src/pages/**/+preloadFonts.ts",
  { eager: true },
)

const fontFaceSources = Array.from(
  readFileSync(resolve(root, "src/styles/globals.css"), "utf-8").matchAll(
    /url\("([^"]+)"\)/g,
  ),
  (match) => match[1],
)

describe("font preloads", () => {
  it.each([
    ...SITE_FONT_FILES,
    ...Object.values(pageFonts).flatMap((setting) => setting.default),
  ])("%s is a self-hosted file an @font-face rule uses", (file) => {
    expect(existsSync(resolve(root, "public", file.slice(1)))).toBe(true)
    expect(fontFaceSources).toContain(file)
  })
})
