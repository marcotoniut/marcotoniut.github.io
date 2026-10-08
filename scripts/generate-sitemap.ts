#!/usr/bin/env node

/**
 * Generate sitemap.xml for marcotoniut.github.io
 *
 * Output is a pure function of the route list, so regenerating only produces a
 * diff when routes actually change. That is what lets the pre-push hook and
 * the release workflow treat any diff here as "you forgot to commit the
 * sitemap" rather than noise.
 *
 * Deliberately no `<lastmod>`: it would be stamped with the build date on
 * every run, which both churns the file daily and tells crawlers every page
 * changed when nothing did.
 *
 * Run: pnpm generate:sitemap
 */

import { writeFileSync } from "node:fs"
import { join } from "node:path"
import type { ChangeFreq } from "../src/config/routes.ts"
import { LOCALIZED_ROUTES, UNLOCALIZED_ROUTES } from "../src/config/routes.ts"
import { siteConfig } from "../src/config/site.ts"
import { locales } from "../src/i18n/i18n-util.ts"

interface SitemapUrl {
  loc: string
  changefreq: ChangeFreq
  priority: number
}

const toLoc = (...segments: string[]) => {
  const path = segments.filter(Boolean).join("/")
  return `${siteConfig.baseUrl}/${path ? `${path}/` : ""}`
}

function generateSitemapUrls(): SitemapUrl[] {
  return [
    ...UNLOCALIZED_ROUTES.map(({ path, ...rest }) => ({
      ...rest,
      loc: toLoc(path),
    })),
    ...locales.flatMap((locale) =>
      LOCALIZED_ROUTES.map(({ path, ...rest }) => ({
        ...rest,
        loc: toLoc(locale, path),
      })),
    ),
  ]
}

function generateSitemapXml(urls: readonly SitemapUrl[]): string {
  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`
}

function main() {
  const urls = generateSitemapUrls()
  const outputPath = join(process.cwd(), "public", "sitemap.xml")

  writeFileSync(outputPath, generateSitemapXml(urls), "utf-8")

  console.log(`Sitemap written to ${outputPath} (${urls.length} URLs)`)
}

main()
