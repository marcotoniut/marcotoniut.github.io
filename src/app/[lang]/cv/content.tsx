"use client"
"use memo"

import { format } from "date-fns"
import { useContext, useEffect, useId } from "react"
import { Header } from "@/components/Header"
import { GithubIcon, ItchIOIcon, LinkedInIcon } from "@/components/Icons"
import { TrackedAnchor } from "@/components/TrackedLink"
import { H1, H2, H3 } from "@/components/Typography"
import { I18nContext } from "@/i18n/i18n-react"
import { email, phone } from "@/info"
import { trackCVView } from "@/utils/analytics"
import {
  asideCn,
  docCn,
  footerCn,
  headerWrapperCn,
  institutionCn,
  learningHighlightsCn,
  link2Cn,
  linkCn,
  nameCn,
  paragraphCn,
  pictureCn,
  professionCn,
  profileCn,
  sectionCn,
  skillsListCn,
  socialLinksCn,
  highlightsCn as workHighlightsCn,
} from "./cv.css"
import { Meta } from "./data"
import "./pdf.cv.css"

const DATE_FORMAT = "MMM yyyy"

interface CVContentProps {
  isPdfPrinting: boolean
}

function useTargetProps(isPdfPrinting: boolean) {
  return isPdfPrinting ? { "data-size": "A4" } : {}
}

