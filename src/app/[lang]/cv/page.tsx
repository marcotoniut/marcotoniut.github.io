import { loadedLocales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import type { MetadataAttributes } from "@/types"
import type { Metadata } from "next"
import { CVContent } from "./content"

export async function generateMetadata({
  params,
}: MetadataAttributes): Promise<Metadata> {
  loadLocale(params.lang)
  const dict = loadedLocales[params.lang]

  return {
    title: dict.CVPage.meta.title,
    description: dict.CVPage.meta.description,
  }
}

export default function CVPage() {
  return <CVContent />
}
