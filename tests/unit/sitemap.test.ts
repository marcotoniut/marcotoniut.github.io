import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const sitemapPath = resolve(import.meta.dirname, "../../public/sitemap.xml")
const sitemapXml = readFileSync(sitemapPath, "utf-8")

function extractUrls(xml: string): string[] {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1] as string)
}

describe("sitemap.xml", () => {
  it("is valid XML with urlset root", () => {
    expect(sitemapXml).toContain('<?xml version="1.0"')
    expect(sitemapXml).toContain("<urlset")
  })

  const urls = extractUrls(sitemapXml)

  it("includes root redirect", () => {
    expect(urls).toContain("https://marcotoniut.github.io/")
  })

  it("includes all localized home pages", () => {
    expect(urls).toContain("https://marcotoniut.github.io/en/")
    expect(urls).toContain("https://marcotoniut.github.io/es/")
  })

  it("includes CV redirect and localized CV pages", () => {
    expect(urls).toContain("https://marcotoniut.github.io/cv/")
    expect(urls).toContain("https://marcotoniut.github.io/en/cv/")
    expect(urls).toContain("https://marcotoniut.github.io/es/cv/")
  })

  it("includes localized contact pages", () => {
    expect(urls).toContain("https://marcotoniut.github.io/en/contact/")
    expect(urls).toContain("https://marcotoniut.github.io/es/contact/")
  })

  it("includes localized project pages", () => {
    expect(urls).toContain(
      "https://marcotoniut.github.io/en/projects/carcinisation/",
    )
    expect(urls).toContain(
      "https://marcotoniut.github.io/es/projects/carcinisation/",
    )
    expect(urls).toContain(
      "https://marcotoniut.github.io/en/projects/sonicthames/",
    )
    expect(urls).toContain(
      "https://marcotoniut.github.io/es/projects/sonicthames/",
    )
  })

  it("has trailing slashes on all URLs", () => {
    for (const url of urls) {
      expect(url, `${url} should end with /`).toMatch(/\/$/)
    }
  })

  it("has valid priorities (0.0-1.0)", () => {
    const priorities = [
      ...sitemapXml.matchAll(/<priority>([^<]+)<\/priority>/g),
    ].map((m) => Number.parseFloat(m[1] as string))

    for (const p of priorities) {
      expect(p).toBeGreaterThanOrEqual(0)
      expect(p).toBeLessThanOrEqual(1)
    }
  })
})
