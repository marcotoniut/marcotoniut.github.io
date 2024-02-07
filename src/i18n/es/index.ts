import type { Translation } from "../i18n-types";

const esEs: Translation = {
  CVPage: {
    meta: {
      description:
        "Este es mi Curriculum Vitae en formato web interactivo - Marco Toniut",
      title: "Marco Toniut | Curriculum Vitae",
    },
    profession: "Ingeniero en Sistemas",
    goBack: "Volver al inicio",
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
    sections: {
      workExperience: {
        title: "Experiencia Laboral",
      },
    },
  },
  HomePage: {
    meta: {
      description: "Página personal, para publicaciones y experimentos",
      title: "Marco Toniut",
    },
  },
  NotFoundPage: {
    meta: {
      description: "Me parece que te has perdido",
      title: "Marco Toniut no ha sido encontrado",
    },
    title: "No encontrado",
  },
};

export default esEs;
