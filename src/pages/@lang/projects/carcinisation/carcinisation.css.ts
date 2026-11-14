import { globalStyle, keyframes, style } from "@vanilla-extract/css"
import * as footerStyles from "@/components/Footer.css"
import * as headerStyles from "@/components/Header.css"
import { pressStartFont } from "@/styles/fonts.css"
import { gbPalette } from "@/styles/gb-palette"
import { fontSizes, media, themeVars } from "@/styles/theme"

const { dark, mid, lite, pale } = gbPalette

const tiles = (count: number) => `${count * 8}px`

const SHOT_WIDTH = 320
const SHOT_BEZEL = 4

// Stepped triangle keeps the menu cursor on the pixel grid.
const cursorClipPath =
  "polygon(0 0, 25% 0, 25% 12.5%, 50% 12.5%, 50% 25%, 75% 25%, 75% 37.5%, 100% 37.5%, 100% 62.5%, 75% 62.5%, 75% 75%, 50% 75%, 50% 87.5%, 25% 87.5%, 25% 100%, 0 100%)"

const DITHER_ROWS = [
  "1000",
  "0010",
  "1010",
  "0101",
  "1110",
  "1011",
  "1010",
  "0101",
  "1000",
  "0010",
] as const
const DITHER_PIXEL = 2

const ditherSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${DITHER_ROWS[0].length * DITHER_PIXEL}" height="${DITHER_ROWS.length * DITHER_PIXEL}" fill="${lite}" shape-rendering="crispEdges">${DITHER_ROWS.flatMap(
  (row, y) =>
    [...row].map((bit, x) =>
      bit === "1"
        ? `<rect x="${x * DITHER_PIXEL}" y="${y * DITHER_PIXEL}" width="${DITHER_PIXEL}" height="${DITHER_PIXEL}"/>`
        : "",
    ),
).join("")}</svg>`

const pixel = style([
  pressStartFont,
  { fontSize: "16px", letterSpacing: 0, lineHeight: 1.5 },
])

const inverted = { background: dark, color: pale } as const

const blink = keyframes({ "50%": { opacity: 0 } })

// Same four colours in both themes. Remapping the site's tokens here
// also recolours the shared header and footer.
export const pageShell = style({
  vars: {
    [themeVars.color.background]: pale,
    [themeVars.color.surface]: pale,
    [themeVars.color.surfaceElevated]: pale,
    [themeVars.color.border]: dark,
    [themeVars.color.borderMuted]: dark,
    [themeVars.color.textPrimary]: dark,
    [themeVars.color.textMuted]: dark,
    [themeVars.color.accent]: dark,
    [themeVars.color.accentSoft]: mid,
    [themeVars.color.accentContrast]: pale,
    [themeVars.color.focusRing]: dark,
    [themeVars.color.hairline]: dark,
    [themeVars.color.grid]: "transparent",
    [themeVars.color.buyMeACoffeeBackground]: pale,
    [themeVars.color.buyMeACoffeeText]: dark,
    [themeVars.color.buyMeACoffeeAccent]: dark,
  },
  backgroundColor: pale,
  color: dark,
  colorScheme: "light",
  minHeight: "100svh",
})

globalStyle(`${pageShell} ${headerStyles.headerContainer}`, {
  borderBottomWidth: "2px",
})
globalStyle(
  `${pageShell} ${footerStyles.cells}, ${pageShell} ${footerStyles.cells} ${footerStyles.cell}`,
  { borderWidth: "2px" },
)

export const pageShellContent = style({
  display: "flex",
  flexDirection: "column",
  gap: tiles(6),
  margin: "0 auto",
  maxWidth: "1128px",
  padding: tiles(3),
  "@media": {
    [media.sm]: { padding: tiles(2) },
  },
})

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: tiles(6),
})

export const hero = style({
  alignItems: "center",
  display: "grid",
  gap: tiles(4),
  gridTemplateColumns: "max-content 1fr",
  "@media": {
    [media.md]: { gridTemplateColumns: "1fr" },
  },
})

export const screen = style({
  background: dark,
  margin: 0,
  maxWidth: "100%",
  padding: `${SHOT_BEZEL}px`,
  width: "fit-content",
})

// Integer multiples of the 160px frame keep game pixels uniform.
export const screenImage = style({
  display: "block",
  height: "auto",
  imageRendering: "pixelated",
  maxWidth: "100%",
  width: `${SHOT_WIDTH}px`,
})

export const heroScreen = style({ padding: tiles(2) })

export const heroScreenImage = style({
  width: "480px",
  "@media": {
    [media.lg]: { width: "320px" },
  },
})

export const heroInfo = style({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: tiles(3),
})

export const title = style([
  pixel,
  {
    fontSize: "32px",
    margin: 0,
    textShadow: `0.125em 0.125em 0 ${lite}`,
    "@media": {
      [media.lg]: { fontSize: "24px" },
    },
  },
])

export const description = style({ margin: 0, maxWidth: "60ch" })

export const play = style([
  pixel,
  {
    alignItems: "center",
    border: `2px solid ${dark}`,
    color: dark,
    display: "inline-flex",
    gap: tiles(2),
    padding: `${tiles(1.5)} ${tiles(2)}`,
    textDecoration: "none",
    textTransform: "uppercase",
    "::before": {
      background: "currentColor",
      clipPath: cursorClipPath,
      content: "",
      height: tiles(1),
      width: tiles(1),
    },
    selectors: {
      "&:visited": { color: dark },
      "&:hover, &:focus-visible": { ...inverted, textDecoration: "none" },
    },
  },
])

globalStyle(`${play}:hover::before, ${play}:focus-visible::before`, {
  animation: "none",
})

export const meta = style({
  alignItems: "baseline",
  display: "grid",
  gap: `${tiles(1)} ${tiles(3)}`,
  gridTemplateColumns: "max-content 1fr",
  margin: 0,
})

export const metaLabel = style([
  pixel,
  { color: mid, textTransform: "uppercase" },
])

export const metaValue = style({ margin: 0 })

export const link = style({
  color: dark,
  textDecorationLine: "underline",
  textDecorationThickness: "2px",
  textUnderlineOffset: "3px",
  selectors: {
    "&:visited": { color: dark },
    "&:hover, &:focus-visible": inverted,
  },
})

export const dither = style({
  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(ditherSvg)}")`,
  backgroundRepeat: "repeat-x",
  height: `${DITHER_ROWS.length * DITHER_PIXEL}px`,
})

