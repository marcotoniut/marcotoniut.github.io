import type { BaseTranslation } from "../i18n-types"

const enUs: BaseTranslation = {
  CVPage: {
    meta: {
      description:
        "This is my professional Resume in interactive web format - Marco Toniut",
      title: "Marco Toniut | Resume",
    },
    profession: "Systems Engineer",
    goBack: "Go back",
    title: "Resume",
    profile: {
      picture: "Profile picture",
    },
    experience: {
      title: "Experience",
      history: [
        {
          role: "Senior Software Engineer V (Contracted through YLD for Ledger)",
          description: [
            "Senior Software Engineer contracted through YLD for Ledger, the cryptocurrency hardware wallet leader. Initially assigned to the Earn section of Ledger Live (Electron + React Native), where I restructured its architecture and improved developer workflows.",
            "Currently contributing to the core Ledger Live app, focusing on performance, scalability, and modernization across mobile and desktop.",
            "Additionally acting as line manager for three developers at YLD, providing technical guidance, mentorship, and support across client engagements.",
          ],
          highlights: [
            "Reworked the architecture of Ledger Live Earn, improving modularity, maintainability, and development efficiency.",
            "Implemented a Mock Service Worker (MSW)–based API mocking system and automated API code generation.",
            "Integrated and configured Braze for in-app campaigns and targeted user engagement.",
            "Migrated and optimized state management in the Wallet XP feature, significantly improving startup time and performance.",
            "Promoted best practices in TypeScript, testing, and design system consistency.",
            "Conducted close to 30 interviews for software engineering roles, strengthening YLD’s hiring pipeline.",
            "Mentored developers and aligned teams around architectural and coding standards.",
          ],
        },
        {
          role: "Lead Front-End Developer",
          description: [
            `Lead Front-End Developer at Abound, driving the development of "Render," a Python + Angular (React and Vue) SaaS platform for banks and lenders.`,
            `Integrated "Abound" (customer-facing) and "Render" (B2B) into a cohesive, user-friendly experience.`,
          ],
          highlights: [
            `Led Front-End architecture and best practices for Render.`,
            `Defined key decisions to improve performance and user experience.`,
            `Laid the groundwork for the Broker Portal for mortgage lenders.`,
            `Mentored developers and strengthened team collaboration.`,
            `Enhanced CI, testing, and automated code generation pipelines.`,
          ],
        },
        {
          role: "Software Engineer",
          description: [
            `Key contributor at Zelt, improving code reliability, testing, and theming, while implementing new features and integrations for its HR management platform.`,
          ],
          highlights: [
            `Improved code reliability and testing practices.`,
            `Enhanced theming and visual consistency across the product.`,
            `Implemented key features, including seamless Google Calendar integration.`,
          ],
        },
        {
          role: "Principal Developer",
          description: [
            `Independent developer leading the adoption of a new tech stack for Prima’s UK branch, a motor insurance company. Focused on TypeScript, Elixir, Rust, and Elm.`,
          ],
          highlights: [
            `Led development of the public-facing app.`,
            `Set up and maintained a Front-End monorepo using Elm.`,
            `Designed Elixir GraphQL APIs for seamless integration.`,
            `Built tools for email and PDF rendering.`,
            `Maintained Cypress-based integration testing environment.`,
          ],
        },
        {
          role: "Senior Software Developer",
          description: [
            `Contributed to the Moixa Gridshare stack, managing charge and discharge rates of batteries and EVs in the UK and Japan.`,
          ],
          highlights: [
            `Developed Moixa’s Hub Installer app and Mobile Customer app v2 (React Native).`,
            `Reimplemented Japan’s weather alert system with AWS (DynamoDB, Elasticsearch).`,
            `Built the Commissioning module and admin tools.`,
            `Refactored the Front-End monorepo and implemented the company styleguide.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Delivered projects across multiple industries, building React and Reflex-FRP (Haskell) web apps. Hands-on with all stages of design and development.`,
          ],
        },
        {
          role: "Lead Software Developer",
          description: [
            `Led full-stack architecture for Propago’s financial system. Provided training in React, C#, and SQL Server.`,
          ],
          highlights: [
            `Led a team of six developers and participated in key company decisions.`,
            `Supervised and mentored developers, providing technical guidance.`,
          ],
        },
        {
          role: "Software Developer",
          description: [
            `Maintained and improved Eventbrite’s Seat Designer, a large HTML/canvas/SVG app with complex drag-and-drop interactions.`,
          ],
          highlights: [
            `Refactored and optimised the Backbone.js codebase.`,
            `Enhanced and modernized the SVG-based UI editor.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Worked on web and game projects across different industries, adapting to a wide range of technologies and client needs.`,
          ],
        },
        {
          role: "Web Programmer",
          description: [
            `Designed and developed websites and embedded applications using Flash and JavaScript.`,
          ],
          highlights: [
            `Created static websites, leading design and implementation.`,
            `Developed Flash (AS3) web apps and integrated PHP/WordPress backends.`,
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
            Comprehensive training in computer science, covering algorithms, data structures, and software architecture patterns. 
            Additional focus on project management, quality assurance, and electronic circuit design.`,
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
          about: {
            itchio: "Carcinisation on itch.io",
            github: "GitHub repository of Carcinisation",
          },
          description: {
            p1: `Led the development of a Game Boy–inspired prototype for the GBJam 2023, developed over 10 days using the experimental ECS game engine `,
            p2: `, written in Rust.`,
          },
          highlights: [
            "Led development and coordination of a team of six.",
            "Primary coder and game designer.",
            "Directed art and story development.",
          ],
          name: "Carcinisation (Game Jam)",
          role: "Project Owner and Developer",
        },
      },
    },
    summary: {
      title: "Profile",
      summary: [
        "As an independent developer for much of my career, I've taken on diverse projects across multiple companies and clients, cultivating a broad technical foundation and a strong sense of ownership.",
        "In leadership, mentoring, and negotiation roles, I've successfully coordinated development teams and driven the adoption of modern technologies and workflows. Detail-oriented and pragmatic, I combine an experimental mindset with disciplined execution, ensuring timely delivery of high-quality results.",
      ],
    },
    contactDetails: {
      location: "London, UK",
      title: "Contact Details",
      subject: "Hello Marco!",
    },
    skills: {
      professional: {
        title: "Professional Skills",
        list: [
          "Software development leadership",
          "Team management",
          "Stakeholder engagement",
          "Code review",
          "Mentoring",
          "Recruiting",
        ],
      },
      software: {
        title: "Software",
        list: {
          gameDev: "Game development (Unity / Bevy)",
        },
      },
      personal: {
        title: "Personal",
        list: [
          "Spanish (fluent)",
          "Digital painting",
          "Martial arts",
          "Tennis",
          "Bouldering",
        ],
      },
    },
    footer: {
      p1: "Web version",
      p2: " of this CV. Built with Next.js and TypeScript.",
    },
  },
  HomePage: {
    meta: {
      description: "Personal page for experiments and publications",
      title: "Marco Toniut",
    },
    cv: {
      label: "Resume",
      hint: "View the resume →",
    },
    contact: {
      label: "Contact",
      hint: "Get in touch →",
    },
    carcinisation: {
      label: "Carcinisation",
    },
  },
  Common: {
    buyMeACoffee: "Buy me a coffee",
    buyMeACoffeeIconAlt: "Buy me a coffee logo",
    supportTagline: "Support my work",
  },
  NotFoundPage: {
    meta: {
      description: "Are you lost, by any chance?",
      title: "Marco Toniut hasn't been found",
    },
    title: "Not found",
  },
  ContactPage: {
    meta: {
      description:
        "Get in touch with Marco Toniut for freelance projects and collaborations",
      title: "Contact | Marco Toniut",
    },
    title: "Get in Touch",
    description:
      "Have something you’d like to talk about? Leave a message below and I’ll get back to you soon.",
    backToHome: "Back to home",
    form: {
      title: "Subject",
      titlePlaceholder: "What's this about?",
      message: "Message",
      messagePlaceholder: "Write your message here…",
      phone: "Phone number (optional)",
      phonePlaceholder: "+44 123 456 7890",
      submit: "Send message",
    },
  },
}

export default enUs
