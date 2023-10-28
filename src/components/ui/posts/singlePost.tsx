import { useContext, useEffect, useState } from "react";
import {
  ButtonSinglePost,
  SingleRecipeContainer,
  postsStyles,
} from "./postsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../../../themeContext";
import { Bars } from "react-loader-spinner";

import "./postStyle.css";
// import heartFill from "../../../assets/heart-fill.png";
// import heart from "../../../assets/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  fetchSingleRecipe,
} from "../../../redux/redusers/appReduser";
import { AppDispatch, StoreType } from "../../../redux/store";
import { ErrorMessage } from "../../shared/errorMessage";

export const SinglePost = () => {
  const params = useParams();
  const dataContext = useContext(ThemeContext);
  const { singleRecipe, loading, error, favoriteRecipes } = useSelector(
    (state: StoreType) => state
  );

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSingleRecipe(params.id));
  }, []);

  if (loading) {
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

  //ф-ция по добавлению или удалению пользователей в favorite список
  // const onClickInFavorite = (idRecipe: any) => {
  //   dispatch(addToFavorites(idRecipe));
  // };

  // const onClickInFavorite = (id) => {
  //   if (favoriteRecipe.includes(id)) {
  //       setFavoriteRecipe((prev) => prev.filter((id) => id !== id));
  //   } else {
  //       setFavoriteRecipe((prev) => [...prev, id]);
  //   }
  // };

  return (
    <div style={postsStyles.singleRecipeContainer}>
      {error && <ErrorMessage errorText={error} />}
      <div>
        <h3
          className={
            dataContext.currentTheme === "light"
              ? "title title-recipe"
              : "title dark-theme title-recipe"
          }
        >
          {singleRecipe?.title}
        </h3>
      </div>
      <SingleRecipeContainer
        myTheme={dataContext.currentTheme}
        themeStyles={dataContext.stylesForTheme}
      >
        <div className="single-post__image">
          <img src={singleRecipe?.image} alt={singleRecipe?.title}></img>
        </div>

        <div className="instructions">
          <h4 className="instructions-descr">
            Ready in minutes: {singleRecipe?.readyInMinutes}
          </h4>
          <p>{singleRecipe?.instructions.replace(/<\/?[a-zA-Z]+>/gi, "")}</p>
        </div>
        <div>
          <div className="single-recipe-btns">
            <ButtonSinglePost
              myTheme={dataContext.currentTheme}
              themeStyles={dataContext.stylesForTheme}
              onClick={handleGoBack}
            >
              go back
            </ButtonSinglePost>

            <ButtonSinglePost
              myTheme={dataContext.currentTheme}
              themeStyles={dataContext.stylesForTheme}
              onClick={() => {
                dispatch(addToFavorites(singleRecipe));
              }}
            >
              To favorite
            </ButtonSinglePost>
          </div>
        </div>
      </SingleRecipeContainer>
    </div>
  );
};
