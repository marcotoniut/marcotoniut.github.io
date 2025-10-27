import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"

const STORAGE_KEY = "marcotoniut-locale"

export function getStoredLocale(): Locales | undefined {
  if (typeof window === "undefined") {
    return undefined
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (
      stored &&
      typeof stored === "string" &&
      locales.includes(stored as Locales)
    ) {
      return stored as Locales
    }
  } catch {
    // Ignore storage errors (e.g., private mode)
  }

  return undefined
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
