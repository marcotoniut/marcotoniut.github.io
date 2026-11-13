import type { Locales } from "@/i18n/i18n-types"
import type { Seo } from "@/utils/seo"
import { getCarcinisationCopy } from "./i18n"

export default function seo(locale: Locales): Seo {
  return {
    title: "Carcinisation",
    description: getCarcinisationCopy(locale).short,
    indexable: true,
  }
}
