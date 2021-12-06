import { colors } from "./theme";

export const sheetStyles = {
  fontSize: "14pt",
  color: colors.text,
  '&[data-size="A4"] > *': {
    fontSize: "12pt",
  },
} as const;
