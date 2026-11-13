import type { Locales } from "@/i18n/i18n-types"
import { loadedLocales } from "@/i18n/i18n-util"
import type { Seo } from "@/utils/seo"

export default function seo(locale: Locales): Seo {
  return { ...loadedLocales[locale].HomePage.meta, indexable: true }
}
