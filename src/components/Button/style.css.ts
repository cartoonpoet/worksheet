import { style } from "@vanilla-extract/css";
import { color } from "../../style/style.css";

export const button = style({
  backgroundColor: color.mono.white,
  borderWidth: "0.6rem",
  borderRadius: "0.2rem",
  padding: "0.6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#959595",
  fontWeight: "400",
  fontSize: "0.9rem",
  lineHeight: "1.2rem",
  letterSpacing: "0",
});
