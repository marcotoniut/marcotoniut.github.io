import type { Locales } from "./i18n-types"

const LOCALE_TAGS: Record<Locales, string> = {
  en: "en-GB",
  es: "es-AR",
}

export const toLocaleTag = (locale: Locales): string => LOCALE_TAGS[locale]
