import Image from "next/image"
import type { ReactNode } from "react"
import { GithubIcon, ItchIOIcon } from "@/components/Icons"
import { TrackedAnchor } from "@/components/TrackedLink"
import type { Locales } from "@/i18n/i18n-types"
import { pressStartFont } from "@/styles/fonts"
import * as styles from "./carcinisation.css"
import { carcinisationCopyEn } from "./copy/en"
import { carcinisationCopyEs } from "./copy/es"

const carcinisationCopy = {
  en: carcinisationCopyEn,
  es: carcinisationCopyEs,
} as const

const screenshotGallery = [
  {
    src: "/projects/carcinisation/placeholder-1.svg",
    alt: {
      en: "Carcinisation — cockpit mock screenshot",
      es: "Carcinisation — captura ficticia de la cabina",
    },
    caption: {
      en: "Incoming wave indicator UI mock",
      es: "Mock de interfaz con oleadas entrantes",
    },
  },
  {
    src: "/projects/carcinisation/placeholder-2.svg",
    alt: {
      en: "Carcinisation — crash site battle placeholder",
      es: "Carcinisation — placeholder de combate en el accidente",
    },
    caption: {
      en: "Prototype top-down encounter",
      es: "Encuentro top-down del prototipo",
    },
  },
  {
    src: "/projects/carcinisation/placeholder-3.svg",
    alt: {
      en: "Carcinisation — space stage concept placeholder",
      es: "Carcinisation — placeholder de la fase espacial",
    },
    caption: {
      en: "Space stage concept to restore post-jam",
      es: "Concepto de fase espacial para el post-jam",
    },
  },
] as const

type LocaleKey = keyof typeof carcinisationCopy

type ProjectContentProps = {
  locale: Locales
}

