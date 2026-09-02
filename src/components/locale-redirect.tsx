"use client"

import { useEffect } from "react"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { getStoredLocale } from "@/utils/language-storage"
import { buildLocalizedHref, parseLocale } from "@/utils/locale"

const supportedLocales: readonly Locales[] = locales
const defaultLocale: Locales = baseLocale
const localePattern = new RegExp(
  `^/(?:${supportedLocales.join("|")})(?:/|$)`,
  "i",
)

type LocaleRedirectProps = {
  /**
   * Optional path segment appended after the locale.
   * Example: "cv" produces /{locale}/cv/
   */
  pathSuffix?: string
}

function getNavigatorLocales(): string[] {
  if (typeof navigator === "undefined") {
    return []
  }

  const localesFromNavigator: string[] = []

  if (Array.isArray(navigator.languages)) {
    localesFromNavigator.push(...navigator.languages)
  }

  if (typeof navigator.language === "string") {
    localesFromNavigator.push(navigator.language)
  }

  return localesFromNavigator
}

function pickSupportedLocale(candidateLocales: readonly string[]): Locales {
  for (const candidate of candidateLocales) {
    const normalized = candidate.toLowerCase()
    const exact = parseLocale(normalized)
    if (exact) {
      return exact
    }

    // Match the primary subtag, so `es-AR` picks `es`.
    const partial = parseLocale(normalized.split("-")[0])
    if (partial) {
      return partial
    }
  }

  return defaultLocale
}

export function LocaleRedirect({ pathSuffix }: LocaleRedirectProps) {
  useEffect(() => {
    try {
      const currentPath = window.location.pathname
      if (localePattern.test(currentPath)) {
        return
      }

      const storedLocale = getStoredLocale()
      const navigatorLocales = getNavigatorLocales()
      const candidateLocales = [
        ...(storedLocale ? [storedLocale] : []),
        ...navigatorLocales,
      ]
      const targetLocale = pickSupportedLocale(candidateLocales)
      const targetHref = buildLocalizedHref(targetLocale, pathSuffix)

      window.location.replace(targetHref)
    } catch {
      window.location.replace(buildLocalizedHref(defaultLocale, pathSuffix))
    }
  }, [pathSuffix])

  return null
}
