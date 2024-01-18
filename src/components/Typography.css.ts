import { style } from "@vanilla-extract/css";
import { colors, fontSizes, space } from "../styles/theme";

export const h1Cn = style({
  fontSize: fontSizes.xxl,
  color: colors.main,
});

export const h2Cn = style({
  fontSize: fontSizes.default,
  color: colors.main,
  marginBottom: space.xs,
  marginTop: space.xl,
});

export const h3Cn = style({
  fontSize: fontSizes.large,
  marginBottom: space.xs,
});
