import { style } from "@vanilla-extract/css"
import {
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  radii,
  shadows,
  space,
} from "@/styles/theme"

export const banner = style({
  alignItems: "center",
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.md,
  bottom: space.md,
  boxShadow: shadows.soft,
  display: "flex",
  flexWrap: "wrap",
  gap: `${space.sm} ${space.md}`,
  insetInline: space.md,
  marginInline: "auto",
  maxWidth: "640px",
  padding: `${space.sm} ${space.md}`,
  position: "fixed",
  zIndex: 10,
  "@media": {
    print: { display: "none" },
  },
})

export const message = style({
  color: colors.text,
  flex: "1 1 18rem",
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.ui,
  lineHeight: lineHeights.ui,
  margin: 0,
})

export const actions = style({
  display: "flex",
  gap: space.xs,
  marginInlineStart: "auto",
})
