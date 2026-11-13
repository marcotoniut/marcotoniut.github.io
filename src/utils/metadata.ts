/**
 * Metadata utilities for SEO and structured data
 *
 * This module provides helpers for generating:
 * - JSON-LD structured data for search engines
 * - Anti-AI meta tags to prevent content scraping for training
 */

import { siteConfig } from "@/config/site"

/**
 * Schema.org Person type for JSON-LD structured data
 */
export interface PersonStructuredData {
  "@context": "https://schema.org"
  "@type": "Person"
  name: string
  url: string
  jobTitle: string
  description: string
  image: string
  sameAs: string[]
  address?: {
    "@type": "Place"
    addressLocality: string
    addressCountry: string
  }
  knowsAbout?: string[]
}

/**
 * Generate JSON-LD structured data for Marco Toniut as a Person
 *
 * This helps search engines understand who Marco is, his role,
 * and his professional presence across different platforms.
 */
export function generatePersonStructuredData(): PersonStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.baseUrl,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    image: siteConfig.social.ogImage,
    sameAs: [...siteConfig.sameAs],
    address: {
      "@type": "Place",
      addressLocality: "London",
      addressCountry: "UK",
    },
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Rust",
      "Bevy Engine",
      "Game Development",
      "Front-End Development",
      "Software Architecture",
    ],
  }
}

/**
 * `<meta name="robots">` for indexable pages. GitHub Pages serves no HTTP
 * headers, so the meta tag is the only way to send `noai` and `noimageai`.
 */
export const ROBOTS_DIRECTIVES = [
  "index",
  "follow",
  "max-image-preview:large",
  "max-snippet:-1",
  "max-video-preview:-1",
  // Informal opt-out that some AI crawlers honour.
  "noai",
  "noimageai",
].join(", ")

/**
 * Serialize data for safe inlining inside a `<script>` element.
 *
 * `JSON.stringify` does not escape `<`, so a value containing `</script>`
 * (or `<!--`) would break out of the script context — an XSS vector if the
 * data ever becomes attacker-influenced. Escaping the HTML-significant
 * characters as unicode escapes keeps the JSON valid while making breakout
 * impossible.
 */
export function serializeJsonLd(structuredData: unknown) {
  return JSON.stringify(structuredData)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
}
