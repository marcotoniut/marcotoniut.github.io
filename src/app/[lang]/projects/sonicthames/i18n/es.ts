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
    introduction: {
      heading: "Identidad de Cartografía Sonora",
      paragraphs: [
        "SonicThames enlaza grabaciones de campo con investigación de cartografía auditiva. Cada entrada es un `Sound` tipado (Listen, See, Feel) con duración, intervalos opcionales o marcas temporales y una ubicación sobre el Támesis que configura una cuadrícula acústica intencionada.",
        "El interfaz es sereno: un lienzo Mapbox a pantalla completa convive con una barra lateral translúcida de 500px, filtros persistentes y una playlist que mantienen la historia cerca mientras el río se queda como foco central.",
      ],
    },
    purpose: {
      heading: "Propósito: Ubicar el sonido, no el pin",
      paragraphs: [
        "El objetivo no es seguir marcadores visuales, sino señales auditivas. Glifos tipo GPS, marcadores pulsantes y descripciones evocadoras apuntan a fuentes de sonido antes que a edificios.",
        "La niebla de `MapFogOverlay` cubre el Támesis hasta que el avatar camina dentro de círculos reveladores. Cada ondulación asoma un Londres acústico alternativo que resiste las líneas de vista habituales y premia la escucha atenta.",
      ],
    },
    technical: {
      heading: "Dimensiones Técnicas y de UX",
      paragraphs: [
        "Desde la experiencia, el sistema prioriza flujos racionales. React y RxJS mantienen el mapa en calma mientras la navegación, la reproducción y los filtros se orquestan con suavidad.",
        "Esta lógica concreta mantiene la coherencia:",
      ],
      list: [
        "MapboxBase + `MainMap.tsx`: una instancia de `MapboxMap`, límites y avatar púrpura se combinan con el cajón playlist para que el Támesis siga siendo el centro de atención.",
        "Data + React: `App.tsx` decodifica `data.json` con `data.io.ts` y entrega entradas `Sound` sanas al mapa, mientras `goTo$` dispara `map.flyTo` en un movimiento parecido a Find My.",
        "Sound markers: `SoundMarkersCanvas.tsx` dibuja ondulaciones y puntos con Pixi.js usando los colores de `brandColors.icons`, ajustando radios según zoom y `zoomScale`.",
        "Fog-of-war y visibilidad: `MapFogOverlay.tsx` guarda pares `RevealPoint` (lat/lng/radio), usa `haversineDistanceMeters` para dimensionar revelados y toca `destination-out` para perforar la niebla, persistiendo en `localStorage`.",
        "Tracker + animación: `Playlist.tsx` ofrece un botón con ícono GPS para recentrar, `ProximityVideo.tsx` acopla vistas previas, y `UserPositionCanvas.tsx` pinta afterimages para que moverse se sienta como un pulso vivo.",
      ],
    },
    scientific: {
      heading: "Marco Científico",
      paragraphs: [
        "La percepción sonora se trata como experimento de cognición espacial. Cada punto revelado persiste entre sesiones, su radio está gobernado por distancias geográficas y la opacidad de la niebla sigue bucles de animación para que la exposición sea medida.",
        "La interfaz emula estímulos de laboratorio: un lienzo con `destination-out` elimina la niebla solo donde el avatar pasó y las revelaciones dependen de la historia `RevealPoint` para que el usuario construya un mapa mental del Támesis acústico.",
      ],
    },
    poetic: {
      heading: "Deriva Poética Sobre el Támesis",
      paragraphs: [
        "Londres se convierte en instrumento; los puentes tensan el río, la niebla actúa como reverberación y los pulsos GPS laten como corazones bajo la superficie. Ecos viajan bajo el mapa, invitando a acercarse y dejar que el sonido guíe.",
        "El proyecto mantiene un halo místico sutil: confianza calmada con un leve brillo inquietante, de modo que cada ondulación se siente ceremonial, como un ritual suave donde datos, mitos y ciudades convergen.",
      ],
    },
    metaDesign: {
      heading: "Comentario Meta sobre Diseño",
      paragraphs: [
        "El diseño refleja la paleta original de SonicThames: Inter en los encabezados, la misma niebla al 85% de opacidad, fondos `#faf2f4`, texto `#281220`, acentos `#2196f3` y los colores neón de los marcadores del repo.",
        "El espaciado replica el ritmo 4/8/12/16/24/32px, el ancho fijo de la barra lateral de 500px y las generosas canaletas de 16px que mantienen la estética minimalista, ambiental y levemente extraña.",
      ],
    },
  },
  credits: {
    heading: "Créditos",
    text: "Antonio Telmo — por la idea original del mapa sónico y por el diseño de sonido que inspiró este experimento.",
  },
  cv: {
    heading: "Adaptación para Portafolio y CV",
    line: "Proyecto Experimental / Extra: SonicThames – atlas acústico del Támesis con React, Mapbox, RxJS, Pixi y revelados de niebla.",
    bullets: [
      "Rendericé capas SoundMarkersCanvas + UserPositionCanvas con Pixi.js para que ondulaciones y afterimages representen el lore espacial.",
      "Escribí la persistencia de MapFogOverlay con RevealPoint, haversineDistanceMeters y localStorage para que la exploración sea una tarea cognitiva medida.",
      "Orquesté los flujos RxJS `goTo$`/`play$`, controles tipo GPS y el acoplamiento de video de proximidad para reproducir una experiencia similar a Find My.",
    ],
  },
} as const satisfies SonicThamesCopy
