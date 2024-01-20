import { colors, space } from "@/styles/theme";
import { GithubIcon, LinkedInIcon, NewTabIcon } from "../../components/Icons";
import { H1, H2, H3 } from "../../components/Typography";
import { email, phone } from "../../info";
import {
  docCn,
  highlightsCss as highlightsCn,
  institutionCn,
  linkCss as linkCn,
  paragraphCn,
  sectionCn,
  skillsListCn,
} from "./cv.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marco Toniut | Curriculum Vitae",
  description:
    "This is my professional Curriculum Vitae in interactive web format - Marco Toniut",
};

function useTargetProps() {
  // TODO context api NextJS export
  return false ? { "data-size": "A4" } : {};
}

export default function CV() {
  const sheetProps = useTargetProps();
  return (
    <div className={docCn} {...sheetProps}>
      <main>
        <H1 id="me">Marco Stefano Toniut</H1>
        <article>
          <section className={sectionCn}>
            <H3 id="systems-engineer">Systems Engineer</H3>
            <p>
              As an independent developer for a good part of my career, I’ve had
              to undertake a varied amount of tasks, with multiple companies,
              clients and environments, vesting me with an eclectic array of
              technical knowledge as well as a pushing demand for
              self-actualization.
            </p>
            <p>
              I’ve been positions of leadership, mentoring and negotiation,
              having to coordinate dev teams, pushing for the adoption of modern
              techniques, tools and good practices.
            </p>
            <p>
              Very detail oriented, experimental, code attentive, but aware that
              deadlines and milestones are paramount. I do my best at keeping
              within schedule by planning my battles.
            </p>
          </section>
          <H2 id="work-experience">Work Experience</H2>
          <hr />
          <section className={sectionCn}>
            <H3 id="prima">Principal Developer</H3>
            <div className={institutionCn}>Prima Assicurazioni UK</div>
            <div>
              <em>Jan 2021 - Present</em>
            </div>
            <p>
              {`Kickstart the new tech stack for Prima's UK branch, a tech-focused
              motor insurance company that's been a major success in Italy.
              Language stack is mainly comprised of Typescript, Elixir, Rust and
              Elm.`}
            </p>
            <p>
              Full-Stack development • Building of the UK tech stack • Mentoring
              developers on TS, React and FRP
            </p>
            <ul className={highlightsCn}>
              <li>Principal developer of the public facing app</li>
              <li>Set up and maintain FE build/lint/test monorepo</li>
              <li>Develop Elixir Graphql APIs</li>
              <li>Develop Email and PDF React rendering tools</li>
              <li>Set up cypress integration test environment</li>
            </ul>
          </section>
          <section className={sectionCn}>
            <H3 id="moixa-ltd">Senior Software Developer</H3>
            <div className={institutionCn}>Moixa Ltd.</div>
            <div>
              <em>Jun 2019 - Dec 2020</em>
            </div>
            <p>
              Developing and upgrading pieces of the Moixa Gridshare stack, a
              system that smartly controls charge/discharge rates of
              batteries/EVs across several countries, mainly the UK and Japan.
            </p>
            <p>
              Full-Stack development • Maintaining the monorepo stack •
              Mentoring developers on TS and React • Developing new systems
            </p>
            <ul className={highlightsCn}>
              <li>{`Sole developer of Moixa's Hub Installer app`}</li>
              <li>
                {`Re-implemented the Japanese weather alert system (AWS ES, Dynamo,
              SQS)`}
              </li>
              <li>
                {
                  "Principal developer of Moixa's Mobile Customer app v2 (React Native)"
                }
              </li>
              <li>
                {`Implemented Admin's Commissioner's module V3, as well as other of its functionalities`}
              </li>
              <li>{`Implemented Moixa's Styleguide`}</li>
              <li>
                {
                  "Helped with refactoring the FE's monorepo to become functional via React Hooks"
                }
              </li>
            </ul>
          </section>
          <section className={sectionCn}>
            <H3 id="freelancer-2016">Freelancer</H3>
            <div>
              <em>Jan 2016 - Jun 2019</em>
            </div>
            <p>
              Several jobs of interest. Dealing with different clients,
              requirements and businesses. React, Reflex-FRP (Haskell) web
              applications. Haskell FRP.
            </p>
          </section>
          <section className={sectionCn}>
            <H3 id="propago">Lead Software Developer</H3>
            <div className={institutionCn}>Propago AR</div>
            <p>
              <em>Mar 2014 - Dec 2015</em>
            </p>
            <div>
              Realise the Full-Stack architecture for Propago’s financial
              system. Lead and train staff in then new technology React. Back
              End was developed using C#/SQL Server, deployed to Azure.
            </div>
            <ul className={highlightsCn}>
              <li>Leading staff of six developers</li>
              <li>Involvement in company decisions</li>
              <li>Hiring, training, supervising staff</li>
            </ul>
          </section>
          <section className={sectionCn}>
            <H3 id="eventbrite">Front-End Software Developer</H3>
            <div className={institutionCn}>Eventbrite</div>
            <div>
              <em>May 2013 - November 2013</em>
            </div>
            <p>
              Front-End developer, in charge of fixing and upgrading their Seat
              Designer app. A large HTML/canvas/svg app full of UI drag and drop
              interactivity.
            </p>
            <ul className={highlightsCn}>
              <li>Backbone JS app development</li>
              <li>Upgrading SVG editor rich internet app</li>
            </ul>
          </section>
          <section className={sectionCn}>
            <H3 id="freelancer-2010">Freelancer</H3>
            <div>
              <em>Jan 2010 - May 2013</em>
            </div>
            <p>
              Several jobs of interest. Dealing with multiple clients,
              requirements and businesses. Web apps, game development.
            </p>
          </section>
          <section className={sectionCn}>
            <H3 id="estudio-minero">Web Programmer</H3>
            <div className={institutionCn}>Estudio Minero</div>
            <div>
              <em>Jan 2008 - Jan 2010</em>
            </div>
            <p>
              Design and develop web pages and embedded applications with Flash
              and Javascript.
            </p>
            <ul className={highlightsCn}>
              <li>Static web pages</li>
              <li>Design and implementation</li>
              <li>Flash web applications (as3)</li>
              <li>PHP/Wordpress BEs</li>
            </ul>
          </section>

          <H2 id="education">Education</H2>
          <hr />

          <section className={sectionCn}>
            <H3 id="udemy-robotics">
              {"Electricity & electronics - Robotics, learn by building"}
            </H3>
            <div className={institutionCn}>Udemy Academy</div>
            <div>
              <em>2020 - 2021</em>
            </div>
            <ul
              style={{
                listStyle: "inside",
                padding: 0,
                listStyleType: "circle",
              }}
            >
              <li>
                <a
                  className={linkCn}
                  href="https://www.udemy.com/course/analog-electronics-robotics-learn-by-building"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span style={{ marginRight: space.xs }}>
                    Module I - Analog Electronics
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
                  <span style={{ marginRight: space.xs }}>
                    Module II - Digital Electronics
                  </span>
                  <NewTabIcon />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <H3 id="caece">Systems Engineer</H3>
            <div className={institutionCn}>University CAECE Mar del Plata</div>
            <div>
              <em>2006 - 2012</em>
            </div>
            <p>
              Computer science. Algorithms, data structures and software
              patterns. Project management. Quality assurance. Electronic
              circuits.
            </p>
          </section>
        </article>
      </main>
      <aside
        style={{
          backgroundColor: colors.aside,
          paddingLeft: space.xl,
          paddingRight: space.xl,
          minWidth: "350px",
        }}
      >
        <section className={sectionCn}>
          <H2 id="contact-details">Contact Details</H2>
          <hr />
          <section className={paragraphCn}>
            <div>
              <a
                style={{ color: colors.action }}
                href={`mailto:${email}?subject=Hello Marco!`}
              >
                {email}
              </a>
            </div>
            <div>
              <a style={{ color: colors.action }} href={`tel:${phone}`}>
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
          <H2 id="skills">Professional Skills</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Lead software development</li>
            <li>Team management and mentoring</li>
            <li>Software architecture</li>
            <li>Code assessment</li>
            <li>Recruiting</li>
            <li>Negotiation</li>
          </ul>
        </section>
        <section className={sectionCn}>
          <H2 id="knowledge">Software Knowledge</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Typescript / JS / HTML / CSS</li>
            <li>{"React / Native / NextJS"}</li>
            <li>NodeJS</li>
            <li>AWS DynamoDB / Elastic Search / IoT</li>
            <li>Haskell / Elixir</li>
            <li>{"(Functional) Reactive Programming"}</li>
            <li>DotNet C# / SQL-Server / Azure</li>
            <li>PostgreSQL</li>
            <li>Unity3D</li>
            <li>Electronics</li>
          </ul>
        </section>
        <section className={sectionCn}>
          <H2 id="personal">Personal Skills</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Spanish language</li>
            <li>Digital Painting</li>
            <li>Karate Shotokan</li>
            <li>Tennis</li>
            <li>Bouldering</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
