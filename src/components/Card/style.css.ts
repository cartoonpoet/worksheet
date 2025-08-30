import { recipe } from "@vanilla-extract/recipes";
import { color } from "../../style/style.css";

export const card = recipe({
  base: {
    borderRadius: "1.2rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  variants: {
    type: {
      similar: {
        backgroundColor: color.mono.similar,
        "@media": {
          "(min-width: 1024px) and (max-width: 1279px)": { width: "48rem" },
          "(min-width: 1280px)": { width: "48rem" }, //62.5%
        },
      },
      normal: {
        backgroundColor: color.mono.normal,
        "@media": {
          "(min-width: 1024px) and (max-width: 1279px)": { width: "50.4rem" },
          "(min-width: 1280px)": { width: "71.2rem" }, //62.5%
        },
      },
    },
  },
  defaultVariants: {
    type: "normal",
  },
});
