import { style, globalStyle } from "@vanilla-extract/css";
import { colors, space } from "../../styles/theme";

export const docCn = style({
  fontSize: "16px",
  color: colors.text,
  padding: `${space.xl} ${space.xxl}`,
  margin: "0 auto",
  maxWidth: "1200px",
  display: "flex",
});

globalStyle(`${docCn} article`, {
  marginRight: space.xxxl,
});

globalStyle(`${docCn} hr`, {
  border: 0,
  borderColor: "rgba(0, 0, 0, 0)",
  height: "1px",
  width: "100%",
  marginBottom: space.xs,
  marginTop: space.xs,
  backgroundColor: colors.text,
});

const doc_mediaCn = `${docCn} @media screen and (max-width: 768px)`;
globalStyle(doc_mediaCn, {
  fontSize: "14px",
  display: "block",
});

globalStyle(`${doc_mediaCn} aside`, {
  marginTop: space.xxxl,
});

const doc_dataSizeCn = `${docCn}[data-size="A4"]`;
globalStyle(doc_dataSizeCn, {
  fontSize: "9pt",
  padding: space.none,
  maxWidth: "210mm",
});

globalStyle(`${doc_dataSizeCn} aside`, {
  minWidth: "60mm",
});

export const paragraphCn = style({});

globalStyle(`${paragraphCn} > *`, { marginTop: space.small });

export const highlightsCss = style({ listStyle: "inside", padding: 0 });

export const linkCss = style({
  color: colors.action,
  display: "inline-flex",
  alignItems: "center",
});

export const sectionCn = style({
  breakInside: "avoid",
  pageBreakInside: "avoid",
});

export const skillsListCn = style({
  listStyle: "none",
  padding: 0,
});

globalStyle(`${skillsListCn} > li:not(:first-child)`, {
  marginTop: space.small,
});

export const institutionCn = style({
  fontSize: space.large,
  marginBottom: space.small,
  marginTop: space.small,
});
