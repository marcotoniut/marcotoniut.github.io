import type { Metadata } from "next"
import { Analytics } from "@/components/Analytics"
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { pressStartFont } from "@/styles/fonts"
import { themeClass } from "@/styles/theme"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateAntiAIMetadata,
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"

import "@/styles/global.css.ts"
import "./globals.css"

const languageAlternates = Object.fromEntries(
  locales.map((locale) => [locale, buildLocalizedHref(locale)]),
)

const languagesWithDefault = {
  ...languageAlternates,
  "x-default": buildLocalizedHref(baseLocale),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  robots: generateAntiAIMetadata(),
  openGraph: generateOpenGraphMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    locale: baseLocale,
  }),
  twitter: generateTwitterMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
  }),
  alternates: {
    canonical: buildLocalizedHref(baseLocale),
    languages: languagesWithDefault,
  },
  other: {
    // Anti-AI training meta tags
    // Note: HTTP headers in next.config.js don't work on GitHub Pages (static hosting)
    // These meta tags provide the actual anti-AI protection
    "ai-policy": "noai, noimageai, nocontentai",
    robots: "index, follow, noai, noimageai",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data for Schema.org
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.baseUrl,
    jobTitle: "Systems Engineer",
    description: siteConfig.description,
    image: siteConfig.social.ogImage,
    sameAs: siteConfig.sameAs,
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

  return (
    <html
      className={`${themeClass} ${pressStartFont.variable}`}
      lang={baseLocale}
    >
      <head>
        {/* Font preloads for performance */}
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/ibm-plex-sans/ibm-plex-sans-400.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/ibm-plex-sans/ibm-plex-sans-500.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/space-grotesk/space-grotesk-600.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/space-grotesk/space-grotesk-700.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/cookie/cookie-regular.ttf"
          rel="preload"
          type="font/ttf"
        />

        {/* JSON-LD structured data for search engines */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML, content is statically generated and safe
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
        <GoogleAnalyticsLoader />
      </body>
    </html>
  )
}
