import { style } from "@vanilla-extract/css"
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lightThemeClass,
  lineHeights,
  space,
} from "@/styles/theme"

const waterBlue = "#28f0ff"
const sonicPalette = {
  dark: {
    background: "#030307",
    surface: "#0d0f16",
    text: "#f3f7ff",
    textMuted: "#92c7e6",
    border: "#1d1f27",
    accentSoft: "rgba(40, 240, 255, 0.1)",
  },
  light: {
    background: "#ffffff",
    surface: "#f4f7ff",
    text: "#050609",
    textMuted: "#4a4d59",
    border: "#dfe2ef",
    accentSoft: "rgba(40, 240, 255, 0.12)",
  },
}

const interStack =
  "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

const listAccent = {
  selectors: {
    "&::marker": {
      color: waterBlue,
    },
  },
}

const heroSurfaceSelectors = {
  selectors: {
    [`.${lightThemeClass} &`]: {
      background: sonicPalette.light.surface,
      border: `1px solid ${sonicPalette.light.border}`,
    },
  },
}

const sectionSurfaceSelectors = {
  selectors: {
    [`.${lightThemeClass} &`]: {
      background: sonicPalette.light.surface,
      border: `1px solid ${sonicPalette.light.border}`,
    },
  },
}

const sectionShell = {
  width: "100%",
  maxWidth: "1080px",
  margin: "0 auto",
  boxSizing: "border-box" as const,
}

export const page = style({
  background: sonicPalette.dark.background,
  color: sonicPalette.dark.text,
  selectors: {
    [`.${lightThemeClass} &`]: {
      background: sonicPalette.light.background,
      color: sonicPalette.light.text,
    },
  },
})

export const headerWrapper = style({
  ...sectionShell,
  paddingBlock: space.small,
})

export const bodyWrapper = style({
  ...sectionShell,
  paddingBlock: space.large,
})

export const footerWrapper = style({
  ...sectionShell,
  paddingBlock: space.small,
})

export const footerOverride = style({
  borderTopColor: sonicPalette.dark.border,
  color: sonicPalette.dark.textMuted,
  selectors: {
    [`.${lightThemeClass} &`]: {
      borderTopColor: sonicPalette.light.border,
      color: sonicPalette.light.textMuted,
    },
  },
})

export const main = style({
  width: "100%",
})

export const content = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: space.large,
})

export const hero = style({
  background: sonicPalette.dark.surface,
  border: `1px solid ${sonicPalette.dark.border}`,
  padding: space.large,
  display: "flex",
  flexDirection: "column",
  gap: space.small,
  ...heroSurfaceSelectors,
})

export const heroKicker = style({
  fontFamily: fontFamilies.mono,
  letterSpacing: letterSpacing.bodySm,
  fontSize: fontSizes.bodySm,
  textTransform: "uppercase",
  color: waterBlue,
  margin: 0,
})

export const heroTitle = style({
  fontFamily: interStack,
  fontSize: "clamp(2.8rem, 5vw, 4rem)",
  margin: 0,
  letterSpacing: letterSpacing.h1,
  lineHeight: lineHeights.h1,
  fontWeight: fontWeights.heading.bold,
})

export const heroSubtitle = style({
  fontSize: fontSizes.small,
  margin: 0,
  lineHeight: lineHeights.body,
  letterSpacing: letterSpacing.body,
  color: sonicPalette.dark.textMuted,
  selectors: {
    [`.${lightThemeClass} &`]: {
      color: sonicPalette.light.textMuted,
    },
  },
})

export const heroSummary = style({
  margin: 0,
  lineHeight: lineHeights.body,
  fontSize: fontSizes.body,
  color: sonicPalette.dark.textMuted,
  selectors: {
    [`.${lightThemeClass} &`]: {
      color: sonicPalette.light.textMuted,
    },
  },
})

export const accentLine = style({
  height: "2px",
  width: "88px",
  background: waterBlue,
  alignSelf: "flex-start",
})

export const section = style({
  background: sonicPalette.dark.surface,
  border: `1px solid ${sonicPalette.dark.border}`,
  padding: space.large,
  display: "flex",
  flexDirection: "column",
  gap: space.small,
  ...sectionSurfaceSelectors,
})

export const sectionHeading = style({
  margin: 0,
  fontFamily: interStack,
  fontSize: fontSizes.xl,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  fontWeight: fontWeights.heading.regular,
})

export const sectionParagraph = style({
  margin: 0,
  lineHeight: lineHeights.body,
  fontSize: fontSizes.body,
})

export const sectionList = style({
  margin: `${space.small} 0 0`,
  paddingLeft: space.xl,
  listStyle: "disc",
})

export const sectionListItem = style({
  margin: `${space.xs} 0`,
  lineHeight: lineHeights.body,
  fontSize: fontSizes.body,
  color: sonicPalette.dark.text,
  ...listAccent,
  selectors: {
    [`.${lightThemeClass} &`]: {
      color: sonicPalette.light.text,
    },
  },
})

export const sectionSubtle = style({
  fontSize: fontSizes.bodySm,
  marginTop: space.small,
  color: sonicPalette.dark.textMuted,
  selectors: {
    [`.${lightThemeClass} &`]: {
      color: sonicPalette.light.textMuted,
    },
  },
})

export const creditsBox = style({
  border: `1px solid ${sonicPalette.dark.border}`,
  padding: space.large,
  background: sonicPalette.dark.surface,
  display: "flex",
  flexDirection: "column",
  gap: space.xs,
  ...sectionSurfaceSelectors,
})

export const creditsHeading = style({
  margin: 0,
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.large,
  fontWeight: fontWeights.heading.bold,
})

export const creditsText = style({
  margin: 0,
  lineHeight: lineHeights.body,
})

export const cvBlock = style({
  border: `1px solid ${waterBlue}`,
  padding: space.large,
  background: sonicPalette.dark.accentSoft ?? sonicPalette.dark.surface,
  display: "flex",
  flexDirection: "column",
  gap: space.small,
  selectors: {
    [`.${lightThemeClass} &`]: {
      background: sonicPalette.light.accentSoft,
    },
  },
})

export const cvLine = style({
  margin: 0,
  fontFamily: fontFamilies.mono,
  fontSize: fontSizes.bodySm,
  color: sonicPalette.dark.text,
  selectors: {
    [`.${lightThemeClass} &`]: {
      color: sonicPalette.light.text,
    },
  },
})

export const cvList = style({
  margin: `${space.small} 0 0`,
  paddingLeft: space.xl,
  listStyle: "disc",
})

export const cvListItem = style({
  margin: `${space.xs} 0`,
  lineHeight: lineHeights.body,
  fontSize: fontSizes.body,
  color: sonicPalette.dark.text,
  ...listAccent,
  selectors: {
    [`.${lightThemeClass} &`]: {
      color: sonicPalette.light.text,
    },
  },
})
