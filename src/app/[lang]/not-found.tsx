import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import type { MetadataAttributes, PageProps } from "@/types"
import type { Metadata } from "next"
import { NotFoundContent } from "./not-found.content"

export async function generateMetadata({
  params,
}: MetadataAttributes): Promise<Metadata> {
  const { lang } = await params
  const locale = locales.includes(lang as (typeof locales)[number])
    ? (lang as (typeof locales)[number])
    : baseLocale

  loadLocale(locale)
  const dict = loadedLocales[locale]
  return {
    title: dict.NotFoundPage.meta.title,
    description: dict.NotFoundPage.meta.description,
  }
}

export default async function NotFoundPage({ params: _params }: PageProps) {
  return <NotFoundContent />
}
