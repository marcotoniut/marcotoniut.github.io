import { style } from "@vanilla-extract/css"
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lightThemeClass,
  lineHeights,
  space,
  themeVars,
} from "@/styles/theme"

const channel = themeVars.color.channel.sonicthames
const sonicPalette = {
  dark: {
    background: "#030307",
    surface: "#0d0f16",
    text: "#f3f7ff",
    textMuted: "#92c7e6",
    border: "#1d1f27",
    accentSoft: "rgba(76, 195, 232, 0.1)",
  },
  light: {
    background: "#ffffff",
    surface: "#f4f7ff",
    text: "#050609",
    textMuted: "#4a4d59",
    border: "#dfe2ef",
    accentSoft: "rgba(11, 110, 143, 0.1)",
  },
}

const listAccent = {
  selectors: {
    "&::marker": {
      color: channel,
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
  backgroundImage:
    "radial-gradient(ellipse at 50% 0%, rgba(76, 195, 232, 0.05) 0%, transparent 60%)",
  color: sonicPalette.dark.text,
  selectors: {
    [`.${lightThemeClass} &`]: {
      background: sonicPalette.light.background,
      backgroundImage:
        "radial-gradient(ellipse at 50% 0%, rgba(11, 110, 143, 0.04) 0%, transparent 60%)",
      color: sonicPalette.light.text,
    },
  },
})

export const headerWrapper = style({
  ...sectionShell,
  paddingBlock: space.sm,
})

export const bodyWrapper = style({
  ...sectionShell,
  paddingBlock: space.lg,
})

export const footerWrapper = style({
  ...sectionShell,
  paddingBlock: space.sm,
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
  gap: space.lg,
})

export const hero = style({
  background: `radial-gradient(ellipse at 30% 50%, rgba(11, 110, 143, 0.04), transparent 70%), ${sonicPalette.dark.surface}`,
  border: `1px solid ${sonicPalette.dark.border}`,
  padding: space.xxl,
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
  selectors: {
    [`.${lightThemeClass} &`]: {
      background: sonicPalette.light.surface,
      border: `1px solid ${sonicPalette.light.border}`,
    },
  },
})

export const heroKicker = style({
  fontFamily: fontFamilies.mono,
  letterSpacing: letterSpacing.bodySm,
  fontSize: fontSizes.bodySm,
  textTransform: "uppercase",
  color: channel,
  margin: 0,
})

export const heroTitle = style({
  fontFamily: fontFamilies.heading,
  fontSize: "clamp(2.8rem, 5vw, 4rem)",
  margin: 0,
  letterSpacing: letterSpacing.h1,
  lineHeight: lineHeights.h1,
  fontWeight: fontWeights.heading.bold,
})

export const heroSubtitle = style({
  fontSize: fontSizes.bodySm,
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
  background: channel,
  alignSelf: "flex-start",
})

export const sectionExposition = style({
  background: "transparent",
  border: "none",
  padding: `${space.lg} 0`,
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
  maxWidth: "70ch",
})

export const sectionTechnical = style({
  background: "transparent",
  border: "none",
  borderLeft: `3px solid ${channel}`,
  padding: space.lg,
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
})

// Pull-quote, not a full-width italic block: the audit found the poetic
// section reading as a styling accident at 120ch.
export const sectionAtmospheric = style({
  background: "transparent",
  border: "none",
  borderLeft: `2px solid ${channel}`,
  padding: `${space.md} 0 ${space.md} ${space.xl}`,
  margin: `${space.xl} 0 0`,
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
  fontStyle: "italic",
  fontSize: "1.125rem",
  lineHeight: "1.7",
  maxWidth: "58ch",
})

export const sectionHeadingExposition = style({
  margin: 0,
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.bodyLg,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  fontWeight: fontWeights.heading.regular,
  color: channel,
})

export const sectionHeadingTechnical = style({
  margin: 0,
  fontFamily: fontFamilies.mono,
  fontSize: fontSizes.bodySm,
  letterSpacing: "0.15em",
  lineHeight: lineHeights.ui,
  fontWeight: fontWeights.body.medium,
  textTransform: "uppercase",
  color: channel,
})

export const sectionHeadingAtmospheric = style({
  margin: 0,
  fontFamily: fontFamilies.heading,
  fontSize: "1.75rem",
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  fontWeight: fontWeights.heading.regular,
  fontStyle: "normal",
})

export const sectionParagraph = style({
  margin: 0,
  lineHeight: lineHeights.body,
  fontSize: fontSizes.body,
  maxWidth: "70ch",
})

export const metaRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: `${space.sm} ${space.xxl}`,
  marginTop: space.sm,
})

export const metaItem = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xxs,
})

export const metaLabel = style({
  color: channel,
  fontFamily: fontFamilies.mono,
  fontSize: "0.6875rem",
  fontWeight: "500",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
})

export const metaValue = style({
  fontSize: fontSizes.bodySm,
})

export const sectionList = style({
  margin: `${space.sm} 0 0`,
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

export const creditsHeading = style({
  margin: 0,
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.ui,
  fontWeight: fontWeights.heading.bold,
})

export const creditsText = style({
  margin: 0,
  lineHeight: lineHeights.body,
})
