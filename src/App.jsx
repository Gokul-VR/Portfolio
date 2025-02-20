import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Loader from './components/customComponents/Loader';
import { ReactLenis } from '@studio-freight/react-lenis';
import theme from './theme';
import { AnimatePresence } from 'framer-motion';
import SkillSection from './components/skills/skills';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
export default function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoaded(false);
    document.body.style.cursor = 'default';
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div style={{ backgroundColor: darkMode ? '#000000' : '#ffffff', minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AnimatePresence mode='wait'>
            {isLoaded && <Loader onComplete={handleLoaderComplete} />}
          </AnimatePresence>

          {!isLoaded && (
            <>
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              <main>
                <ReactLenis root options={{ lerp: 0.05 }}>
                  <Hero />
                  <About />
                  <Projects darkMode={darkMode} />
                  <SkillSection darkMode={darkMode} />
                  <Footer />
                </ReactLenis>
              </main>
            </>
          )}
        </ThemeProvider>
      </div>
    </>
  );
}
