import type { CarcinisationCopy } from "./en"

export const esAr = {
  short:
    "Un shooter con tinte GB donde el Capitán Acrab, alterado por la radiación de un asteroide misterioso, combate oleadas de alienígenas para recuperar su nave y su destino.",
  story: [
    "La nave del capitán Acrab pasó junto a un asteroide críptico que emitía radiación imposible.",
    "El impacto los lanzó contra un planeta desconocido y lo transformó en algo muy distinto a lo humano.",
    "Ahora debe abrirse paso entre hordas alienígenas para regresar al asteroide y revertir la mutación.",
  ],
  controls: [
    ["DPAD", "Flechas"],
    ["A", "Z"],
    ["B", "X"],
    ["Start", "Enter / Intro"],
    ["Select", "Shift derecho"],
  ],
  jamTeam: [
    {
      name: "Marco Toniut",
      role: "Diseño, Ingeniería & Dirección",
      url: "https://marcotoniut.itch.io/",
    },
    {
      name: "AESADiGiTAL",
      role: "Arte",
      url: "https://aesadigital.itch.io/",
    },
    {
      name: "FeDev13",
      role: "Música",
      url: "https://itch.io/profile/fedev13",
    },
    {
      name: "PSPiso",
      role: "Arte & Soporte",
      url: "https://pspiso.itch.io/",
    },
    {
      name: "Magicalflyingart",
      role: "Arte & Narrativa",
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
    controls: "Controles",
    jamTeam: "Equipo",
    story: "Historia",
    screenshots: "Capturas",
    jamMeta: "Jam",
    platformMeta: "Plataforma",
    statusMeta: "Estado",
    engineMeta: "Motor",
    playableCta: "Jugar en itch.io",
    controlsHeadingLeft: "Game Boy",
    controlsHeadingRight: "Teclado",
  },
  continuationNote:
    "El build del jam salió en Bevy 0.11 con el equipo anterior; el desarrollo actual lo continúo yo con Bevy 0.17.",
  meta: {
    status: "En desarrollo",
    platform: "HTML5 (Web)",
    engine: "Rust + Bevy 0.17",
  },
} as const satisfies CarcinisationCopy
