import React, { useContext } from "react";
import { StyledMain, mainStyles } from "./mainStyled";
import { Route, Routes } from "react-router-dom";
import {
  CheckAuthUser,
  Home,
  LoginForm,
  NotFoundComponent,
  Recipes,
  SignUpForm,
  SinglePost,
} from "../../ui";
import { ThemeContext } from "../../../themeContext";
import "../../../App.css";

export const Main = () => {
  const dataContext = useContext(ThemeContext);
  //   console.log("main page", dataContext);

  return (
    // <div className="container">
    <StyledMain
      myTheme={dataContext.currentTheme}
      themeStyles={dataContext.stylesForTheme}
    >
      <div style={mainStyles.mainContainer}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<NotFoundComponent />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/recipes/:id"
            element={
              <CheckAuthUser>
                <SinglePost />
              </CheckAuthUser>
            }
            // element={<SinglePost />}
          />
        </Routes>
      </div>
    </StyledMain>
    // </div>
  );
};
