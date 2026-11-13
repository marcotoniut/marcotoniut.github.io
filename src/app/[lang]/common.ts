import type { Locales } from "@/i18n/i18n-types"
import { loadedLocales } from "@/i18n/i18n-util"
import { loadLocaleAsync } from "@/i18n/i18n-util.async"

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
