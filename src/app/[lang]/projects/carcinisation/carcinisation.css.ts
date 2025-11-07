import { createVar, globalStyle, style } from "@vanilla-extract/css"
import * as headerStyles from "@/components/Header.css"
import {
  colors,
  darkThemeClass,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
} from "@/styles/theme"
import { withAlpha } from "@/utils/color"

const ICON_SIZE = 45
const BUTTON_PRESS_TRANSLATE = "translateY(-2px)"
const MEDIA_QUERY_MAX_WIDTH = "(max-width: 480px)"

/* ---------- Theme vars (trimmed) ---------- */
const gbThemeVars = {
  background: createVar(),
  surface: createVar(),
  surfaceRaised: createVar(),
  text: createVar(),
  textMuted: createVar(),
  heading: createVar(),
  border: createVar(),
  borderMuted: createVar(),
  accent: createVar(),
  accentSoft: createVar(),
  accentContrast: createVar(),
  screenshotBg: createVar(),
  tagBg: createVar(),
} as const

type GbPalette = Record<keyof typeof gbThemeVars, string>
const mapPalette = (p: GbPalette) => ({
  [gbThemeVars.background]: p.background,
  [gbThemeVars.surface]: p.surface,
  [gbThemeVars.surfaceRaised]: p.surfaceRaised,
  [gbThemeVars.text]: p.text,
  [gbThemeVars.textMuted]: p.textMuted,
  [gbThemeVars.heading]: p.heading,
  [gbThemeVars.border]: p.border,
  [gbThemeVars.borderMuted]: p.borderMuted,
  [gbThemeVars.accent]: p.accent,
  [gbThemeVars.accentSoft]: p.accentSoft,
  [gbThemeVars.accentContrast]: p.accentContrast,
  [gbThemeVars.screenshotBg]: p.screenshotBg,
  [gbThemeVars.tagBg]: p.tagBg,
})

/* ---------- Palettes (unchanged logic, safe features only) ---------- */
const lightPalette: GbPalette = {
  background: `color-mix(in srgb, ${colors.gb.pale} 94%, ${colors.surface})`,
  surface: `color-mix(in srgb, ${colors.gb.pale} 90%, ${colors.surfaceElevated})`,
  surfaceRaised: `color-mix(in srgb, ${colors.gb.pale} 88%, ${colors.surface})`,
  text: colors.gb.dark,
  textMuted: `color-mix(in srgb, ${colors.gb.mid} 72%, ${colors.textMuted})`,
  heading: `color-mix(in srgb, ${colors.gb.dark} 92%, ${colors.text})`,
  border: `color-mix(in srgb, ${colors.gb.mid} 85%, ${colors.border})`,
  borderMuted: `color-mix(in srgb, ${colors.gb.mid} 55%, ${colors.borderMuted})`,
  accent: colors.gb.mid,
  accentSoft: `color-mix(in srgb, ${colors.gb.lite} 80%, ${colors.accent})`,
  accentContrast: colors.gb.pale,
  screenshotBg: `color-mix(in srgb, ${colors.gb.pale} 78%, ${colors.surfaceElevated})`,
  tagBg: withAlpha(colors.gb.lite, 0.4),
}

