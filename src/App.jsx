import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Loader from "./components/customComponents/Loader";
import { ReactLenis } from "@studio-freight/react-lenis";
import theme from "./theme";
import { AnimatePresence } from "framer-motion";
import SkillSection from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import { useDarkTheme } from "./DarkModeContext";
export default function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const { darkMode } = useDarkTheme();
  const handleLoaderComplete = () => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 1000);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#000000" : "#ffffff",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AnimatePresence mode="wait">
            {isLoaded && <Loader onComplete={handleLoaderComplete} />}
          </AnimatePresence>

          {!isLoaded && (
            <>
              <Header />
              <main>
                <Hero />
                <ReactLenis root options={{ lerp: 0.05 }} />
                <About />
                <Projects darkMode={darkMode} />
                <SkillSection darkMode={darkMode} />
                <Footer />
              </main>
            </>
          )}
        </ThemeProvider>
      </div>
    </>
  );
}
