import { useContext, useEffect, useState } from "react";
import {
  ButtonSinglePost,
  SingleRecipeContainer,
  postsStyles,
} from "./postsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../../../themeContext";
import { AuthContext } from "../../../authContext/authProvider";
import { RecipeItem } from "./posts";
import { Bars } from "react-loader-spinner";
import { Button } from "../../shared/button/button";

export const SinglePost = () => {
  const params = useParams();
  console.log("params", params);

  const dataContext = useContext(ThemeContext);

  const dataAuthContext = useContext(AuthContext);
  console.log("AUTH", dataAuthContext);

  const navigate = useNavigate();

  const [currentRecipe, setCurrentRecipe] = useState<RecipeItem>();
  const [isLoadind, setIsLoadding] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoadding(true);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?random=true/${params.id}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "e14e7905f7ae46fc8c3f11cf7c49d213",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("результат запроса", data.results);
        setCurrentRecipe(data.results);
        setError("");
        console.log("current recipe", currentRecipe);
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoadding(false));
  }, []);

  if (isLoadind) {
    return (
      <Bars
        height="80"
        width="80"
        color="#5C4EAE"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  // const logout = () => {
  //   dataAuthContext.logoutF();
  //   navigate("/");
  // };

  return (
    <div style={postsStyles.singleRecipeContainer}>
      <h2
        className={
          dataContext.currentTheme === "light" ? "title" : "title dark-theme"
        }
      >
        single recipe
      </h2>
      <SingleRecipeContainer
        myTheme={dataContext.currentTheme}
        themeStyles={dataContext.stylesForTheme}
      >
        {/* <h2>{currentRecipe.name}</h2> */}
        <div>
          <ButtonSinglePost
            myTheme={dataContext.currentTheme}
            themeStyles={dataContext.stylesForTheme}
            onClick={handleGoBack}
          >
            go back
          </ButtonSinglePost>
          {/* <Button
          onClick={handleGoBack}
          id="goBack"
          className="button"
          buttonText="Go back"
        /> */}
        </div>
      </SingleRecipeContainer>
    </div>
  );
};
