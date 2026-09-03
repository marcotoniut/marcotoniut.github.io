import type { Metadata } from "next"
import { Analytics } from "@/components/Analytics"
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { toLocaleTag } from "@/i18n/locale-tags"
import { pressStartFont } from "@/styles/fonts"
import { THEME_BOOTSTRAP_SCRIPT } from "@/styles/theme"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generatePersonStructuredData,
  generateTwitterMetadata,
  ROBOTS_DIRECTIVES,
  serializeJsonLd,
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
  // Meta-tag equivalent of the Referrer-Policy header. GitHub Pages cannot serve
  // custom headers (static export), and `<meta name="referrer">` is honoured by
  // browsers, so this is the one header-derived control that survives here.
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: generateOpenGraphMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    locale: baseLocale,
    localeTag: toLocaleTag(baseLocale),
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
    robots: ROBOTS_DIRECTIVES,
    "ai-policy": "noai, noimageai, nocontentai",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generatePersonStructuredData()

  return (
    <html
      className={pressStartFont.variable}
      lang={toLocaleTag(baseLocale)}
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Blocking theme script prevents flash of wrong theme
          dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }}
        />
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

        {/* JSON-LD structured data for search engines */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML; content is static and HTML-escaped via serializeJsonLd
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(structuredData),
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
