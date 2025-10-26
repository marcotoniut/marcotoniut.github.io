import type { Metadata } from "next"
import { baseLocale, loadedLocales, locales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { CVContent } from "./content"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = locales.includes(lang as (typeof locales)[number])
    ? (lang as (typeof locales)[number])
    : baseLocale

  loadLocale(locale)
  const dict = loadedLocales[locale]

  return {
    title: dict.CVPage.meta.title,
    description: dict.CVPage.meta.description,
  }
}

export default function CVPage() {
  return <CVContent />
}
