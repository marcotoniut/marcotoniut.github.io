"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { toLocaleTag } from "@/i18n/locale-tags"
import TypesafeI18n from "../../i18n/i18n-react"
import type { Locales, Translation } from "../../i18n/i18n-types"
import { loadedLocales } from "../../i18n/i18n-util"
import { loadFormatters } from "../../i18n/i18n-util.sync"

interface Props {
  children: ReactNode
  locale: Locales
  translation: Translation
}

// Runs during render: TypesafeI18n reads loadedLocales in this same pass, and
// the write is idempotent per locale.
function registerTranslation(locale: Locales, translation: Translation) {
  loadedLocales[locale] = translation
  loadFormatters(locale)
}

export function LayoutContent({ children, locale, translation }: Props) {
  registerTranslation(locale, translation)

  useEffect(() => {
    document.documentElement.lang = toLocaleTag(locale)
  }, [locale])

  return <TypesafeI18n locale={locale}>{children}</TypesafeI18n>
}
