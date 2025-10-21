import type { Locales } from "@/i18n/i18n-types"
import { notFound } from "next/navigation"
import { locales } from "../../i18n/i18n-util"

export function resolveLocale(candidate: string | Locales): Locales {
  if (locales.includes(candidate as Locales)) {
    return candidate as Locales
  }

  notFound()
}
