import type { Locales } from "./i18n-types"

export const LOCALE_TAGS: Record<Locales, string> = {
  en: "en-GB",
  es: "es-AR",
}

export const toLocaleTag = (locale: Locales): string => LOCALE_TAGS[locale]
