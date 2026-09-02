import type { Locales } from "@/i18n/i18n-types"
import { parseLocale } from "@/utils/locale"

const STORAGE_KEY = "marcotoniut-locale"

export function getStoredLocale(): Locales | undefined {
  if (typeof window === "undefined") {
    return undefined
  }

  try {
    return parseLocale(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    // Ignore storage errors (e.g., private mode)
    return undefined
  }
}

export function setStoredLocale(locale: Locales): void {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Ignore storage errors
  }
}
