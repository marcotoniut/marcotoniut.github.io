import type { WidenLocaleStrings } from "@/i18n/helpers"

const sonicThamesEnBase = {
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
    concept: {
      heading: "Concept",
      paragraphs: [
        "SonicThames stitches field recordings into formal sound cartography. Each dataset row is a typed `Sound` entry with durations, intervals, and location cues that treat the Thames as an acoustic grid.",
        "Rather than chasing visual markers, visitors follow audio sources. GPS-esque glyphs and soft pulsing markers point to sound, not sheen. A fog-of-war system drapes the Thames in shadow until your avatar wanders into reveal circles — each ripple an invitation to a different acoustic London.",
      ],
    },
    technical: {
      heading: "How it works",
      list: [
        "Full-viewport Mapbox canvas with translucent sidebar, playlist, and persistent filters.",
        "RxJS subjects choreograph navigation, playback, and `map.flyTo` transitions reminiscent of Find My tracking.",
        "Pixi.js sound markers render ripples and dots using category colors, with zoom-responsive radii.",
        "Fog-of-war canvas records `RevealPoint` lat/lng/radius pairs, erasing fog via `destination-out` compositing. Reveals persist in `localStorage` across sessions.",
        "Avatar afterimages and proximity video docking make movement itself read as a pulse.",
      ],
    },
    poetic: {
      heading: "Poetic Drift Along the Thames",
      paragraphs: [
        "London transforms into an instrument; bridges string the river, fog acts as reverb, and GPS beacons pulse like heartbeats beneath the surface.",
        "The project keeps a subtle mystique — calm confidence with a faint, uncanny glow — so every ripple feels ceremonial, like a soft ritual where data, myth, and cities converge.",
      ],
    },
  },
  credits: {
    heading: "Credits",
    text: "Antonio Telmo — for the original sonic map concept and the recorded sound design that seeded this experiment.",
  },
} as const

export type SonicThamesCopy = WidenLocaleStrings<typeof sonicThamesEnBase>
export const enUk: SonicThamesCopy = sonicThamesEnBase
