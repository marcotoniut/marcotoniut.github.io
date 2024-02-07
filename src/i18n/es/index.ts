import type { Translation } from "../i18n-types";

const esEs: Translation = {
  CVPage: {
    meta: {
      description:
        "Este es mi Curriculum Vitae profesional en formato web interactivo - Marco Toniut",
      title: "Marco Toniut | Curriculum Vitae",
    },
    profession: "Ingeniero de Sistemas",
    goBack: "Volver",

    workExperience: {
      title: "Experiencia Laboral",
      history: [
        {
          role: "Desarrollador Front-End Líder",
          description: [
            `Desarrollador Front-End Líder en Fintern, liderando el desarrollo de "Render," una aplicación Python + Angular que sirve como Software as a Service (SaaS) para bancos y prestamistas. Enfoque en decisiones arquitectónicas clave, orientación de equipo y mentoría.`,
            `Integración de "Abound" (orientado al cliente) y "Render" (B2B) para una experiencia cohesiva y amigable para el usuario.`,
          ],
          highlights: [
            `Liderazgo en el desarrollo Front-End para Render, estableciendo una arquitectura unificada.`,
            `Toma de decisiones clave para una experiencia de usuario y rendimiento mejorados.`,
            `Iniciación de los cimientos para el Portal de Corredores (primero conceptualizado para prestamistas hipotecarios).`,
            `Mentoría y guía de desarrolladores para un ambiente colaborativo.`,
            `Contribución a la pila de CI, pruebas y generación de código automatizada.`,
          ],
        },
        {
          role: "Impulsor de Aplicaciones de Startup",
          description: [
            `Contribuyente clave a la startup fintech Bondsmith, enfocado en las etapas iniciales de su plataforma para asesores. En Zelt, desempeñó un papel integral en la mejora de la confiabilidad del código, pruebas, tema e implementación de características clave.`,
          ],
          highlights: [
            `Liderazgo en el desarrollo de la plataforma para asesores de Bondsmith, dando forma a sus etapas iniciales.`,
            `Mejora de la confiabilidad del código, prácticas de prueba y tema de Zelt.`,
            `Implementación de características críticas, incluida la integración perfecta de Google Calendar para Zelt.`,
          ],
        },
        {
          role: "Desarrollador Principal",
          institution: "Prima Assicurazioni UK",
          description: [
            `Desarrollador independiente liderando la adopción de una nueva pila tecnológica para la sucursal del Reino Unido de Prima, una compañía de seguros de automóviles. Enfoque en TypeScript, Elixir, Rust y Elm.`,
          ],
          highlights: [
            `Liderazgo en el desarrollo de la aplicación pública.`,
            `Establecimiento y mantenimiento de un monorepo Front-End, incorporando Elm.`,
            `Diseño de APIs GraphQL en Elixir para una integración perfecta.`,
            `Desarrollo de herramientas de renderización de correo electrónico y PDF para una comunicación mejorada con el usuario.`,
            `Implementación y mantenimiento del entorno de prueba de integración Cypress.`,
          ],
        },
        {
          role: "Desarrollador Senior de Software",
          institution: "Moixa Ltd.",
          description: [
            `Desarrollador de software senior contribuyendo al stack Moixa Gridshare, gestionando tasas de carga / descarga de baterías / vehículos eléctricos en el Reino Unido y Japón.`,
          ],
          highlights: [
            `Desarrollador principal de la aplicación Moixa's Hub Installer y la aplicación Mobile Customer v2 (React Native).`,
            `Re-implementación del sistema de alerta meteorológica japonés utilizando servicios de AWS como Dynamo y ES.`,
            `Implementación del módulo de Comisiones y otras funcionalidades de administración.`,
            `Contribución a la refactorización del monorepo Front-End e implementación de la Guía de Estilo de Moixa.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Realización de diversos proyectos, colaborando con clientes de diferentes industrias. Desarrollo de aplicaciones web React y Reflex-FRP (Haskell), demostrando versatilidad para cumplir con los requisitos del cliente.`,
          ],
        },
        {
          role: "Líder de Desarrollo de Software",
          institution: "Propago AR",
          description: [
            `Liderazgo en el desarrollo de la arquitectura Full-Stack para el sistema financiero de Propago. Proporcionando liderazgo y capacitación en tecnología React, C# y SQL Server.`,
          ],
          highlights: [
            `Liderazgo de un equipo de seis desarrolladores y participación en decisiones clave de la empresa.`,
            `Supervisión del personal y provisión de orientación técnica.`,
          ],
        },
        {
          role: "Desarrollador de Software",
          institution: "Eventbrite",
          description: [
            `Responsable de corregir y mejorar la aplicación Seat Designer de Eventbrite, una gran aplicación HTML / canvas / svg con una extensa interactividad de arrastrar y soltar.`,
          ],
          highlights: [
            `Mejora y refactorización de su aplicación Backbone JS.`,
            `Actualización de su aplicación rica en internet SVG.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Participación en varios proyectos, colaborando con múltiples clientes de diversas industrias. Desarrollo de aplicaciones web y contribución al desarrollo de juegos, demostrando adaptabilidad para cumplir con los requisitos del cliente.`,
          ],
        },
        {
          role: "Programador Web",
          institution: "Estudio Minero",
          description: [
            `Diseño y desarrollo de páginas web y aplicaciones integradas utilizando Flash y JavaScript.`,
          ],
          highlights: [
            `Creación de páginas web estáticas y liderazgo en el diseño e implementación.`,
            `Desarrollo de aplicaciones web Flash (AS3) e implementación de sistemas backend PHP/Wordpress.`,
          ],
        },
      ],
    },
    education: {
      title: "Educación",
      education: {
        undergrad: {
          degree: "Ingeniero de Sistemas",
          institution: "Universidad CAECE Mar del Plata",
          description: `
          Ciencias de la computación. Algoritmos, estructuras de datos y patrones de software.
          Gestión de proyectos. Aseguramiento de calidad. Circuitos electrónicos.`,
        },
        courses: {
          robotics: {
            course:
              "Electricidad y Electrónica - Robótica, Aprende Construyendo",
            institution: "Academia Udemy",
            module1: "Módulo I - Electrónica Analógica",
            module2: "Módulo II - Electrónica Digital",
          },
        },
      },
    },
    personalProjects: {
      title: "Proyectos Personales",
      projects: {
        carcinisation: {
          role: "Propietario y Desarrollador del Proyecto",
          name: "Carcinisation (Game Jam)",
          description: {
            p1: `Liderazgo en el desarrollo de un prototipo de juego inspirado en Game Boy para la GBJam de 2023, que duró 10 días. El proyecto fue desarrollado utilizando el motor de juego ECS experimental`,
            p2: `, que está escrito en Rust.`,
          },
          highlights: [
            "Liderazgo en el desarrollo y coordinación de un equipo de seis personas.",
            "Codificador principal y diseñador de juegos.",
            "Dirección de arte e historia.",
            "Asistencia en la selección de música y sonido.",
          ],
        },
      },
    },
    summary: {
      title: "Perfil",
      summary: [
        `Como desarrollador independiente durante gran parte de mi carrera, he abordado diversas tareas en varias empresas y clientes, cultivando una amplia gama de conocimientos técnicos y un compromiso con la autorrealización.
        `,
        `En roles de liderazgo, mentoría y negociación, he coordinado con éxito equipos de desarrollo, defendiendo la adopción de técnicas y herramientas modernas. Detallista y experimental en mi enfoque de codificación, priorizo los plazos y hitos, planificando tareas meticulosamente para la finalización del proyecto a tiempo.
        `,
      ],
    },
    contactDetails: { title: "Detalles de Contacto", subject: "¡Hola Marco!" },
    skills: {
      professional: {
        title: "Habilidades Profesionales",
        list: [
          "Liderazgo en desarrollo de software",
          "Gestión de equipos",
          "Trato con partes interesadas",
          "Revisión de código",
          "Mentoría",
          "Reclutamiento",
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
          "Desarrollo de juegos (Bevy / Unity)",
        ],
      },
      personal: {
        title: "Personal",
        list: [
          "Español (fluido)",
          "Pintura digital",
          "Artes Marciales",
          "Tenis",
          "Escalada en Bloque",
        ],
      },
    },
    footer: {
      p1: "Versión web",
      p2: " de este CV. Generado usando ",
    },
  },
  HomePage: {
    meta: {
      description: "Página personal, para experimentos y publicaciones",
      title: "Marco Toniut",
    },
  },
  NotFoundPage: {
    meta: {
      description: "¿Estás perdido, por casualidad?",
      title: "Marco Toniut no ha sido encontrado",
    },
    title: "No encontrado",
  },
};

export default esEs;