const darkPalette: GbPalette = {
  background: `color-mix(in srgb, ${colors.gb.dark} 88%, ${colors.background})`,
  surface: `color-mix(in srgb, ${colors.gb.dark} 78%, ${colors.gb.mid})`,
  surfaceRaised: `color-mix(in srgb, ${colors.gb.dark} 70%, ${colors.gb.mid})`,
  text: `color-mix(in srgb, ${colors.gb.pale} 88%, ${colors.text})`,
  textMuted: `color-mix(in srgb, ${colors.gb.lite} 65%, ${colors.textMuted})`,
  heading: `color-mix(in srgb, ${colors.gb.pale} 92%, ${colors.text})`,
  border: `color-mix(in srgb, ${colors.gb.mid} 90%, ${colors.border})`,
  borderMuted: `color-mix(in srgb, ${colors.gb.dark} 70%, ${colors.borderMuted})`,
  accent: `color-mix(in srgb, ${colors.gb.lite} 78%, ${colors.gb.mid})`,
  accentSoft: `color-mix(in srgb, ${colors.gb.lite} 68%, ${colors.accent})`,
  accentContrast: `color-mix(in srgb, ${colors.gb.pale} 85%, ${colors.text})`,
  screenshotBg: `color-mix(in srgb, ${colors.gb.dark} 58%, ${colors.gb.mid})`,
  tagBg: withAlpha(
    `color-mix(in srgb, ${colors.gb.lite} 60%, ${colors.gb.dark})`,
    0.45,
  ),
}

const lightVars = mapPalette(lightPalette)
const darkVars = mapPalette(darkPalette)

/* ---------- Small bases ---------- */
const panelSurfaceBase = style({
  background: gbThemeVars.surface,
  border: `1px solid ${gbThemeVars.border}`,
  borderRadius: radii.md,
  boxShadow: shadows.subtle,
  color: gbThemeVars.text,
  padding: space.large,
})

const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: space.xs,
  paddingBlock: space.xs,
  paddingInline: space.large,
  borderRadius: radii.pill,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  fontWeight: fontWeights.body.bold,
  textDecoration: "none",
  cursor: "pointer",
  transition: "transform 120ms ease, box-shadow 120ms ease, filter 120ms ease",
})

export const gbBackdrop = style({
  backgroundColor: gbThemeVars.background,
  backgroundImage: `
    linear-gradient(0deg, ${withAlpha(gbThemeVars.borderMuted, 0.35)} 1px, transparent 1px),
    linear-gradient(90deg, ${withAlpha(gbThemeVars.border, 0.2)} 1px, transparent 1px),
    linear-gradient(0deg, ${withAlpha(gbThemeVars.textMuted, 0.16)} 1px, transparent 3px)
  `,
  backgroundSize: "12px 12px, 12px 12px, 12px 12px",
})

/* ---------- Layout ---------- */
export const pageShell = style({
  vars: lightVars,
  color: gbThemeVars.text,
  minHeight: "100svh",
  width: "100%",
  selectors: {
    [`.${darkThemeClass} &`]: { vars: darkVars },
  },
})

export const pageShellContent = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xxxl,
  margin: "0 auto",
  maxWidth: "1080px",
  padding: space.large,
  width: "100%",
})

export const pageHeader = style({
  background: gbThemeVars.surfaceRaised,
  border: `1px solid ${gbThemeVars.border}`,
  borderRadius: radii.md,
  padding: `${space.small} ${space.large}`,
})

globalStyle(`:where(${pageHeader}) ${headerStyles.header}`, {
  color: gbThemeVars.heading,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.backLink}`, {
  color: gbThemeVars.heading,
  fontWeight: fontWeights.body.bold,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.backLink}:hover`, {
  color: gbThemeVars.accent,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.controlBar}`, {
  gap: space.small,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.selectTrigger}`, {
  background: gbThemeVars.surface,
  borderColor: gbThemeVars.border,
  boxShadow: `0 2px 0 0 ${withAlpha(gbThemeVars.border, 0.4)}`,
  color: gbThemeVars.heading,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.selectIcon}`, {
  color: gbThemeVars.textMuted,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.selectContent}`, {
  background: gbThemeVars.surface,
  borderColor: gbThemeVars.border,
  boxShadow: `0 8px 18px ${withAlpha(gbThemeVars.border, 0.35)}`,
})
globalStyle(`:where(${pageHeader}) ${headerStyles.selectItem}`, {
  color: gbThemeVars.text,
})
globalStyle(
  `:where(${pageHeader}) ${headerStyles.selectItem}[data-highlighted]`,
  { backgroundColor: gbThemeVars.surfaceRaised, color: gbThemeVars.accent },
)
globalStyle(
  `:where(${pageHeader}) ${headerStyles.selectItem}[data-state="checked"]`,
  {
    backgroundColor: gbThemeVars.surfaceRaised,
    color: gbThemeVars.accent,
    boxShadow: `inset 0 0 0 1px ${withAlpha(gbThemeVars.accent, 0.5)}`,
  },
)

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xxxl,
  margin: "0 auto",
  maxWidth: "900px",
  width: "100%",
})

