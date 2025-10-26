import type { Metadata } from "next"
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
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
