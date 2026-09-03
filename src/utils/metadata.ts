/**
 * Metadata utilities for SEO and structured data
 *
 * This module provides helpers for generating:
 * - JSON-LD structured data for search engines
 * - OpenGraph and Twitter card metadata
 * - Anti-AI meta tags to prevent content scraping for training
 */

import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import type { Locales } from "@/i18n/i18n-types"

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
 * Generate OpenGraph metadata for social media sharing
 *
 * @param params - Page-specific metadata
 * @returns Metadata object with OpenGraph tags
 */
export function generateOpenGraphMetadata(params: {
  title: string
  description: string
  url: string
  image?: string
  locale?: Locales
  localeTag?: string
}) {
  const { title, description, url, image, locale = "en", localeTag } = params

  // `satisfies` rather than an annotation: Metadata["openGraph"] is a wide
  // union, so annotating would erase `type` and the image shape from the
  // inferred type and force callers to cast.
  return {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: localeTag ?? locale,
    type: "website",
    images: [
      {
        url: image || siteConfig.social.ogImage,
        width: 1200,
        height: 630,
        alt:
          title === siteConfig.name
            ? siteConfig.name
            : `${siteConfig.name} - ${title}`,
      },
    ],
  } satisfies NonNullable<Metadata["openGraph"]>
}

/**
 * Generate Twitter Card metadata for Twitter sharing
 *
 * @param params - Page-specific metadata
 * @returns Metadata object with Twitter card tags
 */
export function generateTwitterMetadata(params: {
  title: string
  description: string
  image?: string
}) {
  const { title, description, image } = params

  return {
    card: "summary_large_image",
    title,
    description,
    images: [image || siteConfig.social.ogImage],
  } satisfies NonNullable<Metadata["twitter"]>
}

/**
 * Site-wide `<meta name="robots">` string.
 *
 * Set via `other.robots`, not Next's `robots` object: `noai` and `noimageai`
 * have no field there, and setting both produces conflicting tags that each
 * omit the other's directives. GitHub Pages serves no HTTP headers, making
 * the meta tag the only option.
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
