import React, { useContext } from "react";
import { StyledMain, mainStyles } from "./mainStyled";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../loginForm/loginForm";
import { Home } from "../home/home";
import { NotFoundComponent } from "../empty/empty";
import { ThemeContext } from "../../../themeContext";

export const Main = () => {
  const dataContext = useContext(ThemeContext);
  //   console.log("main page", dataContext);

  return (
    <StyledMain
      myTheme={dataContext.currentTheme}
      themeStyles={dataContext.stylesForTheme}
    >
      <div style={mainStyles.mainContainer}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </div>
    </StyledMain>
  );
};
