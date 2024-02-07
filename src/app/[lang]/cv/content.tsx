"use client";

import { format } from "date-fns";
import {
  GithubIcon,
  ItchIOIcon,
  LinkedInIcon,
  NewTabIcon,
} from "../../../components/Icons";
import { H1, H2, H3 } from "../../../components/Typography";
import { isPDFPrinting } from "../../../env";
import { email, phone } from "../../../info";
import { space } from "../../../styles/theme";
import {
  asideCn,
  docCn,
  footerCn,
  institutionCn,
  learningHighlightsCn,
  link2Cn,
  linkCn,
  paragraphCn,
  pdfIsPrintingCn,
  sectionCn,
  skillsListCn,
  highlightsCn as workHighlightsCn,
} from "./cv.css";

import { I18nContext } from "@/i18n/i18n-react";
import * as RA from "fp-ts/ReadonlyArray";
import * as RR from "fp-ts/ReadonlyRecord";
import { pipe } from "fp-ts/function";
import Link from "next/link";
import { useContext } from "react";
import { LocalizedString } from "typesafe-i18n";
import { Meta } from "./data";

const DATE_FORMAT = "MMM yyyy";

const pdfIsPrinting = isPDFPrinting();

function useTargetProps() {
  return pdfIsPrinting ? { "data-size": "A4" } : {};
}

