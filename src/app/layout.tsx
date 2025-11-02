import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import "@/styles/global.css.ts"
import { Analytics } from "@/components/Analytics"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { env } from "@/env"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { themeClass } from "@/styles/theme"
import { buildLocalizedHref } from "@/utils/locale"

const languageAlternates = Object.fromEntries(
  locales.map((locale) => [locale, buildLocalizedHref(locale)]),
)

const languagesWithDefault = {
  ...languageAlternates,
  "x-default": buildLocalizedHref(baseLocale),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: siteConfig.name,
  alternates: {
    canonical: buildLocalizedHref(baseLocale),
    languages: languagesWithDefault,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaMeasurementId = env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html className={themeClass} lang={baseLocale}>
      <head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/satoshi/satoshi-400.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/satoshi/satoshi-500.woff2"
          rel="preload"
          type="font/woff2"
        />
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
          href="/fonts/cookie/cookie-regular.ttf"
          rel="preload"
          type="font/ttf"
        />
      </head>
      <body>
        {gaMeasurementId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        ) : null}
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
