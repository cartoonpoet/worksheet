import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Problem from "./pages/Problem";
import "./style/global.css.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Problem />
  </StrictMode>
);
