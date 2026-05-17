import { createLocaleCopy } from "@/i18n/helpers"
import { enUk } from "./en"
import { esAr } from "./es"

export type SonicThamesCopy = typeof enUk

export const getSonicThamesCopy = createLocaleCopy<SonicThamesCopy>({
  en: enUk,
  es: esAr,
})
