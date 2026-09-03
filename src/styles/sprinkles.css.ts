import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"
import { breakpoints } from "./theme"
import { themeVars } from "./theme.css"

/**
 * Typed layout utilities projected from the theme contract. Layout mechanics
 * only (spacing, display, alignment, measure); colour and brand meaning stay
 * in named semantic styles — see the primitives rule in
 * docs/design-direction.md, Tranche 7.5.
 */
const space = themeVars.space

const layoutProperties = defineProperties({
  conditions: {
    base: {},
    lg: { "@media": `screen and (max-width: ${breakpoints.lg})` },
    md: { "@media": `screen and (max-width: ${breakpoints.md})` },
    sm: { "@media": `screen and (max-width: ${breakpoints.sm})` },
  },
  defaultCondition: "base",
  properties: {
    display: ["none", "block", "flex", "grid", "inline-flex"],
    flexDirection: ["row", "column"],
    flexWrap: ["wrap", "nowrap"],
    alignItems: ["stretch", "center", "flex-start", "flex-end", "baseline"],
    justifyContent: ["flex-start", "center", "flex-end", "space-between"],
    gap: space,
    rowGap: space,
    columnGap: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: { ...space, auto: "auto" },
    marginRight: { ...space, auto: "auto" },
    width: { full: "100%", fit: "fit-content", auto: "auto" },
    maxWidth: { content: "1080px", prose: "70ch", full: "100%" },
    textAlign: ["left", "center"],
    gridTemplateColumns: {
      1: "repeat(1, 1fr)",
      2: "repeat(2, 1fr)",
      3: "repeat(3, 1fr)",
    },
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingBlock: ["paddingTop", "paddingBottom"],
    paddingInline: ["paddingLeft", "paddingRight"],
    marginBlock: ["marginTop", "marginBottom"],
    marginInline: ["marginLeft", "marginRight"],
  },
})

export const sprinkles = createSprinkles(layoutProperties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
