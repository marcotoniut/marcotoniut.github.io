import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Box } from "@/components/ui/primitives"
import { useI18nContext } from "@/i18n/i18n-react"
import { useDictionary } from "@/i18n/use-dictionary"
import * as commonStyles from "@/styles/layouts.css"
import { SonicThamesContent } from "./content"
import * as styles from "./sonicthames.css"

export default function SonicThamesPage() {
  const { locale } = useI18nContext()
  const dict = useDictionary()

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
