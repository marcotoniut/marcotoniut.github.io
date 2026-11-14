import type { ReactNode } from "react"
import { TrackedAnchor } from "@/components/TrackedLink"
import type { Locales } from "@/i18n/i18n-types"
import * as styles from "./carcinisation.css"
import { getCarcinisationCopy } from "./i18n"

const PROJECT_NAME = "carcinisation" as const
const JAM_URL = "https://itch.io/jam/gbjam-11"
const TRACKING_LOCATION = {
  page: "carcinisation_project_page",
  meta: "carcinisation_project_page_meta",
} as const

// Native-resolution frames from the itch.io web build, with the bottom 7
// rows of the 144-row screen cropped out.
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
  coverAlt: string
  locale: Locales
}

export function CarcinisationContent({
  coverAlt,
  locale,
}: ProjectContentProps) {
  const t = getCarcinisationCopy(locale)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`${styles.screen} ${styles.heroScreen}`}>
          <img
            alt={coverAlt}
            className={`${styles.screenImage} ${styles.heroScreenImage}`}
            height={144}
            src="/projects/carcinisation/cover.png"
            width={160}
          />
        </div>

        <div className={styles.heroInfo}>
          <h1 className={styles.title}>Carcinisation</h1>
          <p className={styles.description}>{t.short}</p>

          <TrackedAnchor
            className={styles.play}
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
            {t.labels.playableCta}
          </TrackedAnchor>

          <dl className={styles.meta}>
            <dt className={styles.metaLabel}>{t.labels.jamMeta}</dt>
            <dd className={styles.metaValue}>
              <TrackedAnchor
                className={styles.link}
                href={JAM_URL}
                target="_blank"
                rel="noreferrer"
                locale={locale}
                trackingType="project_link"
                trackingParams={{
                  link_location: TRACKING_LOCATION.meta,
                  link_type: "jam",
                  link_url: JAM_URL,
                  project_name: PROJECT_NAME,
                }}
              >
                GBJam 11
              </TrackedAnchor>
            </dd>
            <dt className={styles.metaLabel}>{t.labels.engineMeta}</dt>
            <dd className={styles.metaValue}>{t.meta.engine}</dd>
            <dt className={styles.metaLabel}>{t.labels.platformMeta}</dt>
            <dd className={styles.metaValue}>{t.meta.platform}</dd>
            <dt className={styles.metaLabel}>{t.labels.statusMeta}</dt>
            <dd className={styles.metaValue}>{t.meta.status}</dd>
          </dl>
        </div>
      </section>

      <div aria-hidden="true" className={styles.dither} />

      <div className={styles.windows}>
        <Window className={styles.dialogue} heading={t.labels.story}>
          {t.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Window>

        <Window heading={t.labels.controls}>
          <table className={styles.controls}>
            <thead>
              <tr>
                <th className={styles.controlsHead} scope="col">
                  {t.labels.controlsHeadingLeft}
                </th>
                <th className={styles.controlsHead} scope="col">
                  {t.labels.controlsHeadingRight}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.controls.map(([button, key]) => (
                <tr key={button}>
                  <td className={styles.controlsCell}>
                    <span className={styles.keycap}>{button}</span>
                  </td>
                  <td className={styles.controlsCell}>{key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Window>

        <Window className={styles.wide} heading={t.labels.screenshots}>
          <ul className={styles.gallery}>
            {screenshotGallery.map((shot) => (
              <li className={styles.shotItem} key={shot.src}>
                <figure className={styles.shot}>
                  <div className={`${styles.screen} ${styles.shotScreen}`}>
                    <img
                      alt={shot.alt[locale]}
                      className={`${styles.screenImage} ${styles.shotImage}`}
                      decoding="async"
                      height={137}
                      loading="lazy"
                      src={shot.src}
                      width={160}
                    />
                  </div>
                  <figcaption className={styles.caption}>
                    {shot.caption[locale]}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Window>

        <Window className={styles.wide} heading={t.labels.jamTeam}>
          <ul className={styles.credits}>
            {t.jamTeam.map((member) => (
              <li className={styles.credit} key={member.name}>
                <span className={styles.creditName}>
                  {"url" in member && member.url ? (
                    <a
                      className={styles.link}
                      href={member.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </span>
                <span className={styles.creditRole}>{member.role}</span>
              </li>
            ))}
          </ul>
          <p className={styles.note}>{t.continuationNote}</p>
        </Window>
      </div>
    </div>
  )
}

function Window({
  children,
  className,
  heading,
}: {
  children: ReactNode
  className?: string
  heading: string
}) {
  return (
    <section
      className={className ? `${styles.window} ${className}` : styles.window}
    >
      <h2 className={styles.windowTitle}>{heading}</h2>
      {children}
    </section>
  )
}
