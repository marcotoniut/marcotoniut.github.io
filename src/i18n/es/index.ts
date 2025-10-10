import type { Translation } from "../i18n-types";

const esEs: Translation = {
  CVPage: {
    meta: {
      description:
        "Este es mi Currículum Vitae profesional en formato web interactivo - Marco Toniut",
      title: "Marco Toniut | Currículum Vitae",
    },
    profession: "Ingeniero de Sistemas",
    goBack: "Volver",
    profile: {
      picture: "Imagen de perfil",
    },
    experience: {
      title: "Experiencia",
      history: [
        {
          role: "Ingeniero de Software Senior V (Contratado a través de YLD para Ledger)",
          description: [
            "Ingeniero de Software sénior contratado a través de YLD para Ledger, líder en monederos físicos de criptomonedas. Inicialmente asignado a la aplicación Earn dentro de Ledger Live (Electron + React Native), donde reestructuré su arquitectura y mejoré los flujos de desarrollo.",
            "Actualmente contribuyendo a la aplicación principal de Ledger Live, centrado en el rendimiento, la escalabilidad y la modernización de las versiones móvil y de escritorio.",
            "Además, desempeño el rol de line manager para tres desarrolladores en YLD, brindando guía técnica, mentoría y apoyo en sus proyectos con clientes.",
          ],
          highlights: [
            "Reestructuración de la arquitectura de Ledger Live Earn, mejorando la modularidad, mantenibilidad y eficiencia de desarrollo.",
            "Implementación de un sistema de mocking de APIs basado en Mock Service Worker (MSW) y generación automática de código para APIs.",
            "Integración y configuración de Braze para campañas dentro de la app y comunicación con los usuarios.",
            "Migración y optimización de la gestión de estado en Wallet XP, mejorando notablemente el tiempo de arranque y el rendimiento.",
            "Soporte en la migración a la Nueva Arquitectura de React Native y resolución de problemas de compatibilidad clave.",
            "Promoción de buenas prácticas en TypeScript, pruebas y consistencia del sistema de diseño.",
            "Mentoría de desarrolladores y alineación de equipos en estándares de arquitectura y desarrollo.",
          ],
        },
        {
          role: "Desarrollador Front-End Líder",
          description: [
            `Desarrollador Front-End Líder en Abound, liderando el desarrollo de "Render", una plataforma SaaS (Python + Angular, React y Vue) para bancos y prestamistas.`,
            `Integración de "Abound" (orientado al cliente) y "Render" (B2B) para ofrecer una experiencia cohesiva y fluida para el usuario.`,
          ],
          highlights: [
            `Liderazgo en la arquitectura Front-End y definición de mejores prácticas.`,
            `Decisiones clave para mejorar el rendimiento y la experiencia de usuario.`,
            `Iniciación de los cimientos para el Portal de Corredores, dirigido a prestamistas hipotecarios.`,
            `Mentoría de desarrolladores y fomento de la colaboración en el equipo.`,
            `Mejoras en la integración continua, testing y generación automatizada de código.`,
          ],
        },
        {
          role: "Ingeniero de Software",
          description: [
            `Contribuyente clave en Zelt, mejorando la fiabilidad del código, las pruebas y el sistema de estilos, además de implementar nuevas funcionalidades e integraciones para su plataforma de RRHH.`,
          ],
          highlights: [
            `Mejora de la fiabilidad del código y las prácticas de testing.`,
            `Refinamiento del sistema de estilos y consistencia visual.`,
            `Implementación de funcionalidades clave, incluida la integración con Google Calendar.`,
          ],
        },
        {
          role: "Desarrollador Principal",
          description: [
            `Desarrollador independiente liderando la adopción de una nueva pila tecnológica para la sucursal del Reino Unido de Prima, una compañía de seguros de automóviles. Enfoque en TypeScript, Elixir, Rust y Elm.`,
          ],
          highlights: [
            `Liderazgo en el desarrollo de la aplicación pública.`,
            `Configuración y mantenimiento de un monorepo Front-End con Elm.`,
            `Diseño de APIs GraphQL en Elixir para una integración transparente.`,
            `Desarrollo de herramientas de renderizado de correos y PDFs.`,
            `Implementación y mantenimiento del entorno de pruebas de integración con Cypress.`,
          ],
        },
        {
          role: "Desarrollador Senior de Software",
          description: [
            `Contribución al stack Moixa Gridshare, gestionando las tasas de carga y descarga de baterías y vehículos eléctricos en el Reino Unido y Japón.`,
          ],
          highlights: [
            `Desarrollo de las aplicaciones Hub Installer y Mobile Customer v2 (React Native).`,
            `Reimplementación del sistema japonés de alertas meteorológicas con servicios de AWS (DynamoDB, Elasticsearch).`,
            `Implementación del módulo de Comisiones y otras herramientas administrativas.`,
            `Refactorización del monorepo Front-End e implementación de la Guía de Estilo de Moixa.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Desarrollo de proyectos para distintos sectores, construyendo aplicaciones web con React y Reflex-FRP (Haskell). Participación directa en todas las etapas del proceso de desarrollo.`,
          ],
        },
        {
          role: "Líder de Desarrollo de Software",
          description: [
            `Liderazgo en la arquitectura Full-Stack del sistema financiero de Propago. Capacitación en React, C# y SQL Server.`,
          ],
          highlights: [
            `Gestión de un equipo de seis desarrolladores y participación en decisiones clave de la empresa.`,
            `Supervisión técnica y mentoría al equipo de desarrollo.`,
          ],
        },
        {
          role: "Desarrollador de Software",
          description: [
            `Responsable de mantener y mejorar Seat Designer, la aplicación HTML/canvas/SVG de Eventbrite, con una extensa interactividad de arrastrar y soltar.`,
          ],
          highlights: [
            `Refactorización y optimización de la aplicación Backbone.js.`,
            `Modernización del editor SVG e interfaz de usuario.`,
          ],
        },
        {
          role: "Freelancer",
          description: [
            `Colaboración en proyectos de desarrollo web y de videojuegos para distintas industrias, adaptándome a diversas tecnologías y requerimientos.`,
          ],
        },
        {
          role: "Programador Web",
          description: [
            `Diseño y desarrollo de sitios web y aplicaciones integradas utilizando Flash y JavaScript.`,
          ],
          highlights: [
            `Creación de sitios web estáticos y liderazgo en diseño e implementación.`,
            `Desarrollo de aplicaciones Flash (AS3) e integración de sistemas backend en PHP/WordPress.`,
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
          about: {
            itchio: "Carcinisation en itch.io",
            github: "Repositorio de GitHub de Carcinisation",
          },
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
          name: "Carcinisation (Game Jam)",
          role: "Propietario y Desarrollador del Proyecto",
        },
      },
    },
    summary: {
      title: "Perfil",
      summary: [
        "Como desarrollador independiente durante gran parte de mi carrera, he abordado proyectos diversos en múltiples empresas y con distintos clientes, cultivando una base técnica amplia y un fuerte sentido de autonomía.",
        "En roles de liderazgo, mentoría y negociación, he coordinado con éxito equipos de desarrollo, impulsando la adopción de tecnologías y flujos de trabajo modernos. Detallista y pragmático, combino una mentalidad experimental con una ejecución disciplinada, asegurando la entrega oportuna de resultados de alta calidad.",
      ],
    },
    contactDetails: {
      location: "Londres, Reino Unido",
      title: "Detalles de Contacto",
      subject: "¡Hola Marco!",
    },
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
        list: {
          gameDev: "Desarrollo de juegos (Unity / Bevy)",
        },
      },
      personal: {
        title: "Personal",
        list: [
          "Español (fluido)",
          "Pintura digital",
          "Artes marciales",
          "Tenis",
          "Escalada (bouldering)",
        ],
      },
    },
    footer: {
      p1: "Versión web",
      p2: " de este CV. Generado con Next.js y TypeScript.",
    },
  },
  HomePage: {
    meta: {
      description: "Página personal para experimentos y publicaciones",
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
