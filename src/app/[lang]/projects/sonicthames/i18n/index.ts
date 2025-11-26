import type { Locales } from "@/i18n/i18n-types"
import { baseLocale } from "@/i18n/i18n-util"
import type { SonicThamesCopy } from "./en"
import { enUk } from "./en"
import { esAr } from "./es"

const copyByLocale: Record<Locales, SonicThamesCopy> = {
  en: enUk,
  es: esAr,
}

export const getSonicThamesCopy = (locale: Locales): SonicThamesCopy =>
  copyByLocale[locale] ?? copyByLocale[baseLocale]
