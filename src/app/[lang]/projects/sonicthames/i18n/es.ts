import type { SonicThamesCopy } from "./en"

export const esAr = {
  meta: {
    title: "SonicThames",
    description:
      "Cartografía sonora experimental del Támesis construida con React, Mapbox, RxJS y capas Pixi con niebla persistente.",
  },
  hero: {
    kicker: "Estudio de Cartografía Sonora",
    title: "SonicThames",
    subtitle:
      "Cartografía acústica del río Támesis combinada con un experimento perceptual.",
    summary:
      "Una interfaz minimalista y ligeramente extraña donde la tecnología y el ritual comparten el río para escuchar ecos invisibles y tratar Londres como instrumento.",
  },
  sections: {
    concept: {
      heading: "Concepto",
      paragraphs: [
        "SonicThames enlaza grabaciones de campo con cartografía auditiva formal. Cada entrada es un `Sound` tipado con duración, intervalos y ubicación sobre el Támesis, configurando una cuadrícula acústica intencionada.",
        "El objetivo no es seguir marcadores visuales, sino señales auditivas. Glifos tipo GPS y marcadores pulsantes apuntan a fuentes de sonido. Una niebla de guerra cubre el Támesis hasta que el avatar camina dentro de círculos reveladores — cada ondulación asoma un Londres acústico alternativo.",
      ],
    },
    technical: {
      heading: "Cómo funciona",
      list: [
        "Lienzo Mapbox a pantalla completa con barra lateral translúcida, playlist y filtros persistentes.",
        "RxJS orquesta navegación, reproducción y transiciones `map.flyTo` similares a Find My.",
        "Marcadores Pixi.js que dibujan ondulaciones y puntos con colores por categoría, con radios responsivos al zoom.",
        "Niebla de guerra que registra pares `RevealPoint` (lat/lng/radio) y perfora la niebla con composición `destination-out`. Los revelados persisten en `localStorage` entre sesiones.",
        "Afterimages del avatar y acoplamiento de video de proximidad hacen que el movimiento se lea como un pulso.",
      ],
    },
    poetic: {
      heading: "Deriva Poética Sobre el Támesis",
      paragraphs: [
        "Londres se convierte en instrumento; los puentes tensan el río, la niebla actúa como reverberación y los pulsos GPS laten como corazones bajo la superficie.",
        "El proyecto mantiene un halo místico sutil — confianza calmada con un leve brillo inquietante — de modo que cada ondulación se siente ceremonial, como un ritual suave donde datos, mitos y ciudades convergen.",
      ],
    },
  },
  credits: {
    heading: "Créditos",
    text: "Antonio Telmo — por la idea original del mapa sónico y por el diseño de sonido que inspiró este experimento.",
  },
} as const satisfies SonicThamesCopy
