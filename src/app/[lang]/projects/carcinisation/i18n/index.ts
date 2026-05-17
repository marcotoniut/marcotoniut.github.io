import { createLocaleCopy } from "@/i18n/helpers"
import { enUk } from "./en"
import { esAr } from "./es"

export type CarcinisationCopy = typeof enUk

export const getCarcinisationCopy = createLocaleCopy<CarcinisationCopy>({
  en: enUk,
  es: esAr,
})
