import { style } from "@vanilla-extract/css"
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  space,
} from "../styles/theme"

export const h1Cn = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.h1,
  fontWeight: fontWeights.heading.bold,
  letterSpacing: letterSpacing.h1,
  lineHeight: lineHeights.h1,
  color: colors.main,
})

export const h2Cn = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.h2,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h2,
  lineHeight: lineHeights.h2,
  color: colors.main,
  marginBottom: space.xs,
  marginTop: space.xl,
})

export const h3Cn = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.h3,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  marginBottom: space.xs,
})
