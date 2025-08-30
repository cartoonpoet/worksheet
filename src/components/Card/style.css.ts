import { recipe } from "@vanilla-extract/recipes";
import { color } from "../../style/style.css";

export const card = recipe({
  base: {
    borderRadius: "1.2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  variants: {
    type: {
      similar: {
        backgroundColor: color.mono.similar,
        "@media": {
          "(min-width: 1024px) and (max-width: 1279px)": { width: "48rem" },
          "(min-width: 1280px)": { width: "50.4rem" },
        },
      },
      normal: {
        backgroundColor: color.mono.normal,
        "@media": {
          "(min-width: 1024px) and (max-width: 1279px)": { width: "48rem" },
          "(min-width: 1280px)": { width: "71.2rem" },
        },
      },
      content: {
        backgroundColor: color.mono.white,
      },
    },
  },
  defaultVariants: {
    type: "normal",
  },
});
