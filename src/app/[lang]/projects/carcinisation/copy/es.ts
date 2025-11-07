export const carcinisationCopyEs = {
  short:
    "Un shooter con tinte GB donde el Capitán Acrab, alterado por la radiación de un asteroide misterioso, combate oleadas de alienígenas para recuperar su nave y su destino.",
  story: [
    "La nave del capitán Acrab pasó junto a un asteroide críptico que emitía radiación imposible.",
    "El impacto los lanzó contra un planeta desconocido y lo transformó en algo muy distinto a lo humano.",
    "Ahora debe abrirse paso entre hordas alienígenas para regresar al asteroide y revertir la mutación.",
  ],
  jamSummary:
    "Hecho en pocos días para la GBJam 11, prototipamos un bucle de shooter con Bevy 0.11 en Rust, añadimos oleadas de enemigos y recogibles, montamos una paleta estilo Game Boy y publicamos una versión Web. Recortamos niveles por faltas de transición, arreglamos detalles de carga de assets en WASM y priorizamos el ‘game feel’ (apuntado, feedback, SFX) sobre el alcance. Después del jam migré a Bevy 0.17 y pienso recuperar la fase espacial con transiciones más suaves.",
  jam: [
    "Recortamos la fase espacial y arenas extra para pulir el bucle principal del accidente.",
    "Plan post-jam: restaurar la fase espacial, crear transiciones más suaves y ampliar los patrones enemigos.",
    "Documentamos las rarezas del build Web (streaming inicial, audio) y sus remedios de refrescar/reiniciar.",
  ],
  controls: [
    ["DPAD", "Flechas"],
    ["A", "Z"],
    ["B", "X"],
    ["Start", "Enter / Intro"],
    ["Select", "Shift derecho"],
  ],
  knownIssues: [
    "La primera carga en Web puede tardar mientras se descargan los assets WASM; refrescar lo arregla.",
    "Existe un fallo raro cuando aparece un botiquín junto a un disparador de oleadas; reiniciar limpia el estado.",
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
    github: "https://github.com/marcotoniut/carcinisation",
  },
  labels: {
    jamNotes: "Notas del jam",
    knownIssues: "Problemas conocidos",
    controls: "Controles",
    tech: "Tecnología y herramientas",
    jamTeam: "Equipo",
    story: "Historia",
    screenshots: "Capturas",
    externalLinks: "Enlaces externos",
    jamMeta: "Jam",
    platformMeta: "Plataforma",
    statusMeta: "Estado",
    engineMeta: "Motor",
    playableCta: "Jugar en itch.io",
    sourceCta: "Ver código",
    controlsHeadingLeft: "Game Boy",
    controlsHeadingRight: "Teclado",
  },
  continuationNote:
    "El build del jam salió en Bevy 0.11 con el equipo anterior; el desarrollo actual lo continúo yo con Bevy 0.17.",
  meta: {
    subtitle: "GBJam 11 — Rust (Bevy 0.11 → 0.17) — Web (HTML5)",
    status: "En desarrollo",
    platform: "HTML5 (Web)",
    engine: "Rust + Bevy 0.17",
  },
} as const
