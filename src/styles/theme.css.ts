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
  glow: "0 0 0 1px rgba(86, 243, 201, 0.45)",
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
    body: "0.95rem",
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

export const lightThemeClass = createTheme(themeContract, {
  color: {
    background: "#f6f8fb",
    surface: "#ffffff",
    surfaceElevated: "#f1f4fa",
    border: "#d4d9e4",
    borderMuted: "#e3e7f1",
    textPrimary: "#1f2330",
    textMuted: "#5a6072",
    accent: "#0d6efd",
    accentSoft: "#5ea8ff",
    accentContrast: "#ffffff",
    focusRing: "rgba(13, 110, 253, 0.35)",
  },
  space: sharedSpace,
  radius: sharedRadius,
  shadow: sharedShadow,
  font: sharedFont,
})

export const darkThemeClass = createTheme(themeContract, {
  color: {
    background: "#0b0d12",
    surface: "#12141c",
    surfaceElevated: "#161922",
    border: "#232737",
    borderMuted: "#1b1f2d",
    textPrimary: "#f5f6fa",
    textMuted: "#a7adc6",
    accent: "#56f3c9",
    accentSoft: "#2ab69a",
    accentContrast: "#050607",
    focusRing: "rgba(86, 243, 201, 0.45)",
  },
  space: sharedSpace,
  radius: sharedRadius,
  shadow: {
    subtle: "0 1px 2px rgba(0, 0, 0, 0.45)",
    soft: "0 6px 18px rgba(5, 8, 15, 0.45)",
    glow: "0 0 0 1px rgba(86, 243, 201, 0.35)",
  },
  font: sharedFont,
})

export const themeVars = themeContract
