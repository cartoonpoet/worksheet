import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { color, font } from "style/style.css";

export const tag = recipe({
  base: style([
    font.caption.regular,
    {
      backgroundColor: color.mono.gray200,
      borderRadius: "0.4rem",
      width: "4rem",
      height: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  ]),
  variants: {
    level: {
      1: style({
        color: color.level[1],
      }),
      2: style({
        color: color.level[2],
      }),
      3: style({
        color: color.level[3],
      }),
      4: style({
        color: color.level[4],
      }),
      5: style({
        color: color.level[5],
      }),
    },
  },
  defaultVariants: {
    level: 1,
  },
});
