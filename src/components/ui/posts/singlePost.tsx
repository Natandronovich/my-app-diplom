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

import "./postStyle.css";

export interface SingleRecipeItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
  instructions: string;
  readyInMinutes: number;
}

export const SinglePost = () => {
  const params = useParams();
  console.log("params", params);

  const dataContext = useContext(ThemeContext);

  const dataAuthContext = useContext(AuthContext);
  console.log("AUTH", dataAuthContext);

  const navigate = useNavigate();

  const [currentRecipe, setCurrentRecipe] = useState<SingleRecipeItem>();
  const [isLoadind, setIsLoadding] = useState<boolean>(false);
  const [error, setError] = useState("");

  // состояние для добавление в избарнное- изначально пустой массив
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  useEffect(() => {
    setIsLoadding(true);
    fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?x-api-key=e14e7905f7ae46fc8c3f11cf7c49d213&`,
      {
        method: "GET",
        headers: {
          "x-api-key": "e14e7905f7ae46fc8c3f11cf7c49d213",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("результат запроса", data);
        setCurrentRecipe(data);
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

  //ф-ция по добавлению или удалению пользователей в favorite список
  //   const onClickInFavorite = (id) => {
  //     if (favoriteRecipe.includes(id)) {
  //         setFavoriteRecipe((prev) => prev.filter((id) => id !== id));
  //     } else {
  //         setFavoriteRecipe((prev) => [...prev, id]);
  //     }
  //   };

  return (
    <div style={postsStyles.singleRecipeContainer}>
      <div>
        <h3
          className={
            dataContext.currentTheme === "light"
              ? "title title-recipe"
              : "title dark-theme title-recipe"
          }
        >
          {currentRecipe?.title}
        </h3>
      </div>
      <SingleRecipeContainer
        myTheme={dataContext.currentTheme}
        themeStyles={dataContext.stylesForTheme}
      >
        <div className="single-post__image">
          <img src={currentRecipe?.image} alt={currentRecipe?.title}></img>
        </div>
        <div className="instructions">
          <h4 className="instructions-descr">
            Ready in minutes: {currentRecipe?.readyInMinutes}
          </h4>
          <p>{currentRecipe?.instructions.replace(/<\/?[a-zA-Z]+>/gi, "")}</p>
        </div>
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
