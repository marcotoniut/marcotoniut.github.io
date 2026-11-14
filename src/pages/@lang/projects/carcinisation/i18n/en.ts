import type { WidenLocaleStrings } from "@/i18n/helpers"

const carcinisationEnBase = {
  short:
    "A GB-tinted top-down shooter where Captain Acrab, warped by radiation from a mysterious asteroid, fights through alien hordes to reclaim his ship and fate.",
  story: [
    "Captain Acrab’s freighter crossed the wake of a cryptic asteroid that pulsed with impossible radiation.",
    "The blast hurled the crew toward an uncharted planet and twisted Acrab into something far from human.",
    "He now fights through swarms of hostile aliens to reach the asteroid again and undo the mutation.",
  ],
  controls: [
    ["DPAD", "Arrow Keys"],
    ["A", "Z"],
    ["B", "X"],
    ["Start", "Enter / Return"],
    ["Select", "Right Shift"],
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
  },
  labels: {
    controls: "Controls",
    jamTeam: "Jam Team",
    story: "Story",
    screenshots: "Screenshots",
    jamMeta: "Jam",
    platformMeta: "Platform",
    statusMeta: "Status",
    engineMeta: "Engine",
    playableCta: "Play on itch.io",
    controlsHeadingLeft: "Game Boy",
    controlsHeadingRight: "Keyboard",
  },
  continuationNote:
    "The jam build shipped on Bevy 0.11 with the team above; ongoing development is solo on Bevy 0.17.",
  meta: {
    status: "In development",
    platform: "HTML5 (Web)",
    engine: "Rust + Bevy 0.17",
  },
} as const

export type CarcinisationCopy = WidenLocaleStrings<typeof carcinisationEnBase>
export const enUk: CarcinisationCopy = carcinisationEnBase
