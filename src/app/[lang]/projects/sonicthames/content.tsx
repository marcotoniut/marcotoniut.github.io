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

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>
          {copy.sections.introduction.heading}
        </h2>
        {copy.sections.introduction.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>
          {copy.sections.purpose.heading}
        </h2>
        {copy.sections.purpose.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>
          {copy.sections.technical.heading}
        </h2>
        {copy.sections.technical.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
        <ul className={styles.sectionList}>
          {copy.sections.technical.list.map((item) => (
            <li key={item} className={styles.sectionListItem}>
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>
          {copy.sections.scientific.heading}
        </h2>
        {copy.sections.scientific.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>
          {copy.sections.poetic.heading}
        </h2>
        {copy.sections.poetic.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>
          {copy.sections.metaDesign.heading}
        </h2>
        {copy.sections.metaDesign.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </article>

      <article className={styles.section}>
        <div className={styles.creditsBox}>
          <p className={styles.creditsHeading}>{copy.credits.heading}</p>
          <p className={styles.creditsText}>{copy.credits.text}</p>
        </div>
      </article>

      <article className={styles.section}>
        <h2 className={styles.sectionHeading}>{copy.cv.heading}</h2>
        <p className={styles.cvLine}>{copy.cv.line}</p>
        <ul className={styles.cvList}>
          {copy.cv.bullets.map((bullet) => (
            <li key={bullet} className={styles.cvListItem}>
              {bullet}
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
