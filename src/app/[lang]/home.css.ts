import { createVar, style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontFamilies,
  fontWeights,
  gridSurface,
  media,
  space,
} from "@/styles/theme"

export const main = style({
  width: "100%",
  flex: "0 1 auto",
  maxWidth: "1080px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "auto",
  marginBlock: "auto",
})

export const titleBlock = style({
  ...gridSurface,
  border: `1px solid ${colors.hairline}`,
  padding: `clamp(${space.xl}, 4vw, 56px)`,
  position: "relative",
})

export const corner = style({
  background: colors.background,
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  lineHeight: 1,
  padding: `0 ${space.sm}`,
  position: "absolute",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  "@media": {
    [media.sm]: {
      background: "transparent",
      display: "block",
      padding: 0,
      position: "static",
      whiteSpace: "normal",
    },
  },
})

export const cornerTl = style({
  top: "-0.4em",
  left: space.xl,
  "@media": {
    [media.sm]: {
      marginBottom: space.sm,
    },
  },
})

export const cornerTr = style({
  top: "-0.4em",
  right: space.xl,
  "@media": {
    [media.sm]: {
      marginBottom: space.lg,
    },
  },
})

export const cornerBr = style({
  bottom: "-0.4em",
  right: space.xl,
  color: colors.accent,
  "@media": {
    [media.sm]: {
      marginTop: space.lg,
    },
  },
})

export const title = style({
  margin: 0,
  lineHeight: 1.04,
  letterSpacing: "-0.02em",
  fontSize: "clamp(3rem, 7vw, 5.75rem)",
})

export const range = style({
  color: colors.textMuted,
  fontSize: "1.125rem",
  lineHeight: 1.6,
  margin: `${space.xl} 0 0`,
  maxWidth: "58ch",
})

export const ctas = style({
  display: "flex",
  flexWrap: "wrap",
  gap: `${space.md} ${space.xxl}`,
  marginTop: space.xxl,
})

export const ctaLink = style({
  color: colors.accent,
  fontFamily: fontFamilies.mono,
  fontSize: "0.875rem",
  letterSpacing: "0.06em",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: `color ${durations.normal}`,
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
})

export const bench = style({
  borderLeft: `1px solid ${colors.hairline}`,
  display: "flex",
  flexDirection: "column",
  gap: space.xxl,
  marginTop: `clamp(${space.xxl}, 8vh, 96px)`,
  paddingLeft: `clamp(${space.lg}, 3vw, ${space.xxl})`,
})

export const benchLabel = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.75rem",
  letterSpacing: "0.28em",
  margin: 0,
  textTransform: "uppercase",
})

const channelColor = createVar()

export const panel = style({
  alignItems: "start",
  border: `1px solid ${colors.hairline}`,
  color: "inherit",
  display: "grid",
  gap: space.xl,
  gridTemplateColumns: "1fr auto",
  padding: `${space.xl} clamp(${space.xl}, 3vw, ${space.xxl})`,
  position: "relative",
  textDecoration: "none",
  transition: `border-color ${durations.normal}`,
  "@media": {
    [media.md]: {
      gridTemplateColumns: "1fr",
    },
  },
  selectors: {
    // Connector tapping the panel into the bench spine.
    "&::before": {
      content: "",
      position: "absolute",
      top: space.xxl,
      left: `calc(-1 * clamp(${space.lg}, 3vw, ${space.xxl}) - 1px)`,
      width: `clamp(${space.lg}, 3vw, ${space.xxl})`,
      height: "1px",
      background: colors.hairline,
      transition: `background ${durations.normal}`,
    },
    "&:hover, &:focus-visible": {
      borderColor: channelColor,
    },
    "&:hover::before, &:focus-visible::before": {
      background: channelColor,
    },
  },
})

export const panelCarcinisation = style({
  vars: { [channelColor]: colors.channel.carcinisation },
})

export const panelSonicthames = style({
  vars: { [channelColor]: colors.channel.sonicthames },
})

export const panelBody = style({
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
})

/**
 * Evidence mount, not artwork: hairline frame, slightly de-energised at rest
 * so the bench frame outranks the media; the panel's hover/focus restores it
 * along with the channel border.
 */
export const mediaMount = style({
  border: `1px solid ${colors.hairline}`,
  display: "block",
  lineHeight: 0,
  width: "fit-content",
  transition: `filter ${durations.normal}, border-color ${durations.normal}`,
  filter: "saturate(0.8) brightness(0.92)",
  selectors: {
    [`${panel}:hover &, ${panel}:focus-visible &`]: {
      borderColor: channelColor,
      filter: "none",
    },
  },
})

export const mediaImage = style({
  display: "block",
  height: "auto",
  // Native Game Boy framebuffer scaled by an integer; anything else smears
  // the pixels.
  imageRendering: "pixelated",
  maxWidth: "100%",
  width: "320px",
})

export const designation = style({
  color: channelColor,
  fontFamily: fontFamilies.mono,
  fontSize: "0.75rem",
  fontWeight: "500",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
})

export const panelTitle = style({
  fontFamily: fontFamilies.heading,
  fontSize: "1.75rem",
  fontWeight: fontWeights.heading.bold,
  letterSpacing: "-0.01em",
  lineHeight: 1.15,
  margin: 0,
})

export const pitch = style({
  color: colors.textMuted,
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  margin: 0,
  maxWidth: "56ch",
})
