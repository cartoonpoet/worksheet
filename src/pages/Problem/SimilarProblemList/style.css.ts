import { style } from "@vanilla-extract/css";
import { font, color } from "../../../style/style.css";

export const guideSection = style([
  font.body.regular,
  color.mono.gray900,
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.2rem",
  },
]);

export const guideItem = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.6rem",
  justifyContent: "center",
  alignItems: "center",
});

export const buttonSection = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.1rem",
  alignItems: "center",
});

export const buttonImage = style({
  width: "1rem",
  height: "1rem",
});
