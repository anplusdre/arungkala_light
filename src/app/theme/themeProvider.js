'use client';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export function useTheme() {
    return useContext(ThemeContext);
  }

export default function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };
      const themeContext = {
        isDarkMode,
        toggleDarkMode,
      };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
