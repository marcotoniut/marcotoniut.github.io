#!/usr/bin/env tsx

/**
 * Generate sitemap.xml for marcotoniut.github.io
 *
 * This script creates a sitemap with all public routes to help search engines
 * discover and index the site content. It excludes utility pages and includes
 * localized versions of each page.
 *
 * Run: pnpm tsx scripts/generate-sitemap.ts
 */

import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { locales } from "../src/i18n/i18n-util"

const BASE_URL = "https://marcotoniut.github.io"

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  priority: number
}

/**
 * Get current date in ISO format for lastmod
 */
function getLastModDate(): string {
  const date = new Date().toISOString().split("T")[0]
  if (!date) {
    throw new Error("Failed to generate date")
  }
  return date
}

/**
 * Generate sitemap URLs for all public pages
 */
function generateSitemapUrls(): SitemapUrl[] {
  const lastmod = getLastModDate()
  const urls: SitemapUrl[] = []

  // Root redirect (low priority, as it redirects to /en/)
  urls.push({
    loc: `${BASE_URL}/`,
    lastmod,
    changefreq: "monthly",
    priority: 0.5,
  })

  // Localized home pages
  for (const locale of locales) {
    urls.push({
      loc: `${BASE_URL}/${locale}/`,
      lastmod,
      changefreq: "monthly",
      priority: 1.0,
    })
  }

  // CV redirect
  urls.push({
    loc: `${BASE_URL}/cv/`,
    lastmod,
    changefreq: "monthly",
    priority: 0.6,
  })

  // Localized CV pages
  for (const locale of locales) {
    urls.push({
      loc: `${BASE_URL}/${locale}/cv/`,
      lastmod,
      changefreq: "monthly",
      priority: 0.9,
    })
  }

  // Localized contact pages
  for (const locale of locales) {
    urls.push({
      loc: `${BASE_URL}/${locale}/contact/`,
      lastmod,
      changefreq: "yearly",
      priority: 0.5,
    })
  }

  // Localized project pages
  const projects = ["carcinisation", "sonicthames"]
  for (const locale of locales) {
    for (const project of projects) {
      urls.push({
        loc: `${BASE_URL}/${locale}/projects/${project}/`,
        lastmod,
        changefreq: "yearly",
        priority: 0.7,
      })
    }
  }

  return urls
}

/**
 * Generate XML sitemap content
 */
function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
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

/**
 * Main execution
 */
function main() {
  console.log("🗺️  Generating sitemap.xml...")

  const urls = generateSitemapUrls()
  const xml = generateSitemapXml(urls)

  const outputPath = join(process.cwd(), "public", "sitemap.xml")
  writeFileSync(outputPath, xml, "utf-8")

  console.log(`✅ Sitemap generated with ${urls.length} URLs`)
  console.log(`📍 Location: ${outputPath}`)
  console.log(`🌐 Available at: ${BASE_URL}/sitemap.xml`)
}

main()
