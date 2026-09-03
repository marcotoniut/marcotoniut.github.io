import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Box } from "@/components/ui/primitives"
import type { Locales } from "@/i18n/i18n-types"
import * as commonStyles from "@/styles/layouts.css"
import { i18nDictionary } from "../../common"
import { buildLocalizedMetadataFromMeta } from "../../common/metadata"
import { resolveLocale } from "../../utils"
import { SonicThamesContent } from "./content"
import { getSonicThamesCopy } from "./i18n"
import * as styles from "./sonicthames.css"

type PageParams = {
  params: Promise<{ lang: Locales }>
}

const metadataTitle = "SonicThames"

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)

  const description = getSonicThamesCopy(locale).meta.description

  return buildLocalizedMetadataFromMeta({
    locale,
    meta: { title: metadataTitle, description },
    pathSuffix: "projects/sonicthames",
  })
}

export default async function SonicThamesPage({ params }: PageParams) {
  const { lang } = await params
  const locale = resolveLocale(lang)
  const { dictionary: dict } = await i18nDictionary(locale)

  return (
    <div className={`${commonStyles.pageContainer} ${styles.page}`}>
      <Header currentLocale={locale} nav={dict.Common.nav} />

      <Box
        width="full"
        maxWidth="content"
        marginInline="auto"
        paddingBlock="lg"
      >
        <main className={styles.main}>
          <SonicThamesContent locale={locale} />
        </main>
      </Box>

      <Box
        width="full"
        maxWidth="content"
        marginInline="auto"
        paddingBlock="sm"
      >
        <Footer className={styles.footerOverride} labels={dict.Common.footer} />
      </Box>
    </div>
  )
}