export const windows = style({
  display: "grid",
  gap: `${tiles(6)} ${tiles(3)}`,
  gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
  "@media": {
    [media.md]: { gridTemplateColumns: "minmax(0, 1fr)" },
  },
})

export const wide = style({ gridColumn: "1 / -1" })

export const window = style({
  border: `2px solid ${dark}`,
  boxShadow: `inset 0 0 0 2px ${pale}, inset 0 0 0 4px ${dark}`,
  display: "flex",
  flexDirection: "column",
  gap: tiles(2),
  padding: `${tiles(4)} ${tiles(3)} ${tiles(3)}`,
  position: "relative",
  "@media": {
    [media.sm]: { padding: `${tiles(4)} ${tiles(1.5)} ${tiles(2)}` },
  },
})
globalStyle(`${window} p`, { margin: 0 })

export const dialogue = style({
  paddingBottom: tiles(4),
  "::after": {
    background: dark,
    bottom: tiles(1.5),
    clipPath: cursorClipPath,
    content: "",
    height: tiles(1),
    position: "absolute",
    right: tiles(2),
    transform: "rotate(90deg)",
    width: tiles(1),
  },
})

globalStyle(`${play}::before, ${dialogue}::after`, {
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: `${blink} 1s steps(1, end) infinite`,
    },
  },
})

export const windowTitle = style([
  pixel,
  {
    background: pale,
    left: tiles(2),
    margin: 0,
    padding: `0 ${tiles(1)}`,
    position: "absolute",
    textTransform: "uppercase",
    top: 0,
    transform: "translateY(-50%)",
  },
])

export const controls = style({ borderCollapse: "collapse" })

export const controlsHead = style({
  fontSize: fontSizes.bodySm,
  fontWeight: 400,
  paddingBottom: tiles(1),
  textAlign: "left",
})

export const controlsCell = style({
  padding: `${tiles(1)} ${tiles(4)} ${tiles(1)} 0`,
  verticalAlign: "middle",
})

export const keycap = style([
  pixel,
  {
    border: `2px solid ${dark}`,
    boxShadow: `0 ${tiles(0.5)} 0 ${dark}`,
    display: "inline-block",
    lineHeight: 1,
    minWidth: tiles(5),
    padding: tiles(1),
    textAlign: "center",
    textTransform: "uppercase",
  },
])

export const gallery = style({
  display: "flex",
  flexWrap: "wrap",
  gap: tiles(2),
  justifyContent: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const shot = style({
  display: "flex",
  flexDirection: "column",
  gap: tiles(1),
  margin: 0,
  maxWidth: "100%",
  width: `${SHOT_WIDTH + 2 * SHOT_BEZEL}px`,
})

export const shotItem = style({ maxWidth: "100%" })

export const shotScreen = style({ width: "100%" })

export const shotImage = style({ width: "100%" })

export const caption = style({
  fontSize: fontSizes.bodySm,
  textAlign: "center",
})

export const credits = style({
  display: "grid",
  gap: tiles(3),
  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 272px), 1fr))",
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const credit = style({
  display: "flex",
  flexDirection: "column",
  gap: tiles(0.5),
})

export const creditName = pixel

export const creditRole = style({ fontSize: fontSizes.bodySm })

export const note = style({ fontSize: fontSizes.bodySm })
