import type { Locales } from "@/i18n/i18n-types"
import { loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocaleAsync } from "@/i18n/i18n-util.async"

export type LocaleKey = Locales
export const localeKeys: readonly LocaleKey[] = locales

/**
 * Loads the translations for `locale` (cached on `loadedLocales`) and returns
 * the dictionary along with the resolved locale.
 */
export async function i18nDictionary(locale: Locales) {
  await loadLocaleAsync(locale)
  return {
    locale,
    dictionary: loadedLocales[locale],
  }
}
