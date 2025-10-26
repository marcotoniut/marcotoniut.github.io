"use client"

import { useEffect } from "react"

import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { buildLocalizedHref } from "@/utils/locale"

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
    const exactMatch = supportedLocales.find(
      (locale) => locale.toLowerCase() === normalized,
    )

    if (exactMatch) {
      return exactMatch
    }

    const shortCode = normalized.split("-")[0]
    const partialMatch = supportedLocales.find(
      (locale) => locale.split("-")[0]?.toLowerCase() === shortCode,
    )

    if (partialMatch) {
      return partialMatch
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

      const navigatorLocales = getNavigatorLocales()
      const targetLocale = pickSupportedLocale(navigatorLocales)
      const targetHref = buildLocalizedHref(targetLocale, pathSuffix)

      window.location.replace(targetHref)
    } catch {
      window.location.replace(buildLocalizedHref(defaultLocale, pathSuffix))
    }
  }, [pathSuffix])

  return null
}