export function CVContent() {
  const sheetProps = useTargetProps();
  const { LL } = useContext(I18nContext);

  return (
    <div {...sheetProps} className={docCn}>
      <main>
        <H1 id="me">
          <span>Marco Stefano Toniut</span>
          {!pdfIsPrinting ? (
            <span className={pdfIsPrintingCn}>
              <Link className={linkCn} passHref href="/">
                {LL.CVPage.goBack()}
              </Link>
            </span>
          ) : (
            <></>
          )}
        </H1>
        <article>
          <section className={sectionCn}>
            <H3 id="systems-engineer">{LL.CVPage.profession()}</H3>
            {pipe(
              LL.CVPage.summary,
              (xs) => Object.values(xs),
              RA.mapWithIndex((i, t) => <p key={i}>{t()}</p>),
            )}
          </section>
          <H2 id="work-experience">{LL.CVPage.workExperience.title()}</H2>
          <hr />
          {pipe(
            LL.CVPage.workExperience.history,
            RR.toReadonlyArray,
            RA.mapWithIndex((index, [k, x]) => {
              const meta = Meta[k];
              return (
                <section className={sectionCn} key={index}>
                  <H3 id={meta.id}>{x.role()}</H3>
                  {"institution" in meta ? (
                    <div className={institutionCn}>{meta.institution}</div>
                  ) : (
                    <></>
                  )}
                  <div>
                    <em>{`${format(meta.dates.start, DATE_FORMAT)} - ${"end" in meta.dates ? format(meta.dates.end, DATE_FORMAT) : "Present"}`}</em>
                  </div>
                  {pipe(
                    x.description,
                    (xs) => Object.values(xs),
                    RA.mapWithIndex((i, t) => <p key={i}>{t()}</p>),
                  )}
                  {"highlights" in x ? (
                    <ul className={workHighlightsCn}>
                      {pipe(
                        x.highlights,
                        (xs) =>
                          Object.values(
                            xs as unknown as RR.ReadonlyRecord<
                              string,
                              () => LocalizedString
                            >,
                          ),
                        RA.mapWithIndex((i, t) => <li key={i}>{t()}</li>),
                      )}
                    </ul>
                  ) : (
                    <></>
                  )}
                </section>
              );
            }),
          )}

          <H2 id="education">{LL.CVPage.education.title()}</H2>
          <hr />

          <section>
            <H3 id="caece">
              {LL.CVPage.education.education.undergrad.degree()}
            </H3>
            <div className={institutionCn}>
              {LL.CVPage.education.education.undergrad.institution()}
            </div>
            <p>{LL.CVPage.education.education.undergrad.description()}</p>
          </section>

          <section className={sectionCn}>
            <H3 id="udemy-robotics">
              {LL.CVPage.education.education.courses.robotics.course()}
            </H3>
            <div className={institutionCn}>
              {LL.CVPage.education.education.courses.robotics.institution()}
            </div>
            <ul className={learningHighlightsCn}>
              <li>
                <a
                  className={linkCn}
                  href="https://www.udemy.com/course/analog-electronics-robotics-learn-by-building"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>
                    {LL.CVPage.education.education.courses.robotics.module1()}
                  </span>
                  <NewTabIcon />
                </a>
              </li>
              <li>
                <a
                  className={linkCn}
                  href="https://www.udemy.com/course/digital-electronics-robotics-learn-by-building-module-ii"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>
                    {LL.CVPage.education.education.courses.robotics.module2()}
                  </span>
                  <NewTabIcon />
                </a>
              </li>
            </ul>
          </section>

          <H2 id="personal-projects">{LL.CVPage.personalProjects.title()}</H2>
          <hr />
          <section className={sectionCn}>
            <H3 id="carcinisation">
              {LL.CVPage.personalProjects.projects.carcinisation.role()}
            </H3>
            <div className={institutionCn}>
              <span>
                {LL.CVPage.personalProjects.projects.carcinisation.name()}
              </span>
              <a
                href="https://github.com/marcotoniut/carcinisation"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
              <a
                href="https://marcotoniut.itch.io/carcinisation"
                rel="noreferrer"
                target="_blank"
              >
                <ItchIOIcon />
              </a>
            </div>
            <div>
              <em>{format(new Date(2023, 9), DATE_FORMAT)}</em>
            </div>
            <p>
              {LL.CVPage.personalProjects.projects.carcinisation.description.p1()}
              <a href="https://bevyengine.org/">Bevy</a>
              {LL.CVPage.personalProjects.projects.carcinisation.description.p2()}
            </p>
            <ul className={workHighlightsCn}>
              {pipe(
                LL.CVPage.personalProjects.projects.carcinisation.highlights,
                (xs) => Object.values(xs),
                RA.mapWithIndex((i, t) => <li key={i}>{t()}</li>),
              )}
            </ul>
          </section>
        </article>
      </main>
      <aside className={asideCn}>
        <section>
          <section className={sectionCn}>
            <H2 id="contact-details">{LL.CVPage.contactDetails.title()}</H2>
            <hr />
            <section className={paragraphCn}>
              <div>
                <a
                  className={link2Cn}
                  href={`mailto:${email}?subject=${LL.CVPage.contactDetails.subject()}`}
                >
                  {email}
                </a>
              </div>
              <div>
                <a className={link2Cn} href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
              <div>London, UK</div>
              <div style={{ display: "flex", gap: space.small }}>
                <a
                  href="https://github.com/marcotoniut"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/marco-toniut-4b6a143a/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </section>
          </section>
          <section className={sectionCn}>
            <H2 id="skills">{LL.CVPage.skills.professional.title()}</H2>
            <hr />
            <ul className={skillsListCn}>
              {pipe(
                LL.CVPage.skills.professional.list,
                (xs) => Object.values(xs),
                RA.mapWithIndex((i, t) => <li key={i}>{t()} </li>),
              )}
            </ul>
          </section>
          <section className={sectionCn}>
            <H2 id="knowledge">{LL.CVPage.skills.software.title()}</H2>
            <hr />
            <ul className={skillsListCn}>
              {pipe(
                LL.CVPage.skills.software.list,
                (xs) => Object.values(xs),
                RA.mapWithIndex((i, t) => <li key={i}>{t()} </li>),
              )}
            </ul>
          </section>
          <section className={sectionCn}>
            <H2 id="personal">{LL.CVPage.skills.personal.title()}</H2>
            <hr />
            <ul className={skillsListCn}>
              {pipe(
                LL.CVPage.skills.personal.list,
                (xs) => Object.values(xs),
                RA.mapWithIndex((i, t) => <li key={i}>{t()} </li>),
              )}
            </ul>
          </section>
        </section>
        {pdfIsPrinting ? (
          <footer className={footerCn}>
            {/* TODO use route with base url instead */}
            <a className={linkCn} href="https://marcotoniut.github.io/cv">
              {LL.CVPage.footer.p1()}
            </a>
            {LL.CVPage.footer.p2()}
            <a className={linkCn} href="https://nextjs.org/">
              NextJS.
            </a>
          </footer>
        ) : (
          <></>
        )}
      </aside>
    </div>
  );
}
