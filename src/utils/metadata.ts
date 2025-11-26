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
    jobTitle: "Systems Engineer",
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
}): Metadata["openGraph"] {
  const { title, description, url, image, locale = "en", localeTag } = params

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
        alt: `${siteConfig.name} - ${title}`,
      },
    ],
  }
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
}): Metadata["twitter"] {
  const { title, description, image } = params

  return {
    card: "summary_large_image",
    title,
    description,
    images: [image || siteConfig.social.ogImage],
  }
}

/**
 * Generate anti-AI robot directives
 *
 * These meta tags instruct compliant crawlers not to use the content
 * for AI training, image generation, or other machine learning purposes.
 *
 * @returns Metadata object with robot directives
 */
export function generateAntiAIMetadata(): Metadata["robots"] {
  return {
    // Allow search engine indexing
    index: true,
    follow: true,
    // Prevent AI training usage
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    // Custom directives for AI prevention
    // Note: These are also set in HTTP headers via next.config.js
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  }
}

/**
 * Generate complete metadata for a page
 *
 * Combines all SEO elements: title, description, OpenGraph,
 * Twitter cards, robots directives, and canonical URL.
 *
 * @param params - Page-specific metadata parameters
 * @returns Complete Next.js Metadata object
 */
export function generatePageMetadata(params: {
  title: string
  description: string
  path: string
  locale?: Locales
  image?: string
}): Metadata {
  const { title, description, path, locale = "en", image } = params
  const url = `${siteConfig.baseUrl}${path}`

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    robots: generateAntiAIMetadata(),
    openGraph: generateOpenGraphMetadata({
      title,
      description,
      url,
      ...(image ? { image } : {}),
      locale,
    }),
    twitter: generateTwitterMetadata({
      title,
      description,
      ...(image ? { image } : {}),
    }),
    alternates: {
      canonical: url,
    },
  }
}

/**
 * Generate a script tag with JSON-LD structured data
 *
 * @param structuredData - Schema.org structured data object
 * @returns Script element props for Next.js
 */
export function generateStructuredDataScript(
  structuredData: PersonStructuredData | object,
) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData),
    },
  }
}