export function CarcinisationContent({ locale }: ProjectContentProps) {
  const safeLocale: LocaleKey = locale === "es" ? "es" : "en"
  const t = carcinisationCopy[safeLocale]

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div>
          <p className={`${pressStartFont.className} ${styles.kicker}`}>
            CARTRIDGE
          </p>
          <h1 className={`${pressStartFont.className} ${styles.title}`}>
            Carcinisation
          </h1>
          <p className={`${pressStartFont.className} ${styles.subtitle}`}>
            {t.meta.subtitle}
          </p>
        </div>

        <p className={styles.description}>{t.short}</p>

        <div className={styles.ctaRow}>
          <TrackedAnchor
            className={styles.button}
            href={t.links.itch}
            target="_blank"
            rel="noreferrer"
            locale={safeLocale}
            trackingType="project_link"
            trackingParams={{
              link_location: "carcinisation_project_page",
              link_type: "itch_io",
              link_url: t.links.itch,
              project_name: "carcinisation",
            }}
          >
            <ItchIOIcon />
            {t.labels.playableCta}
          </TrackedAnchor>
          <TrackedAnchor
            className={styles.button}
            href={t.links.github}
            target="_blank"
            rel="noreferrer"
            locale={safeLocale}
            trackingType="project_link"
            trackingParams={{
              link_location: "carcinisation_project_page",
              link_type: "github",
              link_url: t.links.github,
              project_name: "carcinisation",
            }}
          >
            <GithubIcon />
            {t.labels.sourceCta}
          </TrackedAnchor>
        </div>

        <div className={styles.metaRow}>
          <MetaItem
            label={t.labels.jamMeta}
            value={
              <TrackedAnchor
                className={styles.link}
                href="https://itch.io/jam/gbjam-11"
                target="_blank"
                rel="noreferrer"
                locale={safeLocale}
                trackingType="project_link"
                trackingParams={{
                  link_location: "carcinisation_project_page_meta",
                  link_type: "jam",
                  link_url: "https://itch.io/jam/gbjam-11",
                  project_name: "carcinisation",
                }}
              >
                GBJam 11
              </TrackedAnchor>
            }
            headingClassName={pressStartFont.className}
          />
          <MetaItem
            label={t.labels.platformMeta}
            value={t.meta.platform}
            headingClassName={pressStartFont.className}
          />
          <MetaItem
            label={t.labels.statusMeta}
            value={t.meta.status}
            headingClassName={pressStartFont.className}
          />
          <MetaItem
            label={t.labels.engineMeta}
            value={t.meta.engine}
            headingClassName={pressStartFont.className}
          />
        </div>
      </div>

      <div className={styles.sectionGrid}>
        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.story}
          </h2>
          {t.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.jamNotes}
          </h2>
          <p className={styles.jamSummary}>{t.jamSummary}</p>
          <ul>
            {t.jam.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.knownIssues}
          </h2>
          <ul>
            {t.knownIssues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.controls}
          </h2>
          <ControlsTable
            rows={t.controls}
            leftHeading={t.labels.controlsHeadingLeft}
            rightHeading={t.labels.controlsHeadingRight}
          />
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.tech}
          </h2>
          <TechList items={t.tech} />
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.jamTeam}
          </h2>
          <p className={styles.continuationNote}>{t.continuationNote}</p>
          <ul className={styles.teamList}>
            {t.jamTeam.map((member) => (
              <li key={member.name}>
                {"url" in member && member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
                {"role" in member && member.role ? <> — {member.role}</> : null}
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.screenshots}
          </h2>
          <ScreenshotGallery locale={safeLocale} />
        </article>

        <article className={styles.card}>
          <h2
            className={`${pressStartFont.className} ${styles.sectionHeading}`}
          >
            {t.labels.externalLinks}
          </h2>
          <ul className={styles.linkList}>
            <li>
              <TrackedAnchor
                href={t.links.itch}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                locale={safeLocale}
                trackingType="project_link"
                trackingParams={{
                  link_location: "carcinisation_project_page_external_links",
                  link_type: "itch_io",
                  link_url: t.links.itch,
                  project_name: "carcinisation",
                }}
              >
                itch.io
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={t.links.github}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                locale={safeLocale}
                trackingType="project_link"
                trackingParams={{
                  link_location: "carcinisation_project_page_external_links",
                  link_type: "github",
                  link_url: t.links.github,
                  project_name: "carcinisation",
                }}
              >
                GitHub
              </TrackedAnchor>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

type MetaItemProps = {
  label: string
  value: ReactNode
  headingClassName: string
}

function MetaItem({ label, value, headingClassName }: MetaItemProps) {
  return (
    <div className={styles.metaItem}>
      <span className={`${headingClassName} ${styles.metaLabel}`}>{label}</span>
      <span className={styles.metaValue}>{value}</span>
    </div>
  )
}

type ControlsTableProps = {
  rows: ReadonlyArray<readonly [string, string]>
  leftHeading: string
  rightHeading: string
}

function ControlsTable({
  rows,
  leftHeading,
  rightHeading,
}: ControlsTableProps) {
  return (
    <table className={styles.controlsTable}>
      <thead>
        <tr>
          <th scope="col">{leftHeading}</th>
          <th scope="col">{rightHeading}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={`${label}-${value}`}>
            <td>{label}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type TechListProps = {
  items: ReadonlyArray<string>
}

function TechList({ items }: TechListProps) {
  return (
    <ul className={styles.techList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

type ScreenshotGalleryProps = {
  locale: LocaleKey
}

function ScreenshotGallery({ locale }: ScreenshotGalleryProps) {
  return (
    <div className={styles.gallery}>
      {screenshotGallery.map((shot) => (
        <figure key={shot.src} className={styles.screenshotCard}>
          <Image
            src={shot.src}
            alt={shot.alt[locale]}
            width={160}
            height={144}
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
            className={styles.screenshotImage}
          />
          <figcaption className={styles.figcaption}>
            {shot.caption[locale]}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
