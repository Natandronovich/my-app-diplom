import { useContext, useEffect } from "react";
import {
  ButtonSinglePost,
  SingleRecipeContainer,
  postsStyles,
} from "./postsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../../../themeContext";
import { Bars } from "react-loader-spinner";

import "./postStyle.css";
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
  const { singleRecipe, loading, error } = useSelector(
    (state: StoreType) => state
  );

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSingleRecipe(params.id));
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Bars
          height="80"
          width="80"
          color="#5C4EAE"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

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
          <h3 className="instructions-descr-subtitle">Ingridients:</h3>
          <ul className="recipe-ingredients__list">
            {singleRecipe?.extendedIngredients.map((item) => (
              <li className="recipe-ingredients" key={item.id}>
                {item.original}
              </li>
            ))}
          </ul>
          <h3 className="instructions-descr-title">Instructions:</h3>
          <p className="instructions-descr-text">
            {singleRecipe?.instructions.replace(/<\/?[a-zA-Z]+>/gi, "")}
          </p>
        </div>
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
      </SingleRecipeContainer>
    </div>
  );
};
