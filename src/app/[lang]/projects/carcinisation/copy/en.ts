export const carcinisationCopyEn = {
  short:
    "A GB-tinted top-down shooter where Captain Acrab, warped by radiation from a mysterious asteroid, fights through alien hordes to reclaim his ship and fate.",
  story: [
    "Captain Acrab’s freighter crossed the wake of a cryptic asteroid that pulsed with impossible radiation.",
    "The blast hurled the crew toward an uncharted planet and twisted Acrab into something far from human.",
    "He now fights through swarms of hostile aliens to reach the asteroid again and undo the mutation.",
  ],
  jamSummary:
    "Built in a few intense days for GBJam 11, we prototyped a Bevy 0.11 top-down shooter loop in Rust, set up enemy waves and pickups, assembled a Game Boy-inspired palette, and shipped a Web build. We cut extra levels due to missing transitions, fixed WASM asset loading quirks, and prioritized feel (aiming, feedback, SFX) over scope. Post-jam I bumped the build to Bevy 0.17 and plan to restore the space stage with smoother level flow.",
  jam: [
    "Cut a planned space stage and bonus arenas so we could polish the core crash-site loop.",
    "Outlined post-jam goals: bring back the space stage, stitch smoother level transitions, and expand enemy behaviors.",
    "Documented Web build quirks (initial asset streaming, audio unlock) and quick refresh/restart fixes.",
  ],
  controls: [
    ["DPAD", "Arrow Keys"],
    ["A", "Z"],
    ["B", "X"],
    ["Start", "Enter / Return"],
    ["Select", "Right Shift"],
  ],
  knownIssues: [
    "The first Web load stalls while WASM assets stream; a quick refresh fixes it.",
    "Rare crash when a health pickup spawns alongside a wave trigger; restarting resolves the state.",
  ],
  tech: [
    "Rust",
    "Bevy",
    "PixilArt",
    "Photoshop",
    "MSPaint",
    "Procreate",
    "VSCode",
  ],
  jamTeam: [
    {
      name: "Marco Toniut",
      role: "Design, Engineering & Lead",
      url: "https://marcotoniut.itch.io/",
    },
    {
      name: "AESADiGiTAL",
      role: "Art",
      url: "https://aesadigital.itch.io/",
    },
    {
      name: "FeDev13",
      role: "Music",
      url: "https://itch.io/profile/fedev13",
    },
    {
      name: "PSPiso",
      role: "Art & Support",
      url: "https://pspiso.itch.io/",
    },
    {
      name: "Magicalflyingart",
      role: "Art & Narrative",
      url: "https://magicalflyingart.itch.io/",
    },
    {
      name: "armandwegnez",
      role: "SFX",
    },
  ],
  links: {
    itch: "https://marcotoniut.itch.io/carcinisation",
    github: "https://github.com/marcotoniut/carcinisation",
  },
  labels: {
    jamNotes: "Jam Notes",
    knownIssues: "Known Issues",
    controls: "Controls",
    tech: "Tech & Tools",
    jamTeam: "Jam Team",
    story: "Story",
    screenshots: "Screenshots",
    externalLinks: "External Links",
    jamMeta: "Jam",
    platformMeta: "Platform",
    statusMeta: "Status",
    engineMeta: "Engine",
    playableCta: "Play on itch.io",
    sourceCta: "View source",
    controlsHeadingLeft: "Game Boy",
    controlsHeadingRight: "Keyboard",
  },
  continuationNote:
    "The jam build shipped on Bevy 0.11 with the team above; ongoing development is solo on Bevy 0.17.",
  meta: {
    subtitle: "GBJam 11 — Rust (Bevy 0.11 → 0.17) — Web (HTML5)",
    status: "In development",
    platform: "HTML5 (Web)",
    engine: "Rust + Bevy 0.17",
  },
} as const

export type CarcinisationCopy = typeof carcinisationCopyEn
