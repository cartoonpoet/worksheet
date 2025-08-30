import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default {
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      apis: path.resolve(__dirname, "./src/apis"),
      pages: path.resolve(__dirname, "./src/pages"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      style: path.resolve(__dirname, "./src/style"),
      assets: path.resolve(__dirname, "./src/assets"),
      store: path.resolve(__dirname, "./src/store"),
      type: path.resolve(__dirname, "./src/type"),
    },
  },
};
