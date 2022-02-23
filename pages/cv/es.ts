export const es = {
  head: {
    title: "Marco Toniut | Curriculum Vitae",
    description:
      "Este es mi Curriculum Vitae profesional en formato interactivo - Marco Toniut",
  },
  title: "Marco Stefano Toniut",
  article: {
    summary: {
      title: "Ingeniero en Sistemas",
      description: [
        "Haber trabajado durante buena parte de mi carrera como desarrollador independiente, me he visto encarar diferentes tareas de gran variedad, para multiples compañías y clientes. Lo cual me ha vestido de una conocimiento técnico, así como una demanda constante por auto-actualizarme",
        "He estado en posiciones de liderazgo, mentoría y negociación. Habiendo coordinado equipos de desarrollo, impulsando por la adopción de técnicas y herramientas modernas.",
        "Orientado al detalle, experimental, atento al código, pero al tanto de que las fechas limites y los hitos de desarrollo son de lo más importante. Hago lo necesario para mantenerme dentro del programa, planeando mis batallas.",
      ],
    },
    experience: {
      title: "Experiencia",
      items: {
        "principal_developer:prima": {
          job: "Desarrollador Principal",
          description: [
            "Kickstart the new tech stack for Prima’s UK branch, a tech-focused motor insurance company that’s been a major success in Italy. Language stack is comprised mainly of Typescript, Elixir, Rust and Elm.",
            "Full-Stack development • Building of the UK tech stack • Mentoring developers on TS, React and FRP",
          ],
          responsibilities: [
            "Principal developer of the public facing app",
            "Set up and maintain FE build/lint/test monorepo",
            "Develop Elixir Graphql APIs",
            "Develop Email and PDF React rendering tools",
            "Set up cypress integration test environment",
          ],
        },
        "senior_software_developer:moixa": {
          job: "Senior Software Developer",
          description: [
            "Developing and upgrading pieces of the Moixa Gridshare stack, a system to smartly control charge/discharge rates of eco-powered batteries/EVs across several countries, mainly the UK and Japan.",
            "Full-Stack development • Working on the Gridshare Monorepo • Mentoring developers on TS and React • Developing new systems",
          ],
          responsibilities: [
            "Principal developer of Moixa’s Hub Installer app in a team of two",
            "Re-implemented the Japanese weather alert system (AWS ES, Dynamo, SQS)",
            "Principal developer of Moixa’s Mobile Customer app v2 (React Native)",
            "Implemented Admin’s Commissioner’s module V3, as well as other of its functionalities",
            "Implemented Moixa’s Styleguide",
            "Helped to refactor the FE’s monorepo to become functional via React Hooks",
          ],
        },
        freelancer_2016: {
          job: "Freelancer",
          description: [
            "Several jobs of interest. Dealing with different clients, requirements and businesses. React, Reflex-FRP (Haskell) web applications. Haskell FRP.",
          ],
        },
        "lead_software_developer:propago": {
          job: "Lead Software Developer",
          description: [
            "Realise the Full-Stack architecture for Propago’s financial system. Lead and train staff in then new technology React. Back End was developed using C#/SQL Server, deployed to Azure.",
          ],
          responsibilities: [
            "Leading staff of six developers",
            "Involvement in company decisions",
            "Hiring, training, supervising staff",
          ],
        },
        "front-end_software_developer:eventbrite": {
          job: "Front-End Software Developer",
          description: [
            "Front-End developer, in charge of fixing and upgrading their Seat Designer application. A large HTML/canvas/svg app full of UI drag and drop interactivity.",
          ],
          responsibilities: [
            "Backbone JS app development",
            "Upgrading SVG editor rich internet app",
          ],
        },
        freelancer_2010: {
          job: "Freelancer",
          description: [
            "Several jobs of interest. Dealing with multiple clients, requirements and businesses. Web apps, game development.",
          ],
        },
        "web_programmer:estudio_minero": {
          job: "Front-End Software Developer",
          description: [
            "Design and develop web pages and embedded applications with Flash and Javascript.",
          ],
          responsibilities: [
            "Static web pages",
            "Design and implementation",
            "Flash web applications (as3)",
            "PHP/Wordpress BEs",
          ],
        },
      },
    },
    education: {
      title: "Education",
      items: {
        "robotics:udemy": {
          name: "Electricity & electronics - Robotics, learn by building",
          modules: {
            moduleI: "Module I - Analog Electronics",
            moduleII: "Module II - Digital Electronics",
          },
        },
        "systems-engineer:caece": {
          name: "Systems Engineer",
          institution: "Universidad CAECE Mar del Plata",
          description: [
            "Computer science. Algorithms, data structures and software patterns. Project management. Quality assurance. Electronic circuits.",
          ],
        },
      },
    },
  },
  aside: {
    contact: {
      title: "Contact Details",
      items: {
        location: "London, UK",
      },
    },
    skills: {
      title: "Professional Skills",
      items: {
        lead_software_development: "Lead software development",
        team_management_and_mentoring: "Team management and mentoring",
        software_architecture: "Software architecture",
        code_assessment: "Code assessment",
        recruiting: "Recruiting",
        negotiation: "Negotiation",
      },
    },
    software_knowledge: {
      title: "Software Knowledge",
      items: {
        web: "Typescript / JS / HTML / CSS",
        react: "React / Native / NextJS",
        node: "NodeJS",
        aws: "AWS DynamoDB / Elastic Search / IoT",
        functional: "Haskell / Elixir",
        frp: "(Functional) Reactive Programming",
        dotnet: "DotNet C# / SQL-Server / Azure",
        postgres: "PostgreSQL",
        unity3d: "Unity3D",
        electronics: "Electronics",
      },
      languages: {
        title: "Languages",
        items: {
          english: "English (Fluent)",
          spanish: "Spanish (Native)",
        },
      },
      interests: {
        title: "Personal Interests",
        items: {
          digital_painting: "Digital Painting",
          karate_shotokan: "Karate Shotokan",
          tennis: "Tennis",
          bouldering: "Bouldering",
        },
      },
    },
  },
} as const;
