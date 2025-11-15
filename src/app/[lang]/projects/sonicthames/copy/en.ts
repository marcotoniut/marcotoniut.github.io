export const sonicthamesCopyEn = {
  meta: {
    title: "SonicThames",
    description:
      "Experimental River Thames sound cartography built with React, Mapbox, RxJS, Pixi overlays, and a fog-of-war reveal system.",
  },
  hero: {
    kicker: "Signal Cartography Study",
    title: "SonicThames",
    subtitle:
      "An acoustic cartography of the Thames, blending perception research with playful field exploration.",
    summary:
      "Ambient, minimalist, and slightly uncanny—SonicThames lets tech meet ritual as you listen for invisible echoes and track London as a sonic instrument.",
  },
  sections: {
    introduction: {
      heading: "Signal Cartography Identity",
      paragraphs: [
        "SonicThames stitches field recordings into formal sound cartography. Each dataset row is a typed `Sound` entry (Listen, See, Feel) with durations, optional intervals or timestamps, and location cues that treat the Thames as an acoustic grid.",
        "The interface speaks in cool, measured tones: a full-viewport Mapbox canvas sits behind a translucent, 500px sidebar and playlist, keeping filters, story, and playback settings within reach while the river remains the focus.",
      ],
    },
    purpose: {
      heading: "Purpose: Locate the Sound, Not the Pin",
      paragraphs: [
        "Rather than chasing visual markers, visitors follow audio sources. The experience elevates listening; GPS-esque glyphs, soft pulsing markers, and echoing descriptors point to sound, not sheen.",
        "The fog-of-war logic from `MapFogOverlay` drapes the Thames in shadow until your avatar wanders into reveal circles. Each ripple is an invitation to a different acoustic London—one that resists conventional sightlines and rewards attentive exploration.",
      ],
    },
    technical: {
      heading: "Technical & UX Dimensions",
      paragraphs: [
        "UX-wise, the system defers to calm, rational flows. React routes keep the map pinned, while RxJS subjects choreograph navigation, playback, and filters so the experience never feels abrupt.",
        "The following ingredients keep the map coherent:",
      ],
      list: [
        "MapboxBase + `MainMap.tsx`: a `MapboxMap` instance, bounds, and purple avatar combine with the playlist drawer so the Thames stays at center stage.",
        "Data + React glue: `App.tsx` decodes `data.json` through `data.io.ts`, handing sanitized `Sound` entries to the map while `goTo$` fires `map.flyTo` transitions reminiscent of Find My tracking.",
        "Sound markers: `SoundMarkersCanvas.tsx` renders Pixi.js ripples and dots using category colors from `brandColors.icons`, letting zoom and zoomScale tweak radii so each pulse feels organic.",
        "Fog-of-war & visibility: `MapFogOverlay.tsx` records `RevealPoint` lat/lng/radius pairs, uses `haversineDistanceMeters` to size reveals, and punches holes with `destination-out` while persisting arcs in `localStorage`.",
        "Tracker + animation: `Playlist.tsx` ships a GPS icon to re-center searches, `ProximityVideo.tsx` softly docks preview frames, and `UserPositionCanvas.tsx` paints afterimages so movement itself reads as a pulse.",
      ],
    },
    scientific: {
      heading: "Scientific Framing",
      paragraphs: [
        "Sound perception becomes a spatial-cognition experiment. Each reveal point persists across sessions, the radius governed by geographic distance, and fog opacity tuned by animation frame loops so exposure feels measured.",
        "The interface replicates lab stimuli: a `destination-out` canvas erases fog only where the avatar has been, and reveals depend on `RevealPoint` history, letting users encode a mental map of the Thames’ acoustic topology.",
      ],
    },
    poetic: {
      heading: "Poetic Drift Along the Thames",
      paragraphs: [
        "London transforms into an instrument; bridges string the river, fog acts as reverb, and GPS beacons pulse like heartbeats beneath the surface. Echoes travel under the map, urging listeners to lean close and trust sound as guide.",
        "The project keeps a subtle mystique—calm confidence with a faint, uncanny glow—so every ripple feels ceremonial, like a soft ritual where data, myth, and cities converge.",
      ],
    },
    metaDesign: {
      heading: "Meta Design Commentary",
      paragraphs: [
        "The design mirrors SonicThames’ palette: Inter for headings, the same 0.85 opacity fog, `#faf2f4` backgrounds, and `#281220` for text, plus `#2196f3` action caps and neon marker colors pulled from the original tokens.",
        "Spacing replicates the repo’s 4, 8, 12, 16, 24, 32px rhythm, the 500px sidebar width, and the generous 16px gutters that keep the layout minimal, ambient, and slightly uncanny.",
      ],
    },
  },
  credits: {
    heading: "Credits",
    text: "Antonio Telmo — for the original sonic map concept and the recorded sound design that seeded this experiment.",
  },
  cv: {
    heading: "Portfolio & CV Adaptability",
    line: "Experimental Project / Extra: SonicThames – acoustic River Thames atlas with React, Mapbox, RxJS, Pixi, and fog-of-war reveals.",
    bullets: [
      "Rendered pulsing SoundMarkersCanvas + UserPositionCanvas overlays so soft ripples and afterimages stand in for spatialized audio lore.",
      "Authored MapFogOverlay persistence with RevealPoint metadata, haversineDistanceMeters, and localStorage so exploration becomes a measured cognitive task.",
      "Orchestrated playlist-driven RxJS `goTo$`/`play$` flows, GPS-inspired buttons, and proximity video docking to mirror a Find My–like tracker.",
    ],
  },
} as const

export type SonicThamesCopy = typeof sonicthamesCopyEn
