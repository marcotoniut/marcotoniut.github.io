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
    summary: {
      0: `As an independent developer for a significant part of my career,
	  I've tackled diverse tasks across various companies and
	  clients, cultivating an eclectic range of technical knowledge and
	  a commitment to self-actualisation.
	  `,
      1: `In leadership, mentoring, and negotiation roles, I've
	  successfully coordinated development teams, championing the
	  adoption of modern techniques and tools. Detail-oriented and
	  experimental in my coding approach, I prioritise deadlines and
	  milestones, planning tasks meticulously for on-time project
	  completion.
	  `,
    },
    sections: {
      workExperience: {
        title: "Work Experience",
      },
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
