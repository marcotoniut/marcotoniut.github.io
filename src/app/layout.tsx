import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import "@/styles/global.css.ts"
import { ThemeProvider } from "@/components/theme-provider"
import { baseLocale } from "@/i18n/i18n-util"
import { themeClass } from "@/styles/theme"

export const metadata: Metadata = {
  title: "Marco Toniut",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
