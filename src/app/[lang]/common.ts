import { Locales } from "@/i18n/i18n-types"
import { loadedLocales } from "@/i18n/i18n-util"
import { loadLocaleAsync } from "@/i18n/i18n-util.async"

export async function i18nDictionary(locale: Locales) {
  await loadLocaleAsync(locale)
  return {
    locale,
    dictionary: loadedLocales[locale],
  }
}
