import { createContext, useContext, useState } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProviderWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkThemeContext.Provider
      value={{ darkMode, setDarkMode, toggleDarkMode }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderWrapper");
  }
  return context;
};
