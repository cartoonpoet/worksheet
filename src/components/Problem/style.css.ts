import { style } from "@vanilla-extract/css";
import { font, color } from "style/style.css";

export const headerSection = style({
  display: "flex",
  flexDirection: "row",
  padding: "1.2rem 0",
  alignItems: "center",
  backgroundColor: color.mono.gray100,
  borderRadius: "inherit",
});

export const numSection = style([
  font.head.bold,
  {
    padding: "0 3.2rem 0 2.8rem",
  },
]);

export const titleSection = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
});

export const title = style([
  font.body.regular,
  {
    paddingTop: "0.4rem",
    paddingBottom: "0.3rem",
    color: color.mono.gray900,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // maxWidth: "22.8rem",
    "@media": {
      "(min-width: 1024px) and (max-width: 1279px)": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "22.8rem",
      },
      "(min-width: 1280px)": {},
    },
  },
]);

export const buttonSection = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.2rem",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "1.6rem",
});

export const button = style([
  font.caption.regular,
  {
    color: color.mono.gray600,
    display: "flex",
    flexDirection: "row",
    gap: "0.4rem",
    justifyContent: "center",
    alignItems: "center",
  },
]);

export const mainSection = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.5rem",
  padding: "2.4rem 1.6rem",
  overflow: "hidden",
  "@media": {
    "(min-width: 1024px) and (max-width: 1279px)": {
      gap: "1.5rem",
      padding: "2.4rem 1.6rem",
    },
    "(min-width: 1280px)": {
      gap: "2.2rem",
      padding: "1.6rem",
    },
  },
});

export const tagSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const answerRate = style([
  font.caption.regular,
  {
    color: color.mono.gray700,
  },
]);

export const type = style([
  font.caption.regular,
  {
    color: color.mono.gray600,
  },
]);

export const problemImage = style({
  objectFit: "contain",
  width: "70%",
  height: "auto",
  borderRadius: "0.8rem",
  paddingBottom: "2.4rem",
  "@media": {
    "(min-width: 1024px) and (max-width: 1279px)": {
      paddingBottom: "2.4rem",
    },
    "(min-width: 1280px)": {
      paddingBottom: "3.1rem",
    },
  },
});
