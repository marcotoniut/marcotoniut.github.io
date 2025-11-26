import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import type { Locales } from "@/i18n/i18n-types"
import { buildLocalizedHref } from "@/utils/locale"
import { i18nDictionary } from "../../common"
import { buildLocalizedMetadataFromMeta } from "../../common/metadata"
import { resolveLocale } from "../../utils"
import * as projectStyles from "./carcinisation.css"
import { CarcinisationContent } from "./content"
import { getCarcinisationCopy } from "./i18n"

type PageParams = {
  params: Promise<{ lang: Locales }>
}

const metadataTitle = "Carcinisation"

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)

  const description = getCarcinisationCopy(locale).short

  return buildLocalizedMetadataFromMeta({
    locale,
    meta: { title: metadataTitle, description },
    pathSuffix: "projects/carcinisation",
  })
}

export default async function CarcinisationPage({ params }: PageParams) {
  const { lang } = await params
  const locale = resolveLocale(lang)
  const { dictionary: dict } = await i18nDictionary(locale)

  return (
    <div className={`${projectStyles.pageShell} ${projectStyles.gbBackdrop}`}>
      <div className={projectStyles.pageShellContent}>
        <div className={projectStyles.pageHeader}>
          <Header
            currentLocale={locale}
            backLink={{
              href: buildLocalizedHref(locale),
              label: dict.Common.goBack,
            }}
          />
        </div>
        <main>
          <CarcinisationContent locale={locale} />
        </main>
        <Footer className={projectStyles.footer} />
      </div>
    </div>
  )
}
