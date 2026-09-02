import { notFound } from "next/navigation"
import type { Locales } from "@/i18n/i18n-types"
import { parseLocale } from "@/utils/locale"

export function resolveLocale(candidate: string): Locales {
  return parseLocale(candidate) ?? notFound()
}
