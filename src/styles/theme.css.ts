import { createTheme, createThemeContract } from "@vanilla-extract/css"

const themeContract = createThemeContract({
  color: {
    background: null,
    surface: null,
    surfaceElevated: null,
    border: null,
    borderMuted: null,
    textPrimary: null,
    textMuted: null,
    accent: null,
    accentSoft: null,
    accentContrast: null,
    focusRing: null,
    hairline: null,
    // Graph-paper grid line; transparent in dark so the same components render
    // both themes without conditionals.
    grid: null,
    channel: {
      carcinisation: null,
      sonicthames: null,
    },
    buyMeACoffeeBackground: null,
    buyMeACoffeeText: null,
    buyMeACoffeeAccent: null,
    gb: {
      dark: null,
      mid: null,
      lite: null,
      pale: null,
    },
  },
  space: {
    none: null,
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    pill: null,
  },
  shadow: {
    subtle: null,
    soft: null,
    glow: null,
  },
  font: {
    family: {
      heading: null,
      body: null,
      mono: null,
    },
    size: {
      h1: null,
      h2: null,
      h3: null,
      body: null,
      bodyLg: null,
      bodySm: null,
      ui: null,
    },
    lineHeight: {
      h1: null,
      h2: null,
      h3: null,
      body: null,
      bodySm: null,
      ui: null,
    },
    letterSpacing: {
      h1: null,
      h2: null,
      h3: null,
      body: null,
      bodySm: null,
    },
    weight: {
      heading: {
        regular: null,
        bold: null,
      },
      body: {
        regular: null,
        medium: null,
        bold: null,
      },
      ui: {
        medium: null,
      },
    },
  },
})

const sharedSpace = {
  none: "0",
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "32px",
} as const

const sharedRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  pill: "999px",
} as const

const sharedShadow = {
  subtle: "0 1px 2px rgba(0, 0, 0, 0.14)",
  soft: "0 12px 30px rgba(15, 23, 42, 0.12)",
  glow: "0 0 0 1px rgba(11, 122, 92, 0.45)",
} as const

const headingStack =
  '"Space Grotesk", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
const bodyStack =
  '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
const monoStack =
  '"IBM Plex Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace'

const sharedFont = {
  family: {
    heading: headingStack,
    body: bodyStack,
    mono: monoStack,
  },
  size: {
    h1: "clamp(2.5rem, 5vw, 4rem)",
    h2: "clamp(2rem, 3.5vw, 3rem)",
    h3: "1.75rem",
    body: "1rem",
    bodyLg: "1.2rem",
    bodySm: "0.85rem",
    ui: "0.9375rem",
  },
  lineHeight: {
    h1: "1.05",
    h2: "1.12",
    h3: "1.18",
    body: "1.55",
    bodySm: "1.5",
    ui: "1.5",
  },
  letterSpacing: {
    h1: "-0.01em",
    h2: "-0.01em",
    h3: "-0.005em",
    body: "0em",
    bodySm: "0em",
  },
  weight: {
    heading: {
      regular: "600",
      bold: "700",
    },
    body: {
      regular: "400",
      medium: "500",
      bold: "600",
    },
    ui: {
      medium: "500",
    },
  },
} as const

// Warm paper, not inverted dark: the ground is paper (#fbfaf7 reads white at
// arm's length, warm only against a cold reference), the ink is neutral-black
// with an imperceptible green bias so it cannot drift brown on the warm
// ground, and the neutrals are derived on that cast. Light is the notebook to
// the dark theme's powered bench: same person, two environments.
const lightThemeColors = {
  background: "#fbfaf7",
  surface: "#ffffff",
  surfaceElevated: "#f2f1ea",
  border: "#d9d7cd",
  borderMuted: "#e8e6dd",
  textPrimary: "#1a1b1a",
  textMuted: "#5d635d",
  // Deep mint, not the dark theme's phosphor: #6fe0a0 is 3.2:1 on paper and
  // fails AA as text; #0b7a5c reads as printing-ink green and holds 5:1.
  accent: "#0b7a5c",
  accentSoft: "#0f9d77",
  accentContrast: "#ffffff",
  focusRing: "rgba(11, 122, 92, 0.4)",
  hairline: "rgba(26, 27, 26, 0.22)",
  grid: "rgba(26, 27, 26, 0.025)",
  channel: {
    carcinisation: "#8a5a1e",
    sonicthames: "#0b6e8f",
  },
} as const

// Green-black ramp, not blue-black: the ground carries a temperature the
// accent depends on. #6fe0a0 on this ground reads as powered phosphor; the
// same value on a blue ground reads as a generic success-green. Neutrals are
// derived on the green cast because pure or blue-cast greys drift lavender
// against it (simultaneous contrast). Locked test: with the accent removed,
// the page must still read near-black, never "a green website".
const darkThemeColors = {
  background: "#0c120e",
  surface: "#131a15",
  surfaceElevated: "#171f1a",
  border: "#24302a",
  borderMuted: "#1a211c",
  textPrimary: "#eff3ee",
  textMuted: "#9aa39c",
  accent: "#6fe0a0",
  accentSoft: "#3faf78",
  accentContrast: "#06100a",
  focusRing: "rgba(111, 224, 160, 0.45)",
  hairline: "rgba(154, 163, 156, 0.28)",
  grid: "transparent",
  channel: {
    carcinisation: "#e8c8a0",
    sonicthames: "#4cc3e8",
  },
} as const

const gbPalette = {
  dark: "#34102f",
  mid: "#743015",
  lite: "#c69052",
  pale: "#fbe1a8",
} as const

const buyMeACoffeeYellow = "#ffdd00"

export const lightThemeClass = createTheme(themeContract, {
  color: {
    ...lightThemeColors,
    buyMeACoffeeBackground: lightThemeColors.surfaceElevated,
    buyMeACoffeeText: lightThemeColors.textPrimary,
    buyMeACoffeeAccent: buyMeACoffeeYellow,
    gb: gbPalette,
  },
  space: sharedSpace,
  radius: sharedRadius,
  shadow: sharedShadow,
  font: sharedFont,
})

export const darkThemeClass = createTheme(themeContract, {
  color: {
    ...darkThemeColors,
    buyMeACoffeeBackground: darkThemeColors.textPrimary,
    buyMeACoffeeText: darkThemeColors.surface,
    buyMeACoffeeAccent: buyMeACoffeeYellow,
    gb: gbPalette,
  },
  space: sharedSpace,
  radius: sharedRadius,
  shadow: {
    subtle: "0 1px 2px rgba(0, 0, 0, 0.45)",
    soft: "0 6px 18px rgba(5, 10, 7, 0.45)",
    glow: "0 0 0 1px rgba(111, 224, 160, 0.35)",
  },
  font: sharedFont,
})

export const themeVars = themeContract
