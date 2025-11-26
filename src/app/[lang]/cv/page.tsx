import type { Metadata } from "next"
import type { Locales } from "@/i18n/i18n-types"
import { baseLocale, locales } from "@/i18n/i18n-util"
import { i18nDictionary } from "../common"
import { buildLocalizedMetadataFromMeta } from "../common/metadata"
import { CVContent } from "./content"

type PageProps = {
  params: Promise<{ lang: Locales }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = locales.includes(lang) ? lang : baseLocale
  const { dictionary: dict } = await i18nDictionary(locale)

  return buildLocalizedMetadataFromMeta({
    locale,
    meta: dict.CVPage.meta,
    pathSuffix: "cv",
  })
}

export default function CVPage() {
  const isPdfPrinting = process.env.NEXT_PUBLIC_PDF_PRINTING === "true"
  return <CVContent isPdfPrinting={isPdfPrinting} />
}
