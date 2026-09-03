import Image from "next/image"
import type { ReactNode } from "react"
import { ItchIOIcon } from "@/components/icons"
import { TrackedAnchor } from "@/components/TrackedLink"
import type { Locales } from "@/i18n/i18n-types"
import { pressStartFont } from "@/styles/fonts"
import * as styles from "./carcinisation.css"
import { getCarcinisationCopy } from "./i18n"

const PROJECT_NAME = "carcinisation" as const
const TRACKING_LOCATION = {
  page: "carcinisation_project_page",
  meta: "carcinisation_project_page_meta",
  externalLinks: "carcinisation_project_page_external_links",
} as const

// Captured from the itch.io web build, cropped to the game viewport.
const screenshotGallery = [
  {
    src: "/projects/carcinisation/shot-intro.png",
    alt: {
      en: "Captain Acrab seated in his ship's cabin, drawn in the game's four-colour palette",
      es: "El capitán Acrab sentado en la cabina de su nave, dibujado en la paleta de cuatro colores del juego",
    },
    caption: {
      en: "Intro sequence, captured from the web build",
      es: "Secuencia de introducción, capturada de la versión web",
    },
  },
  {
    src: "/projects/carcinisation/shot-mutation.png",
    alt: {
      en: "A clawed fist clenched against radiating light during the mutation cutscene",
      es: "Un puño con pinza cerrado contra una luz radiante durante la cinemática de la mutación",
    },
    caption: {
      en: "The mutation, mid-cutscene",
      es: "La mutación, en plena cinemática",
    },
  },
  {
    src: "/projects/carcinisation/shot-stage.png",
    alt: {
      en: "Top-down park stage with palm trees and benches, the score counter reading 100",
      es: "Fase de parque en vista cenital con palmeras y bancos, el contador de puntos marcando 100",
    },
    caption: {
      en: "Stage one in play, score counter live",
      es: "Primera fase en juego, contador de puntos activo",
    },
  },
] as const

type ProjectContentProps = {
  locale: Locales
}

export function CarcinisationContent({ locale }: ProjectContentProps) {
  const t = getCarcinisationCopy(locale)

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
            locale={locale}
            trackingType="project_link"
            trackingParams={{
              link_location: TRACKING_LOCATION.page,
              link_type: "itch_io",
              link_url: t.links.itch,
              project_name: PROJECT_NAME,
            }}
          >
            <ItchIOIcon />
            {t.labels.playableCta}
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
                locale={locale}
                trackingType="project_link"
                trackingParams={{
                  link_location: TRACKING_LOCATION.meta,
                  link_type: "jam",
                  link_url: "https://itch.io/jam/gbjam-11",
                  project_name: PROJECT_NAME,
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
          <ScreenshotGallery locale={locale} />
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
                locale={locale}
                trackingType="project_link"
                trackingParams={{
                  link_location: TRACKING_LOCATION.externalLinks,
                  link_type: "itch_io",
                  link_url: t.links.itch,
                  project_name: PROJECT_NAME,
                }}
              >
                itch.io
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
  locale: Locales
}

function ScreenshotGallery({ locale }: ScreenshotGalleryProps) {
  return (
    <div className={styles.gallery}>
      {screenshotGallery.map((shot) => (
        <figure key={shot.src} className={styles.screenshotCard}>
          <Image
            src={shot.src}
            alt={shot.alt[locale]}
            width={775}
            height={667}
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
