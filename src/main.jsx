import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkThemeProviderWrapper } from "./DarkModeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkThemeProviderWrapper>
      <App />
    </DarkThemeProviderWrapper>
  </StrictMode>
);
