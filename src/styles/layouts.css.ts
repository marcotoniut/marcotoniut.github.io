import { style } from "@vanilla-extract/css"
import { colors, space } from "./theme"

/**
 * Full-height page container with vertical flex layout
 * Common pattern used across contact, home, and other pages
 */
export const pageContainer = style({
  alignItems: "center",
  background: `radial-gradient(circle at top left, color-mix(in srgb, ${colors.accent} 8%, transparent), transparent 55%), ${colors.background}`,
  boxSizing: "border-box",
  color: colors.text,
  display: "flex",
  flexDirection: "column",
  gap: space.xl,
  minHeight: "100svh",
  // 24/48/64 rhythm: the audit found tablet collapsing to a 16px gutter while
  // desktop had ten times that; the steps give every width real margins.
  padding: `${space.lg} ${space.xl}`,
  width: "100%",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingInline: "48px",
    },
    "screen and (min-width: 1200px)": {
      paddingInline: "64px",
    },
  },
})
/**
 * Centred full-height flex container
 * Commonly used for loading/redirect pages
 */
export const centredContainer = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
})

/**
 * Page header for navigation elements
 * Used across contact and other pages
 */
export const pageHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})
