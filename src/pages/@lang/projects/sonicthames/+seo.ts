import type { Locales } from "@/i18n/i18n-types"
import type { Seo } from "@/utils/seo"
import { getSonicThamesCopy } from "./i18n"

export default function seo(locale: Locales): Seo {
  return {
    title: "SonicThames",
    description: getSonicThamesCopy(locale).meta.description,
    indexable: true,
  }
}
