import type { Locales } from "@/i18n/i18n-types"
import { getSonicThamesCopy } from "./i18n"
import * as styles from "./sonicthames.css"

type ProjectContentProps = {
  locale: Locales
}

export function SonicThamesContent({ locale }: ProjectContentProps) {
  const copy = getSonicThamesCopy(locale)

  return (
    <div className={styles.content}>
      <header className={styles.hero}>
        <p className={styles.heroKicker}>{copy.hero.kicker}</p>
        <h1 className={styles.heroTitle}>{copy.hero.title}</h1>
        <div className={styles.accentLine} />
        <p className={styles.heroSubtitle}>{copy.hero.subtitle}</p>
        <p className={styles.heroSummary}>{copy.hero.summary}</p>
      </header>

      <article className={styles.sectionExposition}>
        <div className={styles.accentLine} />
        <h2 className={styles.sectionHeadingExposition}>
          {copy.sections.concept.heading}
        </h2>
        {copy.sections.concept.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.sectionTechnical}>
        <h2 className={styles.sectionHeadingTechnical}>
          {copy.sections.technical.heading}
        </h2>
        <ul className={styles.sectionList}>
          {copy.sections.technical.list.map((item) => (
            <li key={item} className={styles.sectionListItem}>
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.sectionAtmospheric}>
        <h2 className={styles.sectionHeadingAtmospheric}>
          {copy.sections.poetic.heading}
        </h2>
        {copy.sections.poetic.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.sectionAtmospheric}>
        <p className={styles.creditsHeading}>{copy.credits.heading}</p>
        <p className={styles.creditsText}>{copy.credits.text}</p>
      </article>
    </div>
  )
}
