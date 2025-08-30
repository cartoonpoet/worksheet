import { createGlobalTheme, style } from "@vanilla-extract/css";

//색상
export const color = createGlobalTheme(":root", {
  mono: {
    white: "#FFFFFF",
    red: "#FD5354",
    gray200: "#F5F5F5",
    gray400: "#E0E0E0",
    gray800: "#5C5C5C",
    gray900: "#333333",
    similar: "#E8E8E8",
    normal: "#5C5C5C",
  },
});

//폰트
const createFontStyle = ({
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontFamily,
}: {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  fontFamily: string;
}) =>
  style({
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontFamily,
  });

export const font = {
  bold: createFontStyle({
    fontSize: "1.6rem",
    fontWeight: "700",
    lineHeight: "2.4rem",
    letterSpacing: "-1%",
    fontFamily: "Spoqa Han Sans Neo",
  }),
  regular: createFontStyle({
    fontSize: "1.4rem",
    fontWeight: "400",
    lineHeight: "2.1rem",
    letterSpacing: "-0.2%",
    fontFamily: "Spoqa Han Sans Neo",
  }),
};
