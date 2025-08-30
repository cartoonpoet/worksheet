import "./reset.css";
import { globalStyle } from "@vanilla-extract/css";
import { color } from "./style.css";

globalStyle("html", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px", //default
});

globalStyle("body", {
  margin: 0,
  fontFamily: "Spoqa Han Sans Neo, sans-serif",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  minHeight: "calc(var(--vh, 1vh) * 100)",
  backgroundColor: color.mono.gray200,
});
