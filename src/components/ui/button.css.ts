import { recipe } from "@vanilla-extract/recipes"

import {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  shadows,
  space,
} from "@/styles/theme"

export const buttonRecipe = recipe({
  base: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: `1px solid ${colors.border}`,
    color: colors.text,
    cursor: "pointer",
    display: "inline-flex",
    fontFamily,
    fontSize: fontSizes.bodySm,
    fontWeight: fontWeights.ui.medium,
    gap: space.xs,
    justifyContent: "center",
    letterSpacing: "0.02em",
    lineHeight: 1.2,
    paddingInline: space.default,
    paddingBlock: space.xs,
    position: "relative",
    textDecoration: "none",
    transition:
      "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease",
    userSelect: "none",
    whiteSpace: "nowrap",
    willChange: "transform",
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
        backgroundColor: colors.action,
        borderColor: colors.action,
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
          borderColor: colors.action,
          boxShadow: `${shadows.subtle}, ${shadows.glow}`,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: colors.action,
        ":hover": {
          backgroundColor: "rgba(86, 243, 201, 0.1)",
          borderColor: "rgba(86, 243, 201, 0.35)",
        },
      },
    },
    size: {
      sm: {
        height: "30px",
        fontSize: "0.8rem",
        paddingInline: space.small,
        paddingBlock: space.xs,
      },
      md: {
        height: "38px",
        fontSize: fontSizes.bodySm,
        paddingInline: space.default,
        paddingBlock: space.xs,
      },
      lg: {
        height: "46px",
        fontSize: fontSizes.ui,
        paddingInline: space.xl,
        paddingBlock: space.small,
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
