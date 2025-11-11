export const siteConfig = {
  name: "Marco Toniut",
  baseUrl: "https://marcotoniut.github.io",
  description:
    "Marco Toniut is a London-based software engineer specialising in robust web platforms, developer tooling, and Game Boy-inspired experiments.",
  keywords: [
    "Marco Toniut",
    "software engineer",
    "front-end",
    "Next.js",
    "TypeScript",
    "game development",
    "Ledger Live",
    "Bevy",
    "Rust",
  ],
  author: {
    name: "Marco Toniut",
    url: "https://marcotoniut.github.io/",
  },
  social: {
    github: "https://github.com/marcotoniut",
    itch: "https://marcotoniut.itch.io",
    linkedin: "https://www.linkedin.com/in/marco-toniut-4b6a143a/",
    ogImage: "https://marcotoniut.github.io/PLACEHOLDER.png",
  },
  sameAs: [
    "https://github.com/marcotoniut",
    "https://marcotoniut.itch.io",
    "https://www.linkedin.com/in/marco-toniut-4b6a143a/",
  ],
} as const

export type SiteConfig = typeof siteConfig
