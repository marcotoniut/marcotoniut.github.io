import {
  createVar,
  fallbackVar,
  globalStyle,
  keyframes,
  style,
} from "@vanilla-extract/css"
import { colors, fontFamilies, radii } from "@/styles/theme"

export const coffeeVars = {
  liquid: createVar(),
  crema: createVar(),
  onLiquid: createVar(),
}

const liquid = fallbackVar(coffeeVars.liquid, "#6f4e37")
const crema = fallbackVar(coffeeVars.crema, "#c8a27a")
const onLiquid = fallbackVar(coffeeVars.onLiquid, "#fdf6ec")

const waveMask = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="6"><path d="M0 3Q6 0 12 3T24 3V6H0Z"/></svg>',
)}")`

const EMPTY = "calc(100% + 10px)"
const FULL = "18%"
const fill = "transform 1000ms cubic-bezier(0.34, 1.3, 0.64, 1)"
const drain = "transform 450ms cubic-bezier(0.55, 0, 0.45, 1)"
const motion = "(prefers-reduced-motion: no-preference)"

const flow = keyframes({
  to: { maskPosition: "24px 0", WebkitMaskPosition: "24px 0" },
})
const ebb = keyframes({
  to: { maskPosition: "-32px 0", WebkitMaskPosition: "-32px 0" },
})
const fizz = keyframes({ to: { backgroundPosition: "0 -24px" } })

const faceLayout = {
  alignItems: "center",
  display: "flex",
  gap: "8px",
  padding: "6px 14px 6px 10px",
  whiteSpace: "nowrap",
} as const

export const button = style({
  border: "1px solid currentColor",
  borderRadius: radii.pill,
  color: colors.text,
  display: "inline-flex",
  fontFamily: fontFamilies.mono,
  fontSize: "0.8125rem",
  isolation: "isolate",
  overflow: "hidden",
  position: "relative",
  textDecoration: "none",
  selectors: {
    "&:visited, &:hover": { color: colors.text, textDecoration: "none" },
  },
})

export const face = style(faceLayout)

const engagedSelf = `${button}:hover &, ${button}:focus-visible &`

const pourMotion = {
  [motion]: {
    transition: drain,
    selectors: { [engagedSelf]: { transition: fill } },
  },
}

const wave = {
  content: "",
  left: 0,
  maskImage: waveMask,
  maskRepeat: "repeat-x",
  position: "absolute",
  right: 0,
  transformOrigin: "bottom",
  transition: "transform 160ms ease-out",
  WebkitMaskImage: waveMask,
  WebkitMaskRepeat: "repeat-x",
} as const

export const pour = style({
  inset: 0,
  pointerEvents: "none",
  position: "absolute",
  transform: `translateY(${EMPTY})`,
  "::before": {
    ...wave,
    background: crema,
    bottom: "calc(100% - 2px)",
    height: "8px",
    maskSize: "32px 8px",
    WebkitMaskSize: "32px 8px",
  },
  "::after": {
    ...wave,
    background: liquid,
    bottom: "calc(100% - 1px)",
    height: "6px",
    maskSize: "24px 6px",
    WebkitMaskSize: "24px 6px",
  },
  selectors: {
    [engagedSelf]: { transform: `translateY(${FULL})` },
  },
  "@media": pourMotion,
})

export const body = style({
  background: liquid,
  inset: 0,
  overflow: "hidden",
  position: "absolute",
  "::before": {
    backgroundImage: [
      `radial-gradient(circle at 25% 70%, ${crema} 0 1.2px, transparent 1.7px)`,
      `radial-gradient(circle at 70% 30%, ${crema} 0 1px, transparent 1.5px)`,
      `radial-gradient(circle at 90% 85%, ${crema} 0 0.8px, transparent 1.3px)`,
    ].join(", "),
    backgroundSize: "36px 24px",
    content: "",
    inset: 0,
    opacity: 0.6,
    position: "absolute",
  },
})

// Moves against the pour to keep the copy still while the liquid
// uncovers it.
export const liquidFace = style({
  ...faceLayout,
  color: onLiquid,
  inset: 0,
  position: "absolute",
  transform: `translateY(calc(-1 * ${EMPTY}))`,
  selectors: {
    [engagedSelf]: { transform: `translateY(-${FULL})` },
  },
  "@media": pourMotion,
})

const engaged = (target: string) =>
  `${button}:hover ${target}, ${button}:focus-visible ${target}`

globalStyle(engaged(`${pour}::before`), {
  "@media": { [motion]: { animation: `${ebb} 2.6s linear infinite` } },
})
globalStyle(engaged(`${pour}::after`), {
  "@media": { [motion]: { animation: `${flow} 1.7s linear infinite` } },
})
globalStyle(engaged(`${body}::before`), {
  "@media": { [motion]: { animation: `${fizz} 2.4s linear infinite` } },
})
globalStyle(
  `${button}:active ${pour}::before, ${button}:active ${pour}::after`,
  {
    "@media": { [motion]: { transform: "scaleY(2.2)" } },
  },
)

export const cup = style({
  flexShrink: 0,
  height: "1.1em",
  width: "1.1em",
})
