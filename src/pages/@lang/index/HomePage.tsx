import { z } from "zod/mini"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Trace } from "@/components/Trace"
import { TrackedLink } from "@/components/TrackedLink"
import { Box, Stack } from "@/components/ui/primitives"
import { useI18nContext } from "@/i18n/i18n-react"
import { useDictionary } from "@/i18n/use-dictionary"
import { useData } from "@/renderer/page-context"
import * as commonStyles from "@/styles/layouts.css"
import { buildLocalizedHref } from "@/utils/locale"
import * as styles from "./home.css"

// Serialised from the prerender's +data; JSON drops an undefined revision.
const HomeDataSchema = z.object({ contentRev: z.optional(z.string()) })

type DesignationProps = {
  index: string
  category: string
  year?: number
  stack: string
}

/**
 * Structural designation fields joined for display; `year` is explicitly
 * optional so a missing fact renders as a shorter designation, never as an
 * invented value.
 */
const Designation = ({ index, category, year, stack }: DesignationProps) => (
  <span className={styles.designation}>
    {[index, category, year?.toString(), stack]
      .filter((field) => field !== undefined)
      .join(" · ")}
  </span>
)

export const HomePage = () => {
  const { locale } = useI18nContext()
  const dict = useDictionary()
  const { contentRev } = HomeDataSchema.parse(useData())

  return (
    <div className={commonStyles.pageContainer}>
      <Header currentLocale={locale} nav={dict.Common.nav} />

      <main className={styles.main}>
        <section className={styles.titleBlock}>
          <span className={`${styles.corner} ${styles.cornerTl}`}>
            {dict.CVPage.profession}
          </span>
          <span className={`${styles.corner} ${styles.cornerTr}`}>
            {dict.HomePage.location}
          </span>

          <h1 className={styles.title}>Marco Toniut</h1>
          <p className={styles.range}>{dict.HomePage.range}</p>

          <Box
            as="nav"
            display="flex"
            flexWrap="wrap"
            rowGap="md"
            columnGap="xxl"
            marginTop="xxl"
          >
            <TrackedLink
              className={styles.ctaLink}
              href={buildLocalizedHref(locale, "contact")}
              locale={locale}
              trackingType="contact_navigation"
              fromPage="home_page"
            >
              {dict.HomePage.contact.hint}
            </TrackedLink>
            <TrackedLink
              className={styles.ctaLink}
              href={buildLocalizedHref(locale, "cv")}
              locale={locale}
              trackingType="cv_navigation"
              fromPage="home_page"
            >
              {dict.HomePage.cv.hint}
            </TrackedLink>
          </Box>

          {contentRev !== undefined ? (
            <span className={`${styles.corner} ${styles.cornerBr}`}>
              {`REV ${contentRev}`}
            </span>
          ) : null}
        </section>

        <section className={styles.bench}>
          <Trace />
          <p className={styles.benchLabel}>{dict.HomePage.workLabel}</p>

          <TrackedLink
            className={`${styles.panel} ${styles.panelCarcinisation}`}
            href={buildLocalizedHref(locale, "projects/carcinisation")}
            locale={locale}
            trackingType="project_navigation"
            projectName="carcinisation"
            fromPage="home_page"
          >
            <Stack as="span" gap="sm">
              <Designation
                index="01"
                category={dict.HomePage.carcinisation.category}
                year={2023}
                stack={dict.HomePage.carcinisation.stack}
              />
              <h2 className={styles.panelTitle}>
                {dict.HomePage.carcinisation.label}
              </h2>
              <p className={styles.pitch}>
                {dict.HomePage.carcinisation.pitch}
              </p>
            </Stack>
            <span className={styles.mediaMount}>
              <img
                alt={dict.HomePage.carcinisation.mediaAlt}
                className={styles.mediaImage}
                decoding="async"
                height={144}
                loading="lazy"
                src="/projects/carcinisation/cover.png"
                width={160}
              />
            </span>
          </TrackedLink>

          <TrackedLink
            className={`${styles.panel} ${styles.panelSonicthames}`}
            href={buildLocalizedHref(locale, "projects/sonicthames")}
            locale={locale}
            trackingType="project_navigation"
            projectName="sonicthames"
            fromPage="home_page"
          >
            <Stack as="span" gap="sm">
              <Designation
                index="02"
                category={dict.HomePage.sonicThames.category}
                stack={dict.HomePage.sonicThames.stack}
              />
              <h2 className={styles.panelTitle}>
                {dict.HomePage.sonicThames.label}
              </h2>
              <p className={styles.pitch}>{dict.HomePage.sonicThames.pitch}</p>
            </Stack>
          </TrackedLink>
        </section>
      </main>

      <Footer labels={dict.Common.footer} />
    </div>
  )
}
