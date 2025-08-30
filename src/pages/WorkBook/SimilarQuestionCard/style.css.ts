import { style } from "@vanilla-extract/css";
import { color, font } from "style/style.css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  padding: "1.6rem",
  height: "100%",
});

export const headerSection = style([
  font.body.bold,
  { color: color.mono.gray900, paddingTop: "0.1rem", paddingBottom: "1.6rem" },
]);

export const mainSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  flex: 1,
  overflowY: "auto",
  // 스크롤바 숨기기 (Webkit 브라우저)
  "::-webkit-scrollbar": {
    display: "none",
  },
  // Firefox에서 스크롤바 숨기기
  scrollbarWidth: "none",
  // IE에서 스크롤바 숨기기
  msOverflowStyle: "none",
});
