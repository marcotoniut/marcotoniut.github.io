import type { BaseTranslation } from "../i18n-types";

const enUs: BaseTranslation = {
  CVPage: {
    meta: {
      description:
        "This is my professional Curriculum Vitae in interactive web format - Marco Toniut",
      title: "Marco Toniut | Curriculum Vitae",
    },
    profession: "Systems Engineer",
    goBack: "Go back to home",
    summary: [
      `As an independent developer for a significant part of my career,
	  I've tackled diverse tasks across various companies and
	  clients, cultivating an eclectic range of technical knowledge and
	  a commitment to self-actualisation.
	  `,
      `In leadership, mentoring, and negotiation roles, I've
	  successfully coordinated development teams, championing the
	  adoption of modern techniques and tools. Detail-oriented and
	  experimental in my coding approach, I prioritise deadlines and
	  milestones, planning tasks meticulously for on-time project
	  completion.
	  `,
    ],
    workExperience: {
      title: "Work Experience",
      history: [
        {
          role: "Lead Front-End Developer",
          description: [
            `Lead Front-End Developer at Fintern, driving the development of "Render," a Python + Angular application serving as underwriting and decisioning Software as a Service (SaaS) for banks and lenders. Focus on key architectural decisions, team guidance, and mentoring.`,
            `Integrated "Abound" (customer-facing) and "Render" (B2B) for a cohesive and user-friendly experience.`,
          ],
          highlights: [
            `Led Front-End development for Render, setting up a unified architecture.`,
            `Drove key decisions for enhanced performance and user experience.`,
            `Initiated groundwork for the Broker Portal (first conceptualized for mortgage lenders).`,
            `Mentored and guided developers for a collaborative environment.`,
            `Contributed to the CI, testing and automated code generation stacks.`,
          ],
        },
        {
          role: "Startup Application Booster",
          description: [
            `Key contributor to fintech startup Bondsmith, focusing on the initial stages of their advisor platform. At Zelt, played a comprehensive role in improving code reliability, testing, theming, and implementing key features.`,
          ],
          highlights: [
            `Led development for Bondsmith's advisor platform, shaping its initial stages.`,
            `Enhanced Zelt's code reliability, testing practices, and theming.`,
            `Implemented critical features, including seamless Google Calendar integration for Zelt.`,
          ],
        },
        {
          role: "Principal Developer",
          institution: "Prima Assicurazioni UK",
          description: [
            `Independent developer leading the adoption of a new tech stack for Prima's UK branch, a motor insurance company. Focused on TypeScript, Elixir, Rust, and Elm.`,
          ],
          highlights: [
            `Led development of the public-facing app.`,
            `Established and maintained a front-end monorepo, incorporating Elm.`,
            `Engineered Elixir GraphQL APIs for seamless integration.`,
            `Developed Email and PDF rendering tools for enhanced user communication.`,
            `Implemented and maintained the Cypress integration test environment.`,
          ],
        },
        {
          role: "Senior Software Developer",
          institution: "Moixa Ltd.",
          description: [
            `Senior software developer contributing to the Moixa Gridshare stack, managing charge/discharge rates of batteries/EVs in the UK and Japan.`,
          ],
          highlights: [
            `Principal developer of Moixa's Hub Installer app as well as the Mobile Customer app v2 (React Native).`,
            `Re-implemented the Japanese weather alert system using AWS services such as Dynamo and ES.`,
            `Implemented Commissioning module and other admin's functionalities.`,
            `Contributed to front-end monorepo refactoring and implemented Moixa's Styleguide.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Undertook diverse projects, collaborating with clients across different industries. Developed React and Reflex-FRP (Haskell) web applications, showcasing versatility in meeting client requirements.`,
          ],
        },
        {
          role: "Lead Software Developer",
          institution: "Propago AR",
          description: [
            `Led the development of the Full-Stack architecture for Propago’s financial system. Provided leadership and training in React technology, C# and SQL Server.`,
          ],
          highlights: [
            `Led a team of six developers and participated in key company decisions.`,
            `Supervised staff and provided technical guidance.`,
          ],
        },
        {
          role: "Software Developer",
          institution: "Eventbrite",
          description: [
            `Responsible for fixing and upgrading Eventbrite's Seat Designer app, a large HTML/canvas/svg app with extensive UI drag and drop interactivity.`,
          ],
          highlights: [
            `Improved and refactored their Backbone JS application.`,
            `Upgraded their SVG editor rich internet app.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Engaged in various projects, collaborating with multiple clients across diverse industries. Developed web applications and contributed to game development, showcasing adaptability in meeting client requirements.`,
          ],
        },
        {
          role: "Web Programmer",
          institution: "Estudio Minero",
          description: [
            `Designed and developed web pages and embedded applications using Flash and Javascript.`,
          ],
          highlights: [
            `Created static web pages and led design and implementation efforts.`,
            `Developed Flash web applications (AS3) and implemented PHP/Wordpress backend systems.`,
          ],
        },
      ],
    },
    education: {
      title: "Education",
      education: {
        undergrad: {
          degree: "Systems Engineer",
          institution: "University CAECE Mar del Plata",
          description: `
          Computer science. Algorithms, data structures and software
          patterns. Project management. Quality assurance. Electronic
          circuits.`,
        },
        courses: {
          robotics: {
            course: "Electricity & Electronics - Robotics, Learn by Building",
            institution: "Udemy Academy",
            module1: "Module I - Analog Electronics",
            module2: "Module II - Digital Electronics",
          },
        },
      },
    },
    personalProjects: {
      title: "Personal Projects",
      projects: {
        carcinisation: {
          role: "Project Owner and Developer",
          name: "Carcinisation (Game Jam)",
          description: {
            p1: `Lead the development of a Game boy inspired game prototype for the
            GBJam of 2023, which lasted 10 days. The project was developed
            using the experimental ECS game engine `,
            p2: `, which is written in Rust.`,
          },
          highlights: [
            "Lead development and coordination of a team of six",
            "Primary coder and game designer",
            "Art and story direction",
            "Assistance on selection of music and sound",
          ],
        },
      },
    },
    contactDetails: { title: "Contact Details", subject: "Hello Marco!" },
    skills: {
      professional: {
        title: "Professional Skills",
        list: [
          "Lead software development",
          "Team management",
          "Dealing with stakeholders",
          "Code review",
          "Mentoring",
          "Recruiting",
        ],
      },
      software: {
        title: "Software",
        list: [
          "Typescript / JS / HTML / CSS",
          "React / Native / NextJS",
          "Angular / Jest / Cypress",
          "AWS / NodeJS",
          "Rust / Haskell / Elixir",
          "C# / Java / Python",
          "SQL (Postgres / SQL-Server)",
          "Game dev (Bevy / Unity)",
        ],
      },
      personal: {
        title: "Personal",
        list: [
          "Spanish (fluent)",
          "Digital Painting",
          "Martial Arts",
          "Tenis",
          "Bouldering",
        ],
      },
    },
    footer: {
      p1: "Web version",
      p2: " of this CV. Generated using ",
    },
  },
  HomePage: {
    meta: {
      description: "Personal page, for experiments and publications",
      title: "Marco Toniut",
    },
  },
  NotFoundPage: {
    meta: {
      description: "Are you lost, by any chance?",
      title: "Marco Toniut hasn't been found",
    },
    title: "Not found",
  },
};

export default enUs;
