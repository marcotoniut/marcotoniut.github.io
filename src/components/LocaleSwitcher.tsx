"use client"

import { locales } from "@/i18n/i18n-util"
import type { Locales } from "@/i18n/i18n-types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locales }) {
  const pathname = usePathname()

  const getLocalizedPath = (newLocale: Locales) => {
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 0 && locales.includes(segments[0] as Locales)) {
      segments[0] = newLocale
      return `/${segments.join("/")}`
    }
    return `/${newLocale}`
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        display: "flex",
        gap: "0.5rem",
        zIndex: 1000,
      }}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            border: "1px solid #eaeaea",
            backgroundColor: locale === currentLocale ? "#0070f3" : "white",
            color: locale === currentLocale ? "white" : "#0070f3",
            fontWeight: locale === currentLocale ? "bold" : "normal",
            textTransform: "uppercase",
            fontSize: "0.875rem",
            transition: "all 0.2s ease",
          }}
        >
          {locale}
        </Link>
      ))}
    </div>
  )
}
