import type { Locales } from "@/i18n/i18n-types"
import { baseLocale } from "@/i18n/i18n-util"
import type { CarcinisationCopy } from "./en"
import { enUk } from "./en"
import { esAr } from "./es"

const copyByLocale: Record<Locales, CarcinisationCopy> = {
  en: enUk,
  es: esAr,
}

export const getCarcinisationCopy = (locale: Locales): CarcinisationCopy =>
  copyByLocale[locale] ?? copyByLocale[baseLocale]
