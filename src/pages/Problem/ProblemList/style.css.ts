import { style } from "@vanilla-extract/css";
import { color, font } from "../../../style/style.css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  padding: "0 1.6rem",
  height: "100%",
});

export const headerSection = style([
  font.head.bold,
  { color: color.mono.white, paddingTop: "1.7rem", paddingBottom: "1.6rem" },
]);

export const mainSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  flex: 1,
});

export const footerSection = style({
  display: "flex",
  flexDirection: "row",
  padding: "2rem 0",
  justifyContent: "flex-end",
  alignItems: "end",
});

export const levelCountSection = style([
  font.body.regular,
  {
    color: color.mono.gray400,
    letterSpacing: "-1%",
    lineHeight: "2.4rem",
    fontSize: "1.2rem",
    "@media": {
      "(min-width: 1024px) and (max-width: 1279px)": {
        fontSize: "1.2rem",
      },
      "(min-width: 1280px)": {
        fontSize: "1.6rem",
      },
    },
  },
]);

export const separator = style([
  font.body.bold,
  {
    color: color.mono.gray400,
    fontWeight: 400,
  },
]);

export const problemCountSection = style([
  font.body.bold,
  {
    color: color.mono.white,
  },
]);