/* ---------- Hero / content ---------- */
export const hero = style([
  panelSurfaceBase,
  {
    background: gbThemeVars.surfaceRaised,
    gap: space.large,
    padding: space.xxxl,
    "@media": {
      "(max-width: 600px)": {
        padding: space.large,
      },
    },
  },
])

export const kicker = style({
  color: gbThemeVars.heading,
  fontSize: fontSizes.body,
  letterSpacing: "0.35em",
  margin: 0,
  textTransform: "uppercase",
  "@media": {
    [MEDIA_QUERY_MAX_WIDTH]: {
      fontSize: fontSizes.bodySm,
      letterSpacing: "0.2em",
    },
  },
})

export const title = style({
  color: gbThemeVars.heading,
  fontSize: "clamp(1.5rem, 5vw, 3rem)",
  lineHeight: 1.1,
  margin: 0,
  "@media": {
    [MEDIA_QUERY_MAX_WIDTH]: {
      fontSize: "1.2rem",
      lineHeight: 1.04,
    },
  },
})

export const subtitle = style({
  color: gbThemeVars.heading,
  fontSize: fontSizes.body,
  letterSpacing: "0.15em",
  marginTop: space.xs,
  textTransform: "uppercase",
  "@media": {
    [MEDIA_QUERY_MAX_WIDTH]: {
      fontSize: fontSizes.bodySm,
    },
  },
})

export const description = style({
  color: gbThemeVars.text,
  fontSize: fontSizes.body,
})

export const ctaRow = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: space.small,
})

export const button = style([
  buttonBase,
  {
    display: "flex",
    gap: space.small,
    background: gbThemeVars.accentSoft,
    border: `1px solid ${gbThemeVars.accent}`,
    boxShadow: `0 4px 0 0 ${gbThemeVars.accent}`,
    color: gbThemeVars.accentContrast,
    selectors: {
      "&:visited": {
        color: colors.gb.pale,
      },
      "&:hover": { transform: BUTTON_PRESS_TRANSLATE },
      "&:focus-visible": {
        transform: BUTTON_PRESS_TRANSLATE,
      },
      "&:active": {
        transform: "translateY(2px)",
        boxShadow: `0 2px 0 0 ${gbThemeVars.accent}`,
      },
    },
  },
])

export const iconButton = style([
  buttonBase,
  {
    background: gbThemeVars.accentSoft,
    border: `1px solid ${gbThemeVars.accent}`,
    boxShadow: `0 4px 0 0 ${gbThemeVars.accent}`,
    color: gbThemeVars.text,
    height: ICON_SIZE,
    padding: 0,
    selectors: {
      "&:visited": {
        color: colors.gb.pale,
      },
      "&:hover": { transform: BUTTON_PRESS_TRANSLATE },
      "&:focus-visible": {
        transform: BUTTON_PRESS_TRANSLATE,
      },
      "&:active": {
        transform: "translateY(1px)",
        boxShadow: `0 1px 0 0 ${gbThemeVars.border}`,
      },
    },
    width: ICON_SIZE,
  },
])

/* ---------- Meta & tables ---------- */
export const metaRow = style({
  borderTop: `1px dotted ${gbThemeVars.borderMuted}`,
  display: "grid",
  gap: space.small,
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  marginTop: space.default,
  paddingTop: space.small,
})

export const metaItem = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xxs,
})

