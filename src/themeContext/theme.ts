enum Colors {
  /* Light mode */
  PAGE_BG_LIGHT = "#ffffff",
  TEXT_COLOR_LIGHT =  "#171718",
  TITLE_LIGHT = "#b8e6e6ec",
  RECIPES_CARD_BG_LIGHT = "#ffffff",
  RECIPES_CARD_TEXT_LIGHT = "#171718",
  BOX_SHADOW_LIGHT = "0px 5px 35px rgba(0, 0, 0, 0.25)",

  /* Dark mode */
  PAGE_BG_DARK = "#252526",
  TEXT_COLOR_DARK = "#ffffff",
  TITLE_DARK = "#ffffff",
  RECIPES_CARD_BG_DARK = "#171718",
  RECIPES_CARD_TEXT_DARK = "#ffffff",
  BOX_SHADOW_DARK = "0px 5px 35px rgba(0, 0, 0, 0.8)",
}

export type ThemeType = "light" | "dark";

export interface Theme {
  pageBackground: Colors;
  text: Colors;
  cardBackground: Colors;
  cardText: Colors;
  cardBoxShadow: Colors;
//   backgroundBtn: Colors;
//   fontSize: string;
}

type ThemesType = Record<ThemeType, Theme>;

export const Themes: ThemesType = {
  light: {
    pageBackground: Colors.PAGE_BG_LIGHT,
    text: Colors.TEXT_COLOR_LIGHT,
    cardBackground: Colors.RECIPES_CARD_BG_LIGHT,
    cardText: Colors.RECIPES_CARD_TEXT_LIGHT,
    cardBoxShadow: Colors.BOX_SHADOW_LIGHT,
    // backgroundSignUpBtn: Colors.TITLE_LIGHT ,
    // fontSize: "20px",
  },

  dark: {
    pageBackground: Colors.PAGE_BG_DARK,
    text: Colors.TEXT_COLOR_DARK,
    cardBackground: Colors.RECIPES_CARD_BG_DARK,
    cardText: Colors.RECIPES_CARD_TEXT_DARK,
    cardBoxShadow: Colors.BOX_SHADOW_DARK,
    // backgroundBtn: Colors.TITLE_LIGHT ,
    // fontSize: "16px",
  },
};
