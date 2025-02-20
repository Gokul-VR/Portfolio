import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MenuIcon } from "lucide-react";
import CloseIcon from "@mui/icons-material/Close";
import "./header.css";
import Magnetic from "../customComponents/Magnetic";
import { useDarkTheme } from "../../DarkModeContext";
import clsx from "clsx";

gsap.registerPlugin(ScrollToPlugin);

export default function Header({}) {
  const { darkMode, setDarkMode } = useDarkTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${sectionId}`, offsetY: 70 },
      ease: "power3.inOut",
    });
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { id: 1, name: "About" },
    { id: 2, name: "Projects" },
    { id: 3, name: "Skills" },
    // { id: 3, name: "Contact" },
  ];
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        damping: 20,
        ease: "easeOut",
        delay: index === 0 ? 0.2 : index * 0.25,
      },
    }),
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.8,
      },
    },
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleResize = () => {
    setIsVisible(window.innerWidth >= 960); // Adjust the width as needed (e.g., 960px for md)
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0, offsetY: 70 }, // Scroll to the top
      ease: "power3.inOut",
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        height: "68px", // Set a fixed height
        background: "transparent",
        transition: "background 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="logo-name" onClick={() => scrollToTop()}>
              Gokul
            </span>
          </motion.div>
        </Typography>
        <motion.div
          style={{
            display: isVisible ? "flex" : "none",
            alignItems: "center",
            border: darkMode
              ? "1px solid rgba(255, 255, 255, 0.3)"
              : "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "30px",
            backdropFilter: "blur(10px)",
            transition: "background 0.3s ease",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {["About", "Projects", "Skills"].map((item) => (
            <Magnetic>
              <motion.div
                key={item}
                style={{ display: "inline-block" }}
                className="py-3 px-2"
              >
                <span
                  color="inherit"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    fontSize: 16,
                    marginX: 1,
                    padding: 12,
                    textDecoration: "none",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </span>
              </motion.div>
            </Magnetic>
          ))}
          <Magnetic>
            {/* <Button
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                minWidth: "40px",
                width: "40px",
                height: "40px",
                mr: 1,
                borderRadius: "50%",
                // backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                // "&:hover": {
                //   backgroundColor: darkMode
                //     ? "rgba(255, 255, 255, 0.3)"
                //     : "rgba(0, 0, 0, 0.3)",
                // },
              }}
            >
            
              <ThemeIcon theme={darkMode} />
            </Button> */}
            <div className="relative z-50 shrink-0">
              <button
                className="p-2 rounded-full relative z-20 group outline-none pr-4"
                aria-label="Theme Control"
                onClick={() => setDarkMode(!darkMode)}
              >
                <ThemeIcon theme={darkMode} />
              </button>
              <div className="absolute top-0 left-0 h-full w-full rounded-full" />
            </div>
          </Magnetic>
        </motion.div>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></Box>
        <IconButton
          onClick={toggleDrawer}
          sx={{ display: { xs: "flex", md: "none" }, color: "inherit" }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        transitionDuration={{ enter: 550, exit: 450 }}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: darkMode ? "#000000" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
          },
        }}
      >
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: "absolute", top: 10, right: 8, color: "inherit" }}
            aria-label="Close menu"
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ mt: 10 }}>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <motion.div
                  initial="hidden"
                  animate={drawerOpen ? "visible" : "exit"}
                  variants={itemVariants}
                  custom={index} // Pass the index to the variant
                  className="py-5"
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    onClick={() => {
                      scrollToSection(item.name.toLowerCase());
                      toggleDrawer();
                    }}
                    gutterBottom
                    sx={{
                      display: "inline-block",
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                      "&:focus": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                      "&:active": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </motion.div>
                {/* {index < menuItems.length - 1 && (
                                    <Divider sx={{ my: 4, bgcolor: darkMode ? 'white' : 'black' }} />
                                )} */}
              </React.Fragment>
            ))}
          </Box>
          <motion.div
            initial="hidden"
            animate={drawerOpen ? "visible" : "exit"}
            variants={itemVariants}
            custom={menuItems.length}
          >
            {/* <Button
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                minWidth: "40px",
                width: "40px",
                height: "40px",
                mr: 1,
                mt: 5,
                borderRadius: "50%",
                color: darkMode ? "white" : "black",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {darkMode ? "🌙" : "🌞"}
            </Button> */}
             <div className="relative z-50 shrink-0">
              <button
                className="p-2 rounded-full relative z-20 group outline-none pr-4"
                aria-label="Theme Control"
                onClick={() => setDarkMode(!darkMode)}
              >
                <ThemeIcon theme={darkMode} />
              </button>
            </div>
          </motion.div>
        </Box>
      </Drawer>
    </AppBar>
  );
}
function ThemeIcon({ theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="currentColor"
      className={clsx(
        "h-6 w-6 m-px text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 group-active:scale-75 transition-all duration-150",
        "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]"
      )}
      style={{
        transform: "translateZ(0)",
      }}
    >
      <defs>
        <mask id="moon-mask">
          <rect width="100%" height="100%" fill="white" />
          <motion.circle
            fill="black"
            initial={false}
            animate={{
              cx: theme ? 75 : 80,
              cy: theme ? 30 : 20,
              r: theme ? 35 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </mask>
      </defs>
      <motion.circle
        fill="currentColor"
        mask="url(#moon-mask)"
        initial={false}
        animate={{
          cx: theme ? 52.5 : 50,
          cy: theme ? 47.5 : 50,
          r: theme ? 35 : 25,
        }}
      />
      <g>
        {[...Array(6)].map((_, index) => {
          const rayRadius = 6;
          return (
            <motion.circle
              key={`ray-${index}`}
              cy="50"
              fill="currentColor"
              transform={`rotate(${index * 60 + 30} 50 50)`}
              initial={false}
              animate={{
                cx: !theme ? rayRadius * 2 : -rayRadius,
                r: !theme ? rayRadius : 0,
                fillOpacity: !theme ? 1 : 0,
                rotate: index * 60 + 30,
              }}
              transition={{
                delay: 0.025 * index,
              }}
              style={{
                originX: "50%",
                originY: "50%",
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}
