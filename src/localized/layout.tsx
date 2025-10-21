import type { ReactNode } from "react"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { i18nDictionary } from "@/localized/common"
import ClientComponent from "@/localized/layoutClient"

export function resolveLocale(candidate: string | Locales): Locales {
  return locales.includes(candidate as Locales)
    ? (candidate as Locales)
    : baseLocale
}

export async function LocalizedLayout({
  children,
  locale: candidateLocale,
}: {
  children: ReactNode
  locale: string | Locales
}) {
  const locale = resolveLocale(candidateLocale)
  const i18n = await i18nDictionary(locale)

  return (
    <ClientComponent locale={i18n.locale} translation={i18n.dictionary}>
      {children}
    </ClientComponent>
  )
}