export const metaLabel = style({
  color: gbThemeVars.heading,
  fontSize: fontSizes.body,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  "@media": {
    [MEDIA_QUERY_MAX_WIDTH]: {
      fontSize: fontSizes.bodySm,
      letterSpacing: "0.12em",
    },
  },
})

export const metaValue = style({
  color: gbThemeVars.text,
  fontSize: fontSizes.body,
  fontWeight: fontWeights.body.bold,
  "@media": {
    [MEDIA_QUERY_MAX_WIDTH]: {
      fontSize: fontSizes.bodySm,
    },
  },
})

export const controlsTable = style({
  borderCollapse: "collapse",
  marginTop: space.default,
  width: "100%",
})
globalStyle(`:where(${controlsTable}) th`, {
  borderBottom: `1px solid ${gbThemeVars.border}`,
  fontSize: fontSizes.body,
  padding: `${space.xxs} ${space.xs}`,
  textAlign: "left",
})
globalStyle(`:where(${controlsTable}) td`, {
  borderBottom: `1px dotted ${gbThemeVars.borderMuted}`,
  fontSize: fontSizes.body,
  padding: `${space.xxs} ${space.xs}`,
})

/* ---------- Cards / lists / gallery ---------- */
export const card = style([
  panelSurfaceBase,
  { display: "flex", gap: space.small, flexDirection: "column" },
])

export const sectionGrid = style({
  display: "grid",
  gap: space.large,
})

export const sectionHeading = style({
  color: gbThemeVars.heading,
  fontSize: fontSizes.body,
  textTransform: "uppercase",
  "@media": {
    [MEDIA_QUERY_MAX_WIDTH]: {
      fontSize: fontSizes.bodySm,
    },
  },
})

export const jamSummary = style({
  color: gbThemeVars.text,
  fontSize: fontSizes.body,
  lineHeight: lineHeights.body,
  marginBottom: space.default,
})

globalStyle(`:where(${card}) h2`, { margin: 0, marginBottom: space.small })
globalStyle(`:where(${card}) p`, { marginTop: 0 })
globalStyle(`:where(${card}) ul`, {
  listStyle: "square",
  margin: 0,
  paddingLeft: space.large,
})

export const techList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: space.small,
  listStyle: "none",
  margin: 0,
  padding: 0,
})
globalStyle(`:where(${techList}) li`, {
  background: gbThemeVars.tagBg,
  border: `1px dashed ${gbThemeVars.border}`,
  borderRadius: radii.md,
  padding: `${space.xxs} ${space.small}`,
})

export const teamList = style({
  display: "grid",
  gap: space.xxs,
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const continuationNote = style({
  color: gbThemeVars.textMuted,
  fontSize: fontSizes.body,
  lineHeight: lineHeights.body,
  marginBottom: space.small,
})

export const linkList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: space.small,
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const link = style({
  borderBottom: `1px dotted ${gbThemeVars.accent}`,
  color: gbThemeVars.accent,
  fontWeight: fontWeights.body.bold,
  textDecoration: "none",
  selectors: {
    "&:visited": {
      color: colors.gb.mid,
      borderBottomColor: colors.gb.mid,
    },
  },
})

export const gallery = style({
  display: "grid",
  gap: space.large,
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
})

export const screenshotCard = style([
  panelSurfaceBase,
  { background: gbThemeVars.screenshotBg, padding: space.small },
])

export const screenshotImage = style({
  aspectRatio: "10 / 9",
  border: `1px solid ${gbThemeVars.border}`,
  borderRadius: radii.sm,
  height: "auto",
  imageRendering: "pixelated",
  width: "100%",
})

export const figcaption = style({
  color: gbThemeVars.textMuted,
  fontSize: fontSizes.body,
  marginTop: space.xs,
  textAlign: "center",
})

export const footer = style({
  borderTop: `1px solid ${gbThemeVars.border}`,
  color: gbThemeVars.textMuted,
})
