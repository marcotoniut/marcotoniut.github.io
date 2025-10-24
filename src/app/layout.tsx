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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
