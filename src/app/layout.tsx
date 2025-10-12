import type { Metadata } from "next"
import "./globals.css"
import { baseLocale } from "@/i18n/i18n-util"

export const metadata: Metadata = {
  title: "Marco Toniut",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={baseLocale}>
      <body>{children}</body>
    </html>
  )
}
