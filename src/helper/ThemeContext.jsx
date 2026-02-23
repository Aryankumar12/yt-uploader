import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const ThemeModeContext = createContext(undefined);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () => createTheme({ 
      palette: { 
        mode,
        ...(mode === 'light' 
          ? { background: { default: "#f5f5f5", paper: "#ffffff" } }
          : { background: { default: "#121212", paper: "#1e1e1e" } }
        )
      } 
    }),
    [mode]
  );

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
};