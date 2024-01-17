import type { AppProps } from "next/app";
import Head from "next/head";
import { GithubIcon, LinkedInIcon, NewTabIcon } from "../components/Icons";
import { H1, H2, H3 } from "../components/Typography";
import { email, phone } from "../info";
import { colors, space } from "../styles/theme";

function useTargetProps() {
  // TODO context api NextJS export
  return false ? { "data-size": "A4" } : {};
}

export default function CV(_: AppProps) {
  const sheetProps = useTargetProps();
  return (
    <div css={docCss} {...sheetProps}>
      <Head>
        <title>Marco Toniut | Curriculum Vitae</title>
        <meta
          name="description"
          content="This is my professional Curriculum Vitae in interactive web format - Marco Toniut"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1 id="me">Marco Stefano Toniut</H1>
        <article>
          <section css={sectionCss}>
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
          <section css={sectionCss}>
            <H3 id="prima">Principal Developer</H3>
            <div css={institutionCss}>Prima Assicurazioni UK</div>
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
            <ul css={highlightsCss}>
              <li>Principal developer of the public facing app</li>
              <li>Set up and maintain FE build/lint/test monorepo</li>
              <li>Develop Elixir Graphql APIs</li>
              <li>Develop Email and PDF React rendering tools</li>
              <li>Set up cypress integration test environment</li>
            </ul>
          </section>
          <section css={sectionCss}>
            <H3 id="moixa-ltd">Senior Software Developer</H3>
            <div css={institutionCss}>Moixa Ltd.</div>
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
            <ul css={highlightsCss}>
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
          <section css={sectionCss}>
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
          <section css={sectionCss}>
            <H3 id="propago">Lead Software Developer</H3>
            <div css={institutionCss}>Propago AR</div>
            <p>
              <em>Mar 2014 - Dec 2015</em>
            </p>
            <div>
              Realise the Full-Stack architecture for Propago’s financial
              system. Lead and train staff in then new technology React. Back
              End was developed using C#/SQL Server, deployed to Azure.
            </div>
            <ul css={highlightsCss}>
              <li>Leading staff of six developers</li>
              <li>Involvement in company decisions</li>
              <li>Hiring, training, supervising staff</li>
            </ul>
          </section>
          <section css={sectionCss}>
            <H3 id="eventbrite">Front-End Software Developer</H3>
            <div css={institutionCss}>Eventbrite</div>
            <div>
              <em>May 2013 - November 2013</em>
            </div>
            <p>
              Front-End developer, in charge of fixing and upgrading their Seat
              Designer app. A large HTML/canvas/svg app full of UI drag and drop
              interactivity.
            </p>
            <ul css={highlightsCss}>
              <li>Backbone JS app development</li>
              <li>Upgrading SVG editor rich internet app</li>
            </ul>
          </section>
          <section css={sectionCss}>
            <H3 id="freelancer-2010">Freelancer</H3>
            <div>
              <em>Jan 2010 - May 2013</em>
            </div>
            <p>
              Several jobs of interest. Dealing with multiple clients,
              requirements and businesses. Web apps, game development.
            </p>
          </section>
          <section css={sectionCss}>
            <H3 id="estudio-minero">Web Programmer</H3>
            <div css={institutionCss}>Estudio Minero</div>
            <div>
              <em>Jan 2008 - Jan 2010</em>
            </div>
            <p>
              Design and develop web pages and embedded applications with Flash
              and Javascript.
            </p>
            <ul css={highlightsCss}>
              <li>Static web pages</li>
              <li>Design and implementation</li>
              <li>Flash web applications (as3)</li>
              <li>PHP/Wordpress BEs</li>
            </ul>
          </section>

          <H2 id="education">Education</H2>
          <hr />

          <section css={sectionCss}>
            <H3 id="udemy-robotics">
              {"Electricity & electronics - Robotics, learn by building"}
            </H3>
            <div css={institutionCss}>Udemy Academy</div>
            <div>
              <em>2020 - 2021</em>
            </div>
            <ul
              css={{ listStyle: "inside", padding: 0, listStyleType: "circle" }}
            >
              <li>
                <a
                  css={linkCss}
                  href="https://www.udemy.com/course/analog-electronics-robotics-learn-by-building"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span css={{ marginRight: space.xs }}>
                    Module I - Analog Electronics
                  </span>
                  <NewTabIcon />
                </a>
              </li>
              <li>
                <a
                  css={linkCss}
                  href="https://www.udemy.com/course/digital-electronics-robotics-learn-by-building-module-ii"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span css={{ marginRight: space.xs }}>
                    Module II - Digital Electronics
                  </span>
                  <NewTabIcon />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <H3 id="caece">Systems Engineer</H3>
            <div css={institutionCss}>University CAECE Mar del Plata</div>
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
        css={{
          backgroundColor: colors.aside,
          paddingLeft: space.xl,
          paddingRight: space.xl,
          minWidth: "350px",
        }}
      >
        <section css={sectionCss}>
          <H2 id="contact-details">Contact Details</H2>
          <hr />
          <section
            css={{
              "> *": {
                marginTop: space.small,
              },
            }}
          >
            <div>
              <a
                css={{ color: colors.action }}
                href={`mailto:${email}?subject=Hello Marco!`}
              >
                {email}
              </a>
            </div>
            <div>
              <a css={{ color: colors.action }} href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
            <div>London, UK</div>
            <div css={{ display: "flex", gap: space.small }}>
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
        <section css={sectionCss}>
          <H2 id="skills">Professional Skills</H2>
          <hr />
          <ul css={skillsListCss}>
            <li>Lead software development</li>
            <li>Team management and mentoring</li>
            <li>Software architecture</li>
            <li>Code assessment</li>
            <li>Recruiting</li>
            <li>Negotiation</li>
          </ul>
        </section>
        <section css={sectionCss}>
          <H2 id="knowledge">Software Knowledge</H2>
          <hr />
          <ul css={skillsListCss}>
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
        <section css={sectionCss}>
          <H2 id="personal">Personal Skills</H2>
          <hr />
          <ul css={skillsListCss}>
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

const docCss = {
  fontSize: "16px",
  color: colors.text,
  padding: `${space.xl} ${space.xxl}`,
  margin: "0 auto",
  maxWidth: "1200px",
  display: "flex",
  article: {
    marginRight: space.xxxl,
  },
  hr: {
    border: 0,
    borderColor: "rgba(0, 0, 0, 0)",
    height: "1px",
    width: "100%",
    marginBottom: space.xs,
    marginTop: space.xs,
    backgroundColor: colors.text,
  },
  "@media screen and (max-width: 768px)": {
    fontSize: "14px",
    display: "block",
    aside: {
      marginTop: space.xxxl,
    },
  },
  '&[data-size="A4"]': {
    fontSize: "9pt",
    padding: space.none,
    maxWidth: "210mm",
    aside: {
      minWidth: "60mm",
    },
  },
} as const;

const highlightsCss = { listStyle: "inside", padding: 0 };

const linkCss = {
  color: colors.action,
  display: "inline-flex",
  alignItems: "center",
} as const;

const sectionCss = { breakInside: "avoid", pageBreakInside: "avoid" } as const;

const skillsListCss = {
  listStyle: "none",
  padding: 0,
  "> li": {
    "&:not(:first-child)": {
      marginTop: space.small,
    },
  },
} as const;

const institutionCss = {
  fontSize: space.large,
  marginBottom: space.small,
  marginTop: space.small,
} as const;
