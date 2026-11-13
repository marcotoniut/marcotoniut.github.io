export const siteConfig = {
  name: "Marco Toniut",
  baseUrl: "https://marcotoniut.github.io",
  description:
    "Marco Toniut, software engineer and technical lead in London. Production platforms for healthcare, fintech and energy; a Game Boy game in Rust; a sound map of London.",
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
  jobTitle: "Software Engineer · Technical Lead",
  // Static, not `new Date()`: this is a static export, so a computed year
  // freezes at build time and silently goes stale between deploys.
  copyrightYear: 2026,
  author: {
    name: "Marco Toniut",
    url: "https://marcotoniut.github.io/",
  },
  social: {
    github: "https://github.com/marcotoniut",
    itch: "https://marcotoniut.itch.io",
    linkedin: "https://www.linkedin.com/in/marco-toniut-4b6a143a/",
    // Rendered by scripts/generate-og.ts; rerun it when the brand changes.
    ogImage: "https://marcotoniut.github.io/og.png",
  },
  sameAs: [
    "https://github.com/marcotoniut",
    "https://marcotoniut.itch.io",
    "https://www.linkedin.com/in/marco-toniut-4b6a143a/",
  ],
} as const
