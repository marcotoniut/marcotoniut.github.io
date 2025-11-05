import { style } from "@vanilla-extract/css"
import { colors, space } from "./theme"

/**
 * Full-height page container with vertical flex layout
 * Common pattern used across contact, home, and other pages
 */
export const pageContainer = style({
  alignItems: "center",
  background: `radial-gradient(circle at top left, rgba(86, 243, 201, 0.08), transparent 55%), ${colors.background}`,
  boxSizing: "border-box",
  color: colors.text,
  display: "flex",
  flexDirection: "column",
  gap: space.xl,
  minHeight: "100svh",
  padding: `${space.large} ${space.large}`,
  width: "100%",
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
