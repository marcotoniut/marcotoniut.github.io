import type { Metadata } from "next"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { toLocaleTag } from "@/i18n/locale-tags"
import { buildLocalizedHref } from "@/utils/locale"
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
} from "@/utils/metadata"

type BuildLocalizedPageMetadataParams = {
  locale: Locales
  title: string
  description: string
  pathSuffix?: string | undefined
}

type MetadataFromDictParams = {
  locale: Locales
  meta: {
    title: string
    description: string
  }
  pathSuffix?: string | undefined
}

/**
 * Build the shared metadata structure that every localized page uses.
 * It wires canonical/alternate URLs plus OpenGraph/Twitter while emitting the
 * regional locale tag (e.g. `en-GB`/`es-AR`) everywhere.
 */
export function buildLocalizedPageMetadata({
  locale,
  title,
  description,
  pathSuffix,
}: BuildLocalizedPageMetadataParams): Metadata {
  const canonicalPath = buildLocalizedHref(locale, pathSuffix)

  const languageAlternates = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      buildLocalizedHref(availableLocale, pathSuffix),
    ]),
  )

  const languages = {
    ...languageAlternates,
    "x-default": buildLocalizedHref(baseLocale, pathSuffix),
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: generateOpenGraphMetadata({
      title,
      description,
      url: canonicalPath,
      localeTag: toLocaleTag(locale),
    }),
    twitter: generateTwitterMetadata({ title, description }),
  }
}

/**
 * Helper that builds metadata directly from a translation object.
 */
export function buildLocalizedMetadataFromMeta({
  locale,
  meta,
  pathSuffix,
}: MetadataFromDictParams): Metadata {
  return buildLocalizedPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    pathSuffix,
  })
}
