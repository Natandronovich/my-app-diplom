import React, { useState } from "react";
import { ThemeType, Theme, Themes } from "./theme";

export const ThemeContext = React.createContext({} as ContextThemeProps);

interface AppProps {
  children: React.ReactNode;
}

export interface ContextThemeProps {
  currentTheme: ThemeType;
  stylesForTheme: Theme;
  updateTheme: () => ThemeType;
}

export const ThemeContextProvider = ({ children }: AppProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const changeTheme: any = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        stylesForTheme: Themes[theme],
        updateTheme: changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
