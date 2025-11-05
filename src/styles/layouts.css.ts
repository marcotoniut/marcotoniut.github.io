import { style } from "@vanilla-extract/css"
import { themeVars } from "./theme"

/**
 * Full-height page container with vertical flex layout
 * Common pattern used across contact, home, and other pages
 */
export const pageContainer = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem",
  backgroundColor: themeVars.color.background,
})

/**
 * Centred full-height flex container
 * Commonly used for loading/redirect pages
 */
export const centredContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