export function CVContent({ isPdfPrinting }: CVContentProps) {
  const sheetProps = useTargetProps(isPdfPrinting)
  const { LL, locale } = useContext(I18nContext)
  const uid = useId()

  // Track CV page view (only once on mount)
  useEffect(() => {
    if (!isPdfPrinting) {
      trackCVView(locale)
    }
  }, [locale, isPdfPrinting])

  return (
    <>
      {!isPdfPrinting ? (
        <div className={headerWrapperCn}>
          <Header
            currentLocale={locale}
            backLink={{
              href: `/${locale}/`,
              label: LL.Common.goBack(),
            }}
          />
        </div>
      ) : null}
      <div {...sheetProps} className={docCn}>
        <aside className={asideCn}>
          <section>
            <section className={profileCn}>
              <H1 className={nameCn} id={`me-${uid}`}>
                Marco Stefano Toniut
              </H1>
              {isPdfPrinting ? (
                <div className={pictureCn}>
                  {/* biome-ignore lint/performance/noImgElement: Native img required for PDF generation with Puppeteer */}
                  <img
                    src="/cv/profile.jpeg"
                    height={180}
                    alt={LL.CVPage.profile.picture()}
                  />
                </div>
              ) : null}
              <H3 className={professionCn} id={`systems-engineer-${uid}`}>
                {LL.CVPage.profession()}
              </H3>
            </section>
            <section className={sectionCn}>
              <H2 id={`summary-${uid}`}>{LL.CVPage.summary.title()}</H2>
              {Object.entries(LL.CVPage.summary.summary).map(([i, t]) => (
                <p key={i}>{t()}</p>
              ))}
            </section>
            <section className={sectionCn}>
              <H2 id={`contact-details-${uid}`}>
                {LL.CVPage.contactDetails.title()}
              </H2>
              <section className={paragraphCn}>
                <div>
                  <a
                    className={link2Cn}
                    href={`mailto:${email}?subject=${LL.CVPage.contactDetails.subject()}`}
                  >
                    {email}
                  </a>
                </div>
                {isPdfPrinting ? (
                  <div>
                    <a className={link2Cn} href={`tel:${phone}`}>
                      {phone}
                    </a>
                  </div>
                ) : null}
                <div>{LL.CVPage.contactDetails.location()}</div>
                <div className={socialLinksCn}>
                  <TrackedAnchor
                    href="https://github.com/marcotoniut"
                    rel="noreferrer"
                    about="Github"
                    locale={locale}
                    trackingType="external_link"
                    trackingParams={{
                      link_url: "https://github.com/marcotoniut",
                      link_location: "profile",
                      link_type: "github",
                      link_text: "GitHub Profile",
                    }}
                  >
                    <GithubIcon />
                  </TrackedAnchor>
                  <TrackedAnchor
                    href="https://www.linkedin.com/in/marco-toniut-4b6a143a/"
                    rel="noreferrer"
                    about="Linkedin"
                    locale={locale}
                    trackingType="external_link"
                    trackingParams={{
                      link_url:
                        "https://www.linkedin.com/in/marco-toniut-4b6a143a/",
                      link_location: "profile",
                      link_type: "linkedin",
                      link_text: "LinkedIn Profile",
                    }}
                  >
                    <LinkedInIcon />
                  </TrackedAnchor>
                </div>
              </section>
            </section>
            <section className={sectionCn}>
              <H2 id={`skills-${uid}`}>
                {LL.CVPage.skills.professional.title()}
              </H2>
              <ul className={skillsListCn}>
                {Object.entries(LL.CVPage.skills.professional.list).map(
                  ([i, t]) => (
                    <li key={i}>{t()} </li>
                  ),
                )}
              </ul>
            </section>
            <section className={sectionCn}>
              <H2 id={`knowledge-${uid}`}>
                {LL.CVPage.skills.software.title()}
              </H2>
              <ul className={skillsListCn}>
                {[
                  "Typescript / JS / HTML / CSS",
                  "React / React Native / NextJS",
                  "Angular / Jest / Cypress",
                  "AWS / NodeJS",
                  "Rust / Haskell / Elixir",
                  "C# / Java / Python",
                  "SQL (Postgres / SQL-Server)",
                  LL.CVPage.skills.software.list.gameDev(),
                ].map((x) => (
                  <li key={x}>{x} </li>
                ))}
              </ul>
            </section>
            <section className={sectionCn}>
              <H2 id={`personal-${uid}`}>
                {LL.CVPage.skills.personal.title()}
              </H2>
              <ul className={skillsListCn}>
                {Object.entries(LL.CVPage.skills.personal.list).map(
                  ([i, t]) => (
                    <li key={i}>{t()} </li>
                  ),
                )}
              </ul>
            </section>
          </section>
        </aside>
        <main>
          <article>
            <H2 id={`work-experience-${uid}`}>
              {LL.CVPage.experience.title()}
            </H2>
            {Object.entries(LL.CVPage.experience.history).map(
              ([index, entry], i) => {
                const meta = Meta[i]
                const highlights =
                  "highlights" in entry
                    ? Object.entries(entry.highlights)
                    : undefined
                const descriptions = Object.entries(entry.description)

                if (!meta) {
                  return null
                }

                const institution =
                  "institution" in meta ? meta.institution : undefined

                return (
                  <section className={sectionCn} key={index} id={meta.id}>
                    <H3 id={meta.id ?? `experience-${index}`}>
                      {entry.role()}
                    </H3>
                    {institution ? (
                      <div className={institutionCn}>{institution}</div>
                    ) : null}
                    <div>
                      <em>{`${format(meta.dates.start, DATE_FORMAT)} - ${"end" in meta.dates ? format(meta.dates.end, DATE_FORMAT) : "Present"}`}</em>
                    </div>
                    {descriptions.map(([i, t]) => (
                      <p key={i}>{t()}</p>
                    ))}
                    {highlights ? (
                      <ul className={workHighlightsCn}>
                        {highlights.map(([i, t]) => (
                          <li key={i}>{t()}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                )
              },
            )}

            <H2 id={`education-${uid}`}>{LL.CVPage.education.title()}</H2>

            <section>
              <H3 id={`caece-${uid}`}>
                {LL.CVPage.education.education.undergrad.degree()}
              </H3>
              <div className={institutionCn}>
                {LL.CVPage.education.education.undergrad.institution()}
              </div>
              <p>{LL.CVPage.education.education.undergrad.description()}</p>
            </section>

            <section className={sectionCn}>
              <H3 id={`udemy-robotics-${uid}`}>
                {LL.CVPage.education.education.courses.robotics.course()}
              </H3>
              <div className={institutionCn}>
                {LL.CVPage.education.education.courses.robotics.institution()}
              </div>
              <ul className={learningHighlightsCn}>
                <li>
                  <TrackedAnchor
                    className={linkCn}
                    href="https://www.udemy.com/course/analog-electronics-robotics-learn-by-building"
                    rel="noreferrer"
                    locale={locale}
                    trackingType="external_link"
                    trackingParams={{
                      link_url:
                        "https://www.udemy.com/course/analog-electronics-robotics-learn-by-building",
                      link_location: "cv_page",
                      link_type: "other",
                      link_text: "Udemy Robotics Module 1",
                    }}
                  >
                    {LL.CVPage.education.education.courses.robotics.module1()}
                  </TrackedAnchor>
                </li>
                <li>
                  <TrackedAnchor
                    className={linkCn}
                    href="https://www.udemy.com/course/digital-electronics-robotics-learn-by-building-module-ii"
                    rel="noreferrer"
                    locale={locale}
                    trackingType="external_link"
                    trackingParams={{
                      link_url:
                        "https://www.udemy.com/course/digital-electronics-robotics-learn-by-building-module-ii",
                      link_location: "cv_page",
                      link_type: "other",
                      link_text: "Udemy Robotics Module 2",
                    }}
                  >
                    {LL.CVPage.education.education.courses.robotics.module2()}
                  </TrackedAnchor>
                </li>
              </ul>
            </section>

            <H2 id={`personal-projects-${uid}`}>
              {LL.CVPage.personalProjects.title()}
            </H2>
            <section className={sectionCn}>
              <H3 id={`carcinisation-${uid}`}>
                {LL.CVPage.personalProjects.projects.carcinisation.role()}
              </H3>
              <div className={institutionCn}>
                <span>
                  {LL.CVPage.personalProjects.projects.carcinisation.name()}
                </span>
                <TrackedAnchor
                  href="https://github.com/marcotoniut/carcinisation"
                  rel="noreferrer"
                  about={LL.CVPage.personalProjects.projects.carcinisation.about.github()}
                  locale={locale}
                  trackingType="project_link"
                  trackingParams={{
                    link_url: "https://github.com/marcotoniut/carcinisation",
                    link_location: "cv_page",
                    project_name: "carcinisation",
                    link_type: "github",
                  }}
                >
                  <GithubIcon />
                </TrackedAnchor>
                <TrackedAnchor
                  href="https://marcotoniut.itch.io/carcinisation"
                  rel="noreferrer"
                  about={LL.CVPage.personalProjects.projects.carcinisation.about.itchio()}
                  locale={locale}
                  trackingType="project_link"
                  trackingParams={{
                    link_url: "https://marcotoniut.itch.io/carcinisation",
                    link_location: "cv_page",
                    project_name: "carcinisation",
                    link_type: "itch_io",
                  }}
                >
                  <ItchIOIcon />
                </TrackedAnchor>
              </div>
              <div>
                <em>{format(new Date(2023, 9), DATE_FORMAT)}</em>
              </div>
              <p>
                {LL.CVPage.personalProjects.projects.carcinisation.description.p1()}
                <TrackedAnchor
                  href="https://bevyengine.org/"
                  locale={locale}
                  trackingType="external_link"
                  trackingParams={{
                    link_url: "https://bevyengine.org/",
                    link_location: "cv_page",
                    link_type: "other",
                    link_text: "Bevy Engine",
                  }}
                >
                  Bevy
                </TrackedAnchor>
                {LL.CVPage.personalProjects.projects.carcinisation.description.p2()}
              </p>
              <ul className={workHighlightsCn}>
                {Object.entries(
                  LL.CVPage.personalProjects.projects.carcinisation.highlights,
                ).map(([i, t]) => (
                  <li key={i}>{t()}</li>
                ))}
              </ul>
            </section>
          </article>
        </main>
      </div>
      {isPdfPrinting ? (
        <footer className={footerCn}>
          <span>
            {/* TODO use route with base url instead */}
            <a className={linkCn} href="https://marcotoniut.github.io/cv">
              {LL.CVPage.footer.p1()}
            </a>
            {LL.CVPage.footer.p2()}
          </span>
        </footer>
      ) : null}
    </>
  )
}
