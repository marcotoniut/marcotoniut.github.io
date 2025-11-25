import type { Metadata } from "next"
import { i18nDictionary } from "@/app/[lang]/common"
import { LayoutContent } from "@/app/[lang]/layout.content"
import { buildHomePageMetadata, HomePageContent } from "@/app/content"
import { baseLocale } from "@/i18n/i18n-util"

export const metadata: Metadata = buildHomePageMetadata(baseLocale)

export default async function RootHomePage() {
  const i18n = await i18nDictionary(baseLocale)

  return (
    <LayoutContent locale={i18n.locale} translation={i18n.dictionary}>
      <HomePageContent dict={i18n.dictionary} locale={baseLocale} />
    </LayoutContent>
  )
}
