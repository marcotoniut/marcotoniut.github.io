import { recipe } from "@vanilla-extract/recipes"

import {
  colors,
  durations,
  fontFamilies,
  fontSizes,
  fontWeights,
  shadows,
  space,
} from "@/styles/theme"
import { withAlpha } from "@/utils/color"

export const buttonRecipe = recipe({
  base: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: `1px solid ${colors.border}`,
    color: colors.text,
    cursor: "pointer",
    display: "inline-flex",
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.bodySm,
    fontWeight: fontWeights.ui.medium,
    gap: space.xs,
    justifyContent: "center",
    letterSpacing: "0.02em",
    lineHeight: 1.2,
    paddingInline: space.md,
    paddingBlock: space.xs,
    position: "relative",
    textDecoration: "none",
    transition: `background-color ${durations.normal} ease, border-color ${durations.normal} ease, box-shadow ${durations.normal} ease, transform 150ms ease`,
    userSelect: "none",
    whiteSpace: "nowrap",
    ":focus-visible": {
      outline: "none",
      boxShadow: `${shadows.glow}, ${shadows.subtle}`,
    },
    ":active": {
      transform: "translateY(1px)",
      boxShadow: shadows.subtle,
    },
    selectors: {
      '&[disabled], &[aria-disabled="true"]': {
        cursor: "not-allowed",
        opacity: 0.45,
        boxShadow: "none",
        transform: "none",
      },
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: colors.accent,
        borderColor: colors.accent,
        color: colors.accentContrast,
        boxShadow: shadows.soft,
        ":hover": {
          backgroundColor: colors.accent,
          borderColor: colors.accent,
          boxShadow: `${shadows.soft}, ${shadows.glow}`,
        },
      },
      outline: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
        color: colors.text,
        boxShadow: shadows.subtle,
        ":hover": {
          borderColor: colors.accent,
          boxShadow: `${shadows.subtle}, ${shadows.glow}`,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: colors.accent,
        ":hover": {
          backgroundColor: withAlpha(colors.accent, 0.1),
          borderColor: withAlpha(colors.accent, 0.35),
        },
      },
    },
    size: {
      sm: {
        height: "30px",
        fontSize: "0.8rem",
        paddingInline: space.sm,
        paddingBlock: space.xs,
      },
      md: {
        height: "38px",
        fontSize: fontSizes.bodySm,
        paddingInline: space.md,
        paddingBlock: space.xs,
      },
      lg: {
        height: "46px",
        fontSize: fontSizes.ui,
        paddingInline: space.xl,
        paddingBlock: space.sm,
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})
