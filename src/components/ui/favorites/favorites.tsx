import { useNavigate, useParams } from "react-router-dom";
import { deleteFromFavorites } from "../../../redux/redusers/appReduser";
import {
  RecipeContainer,
  SingleRecipeContainer,
  postsStyles,
} from "../posts/postsStyled";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext";
import { AppDispatch, StoreType } from "../../../redux/store";
import { FavoriteCard } from "./favoritesCard";

export const Favorites = (
  {
    // key,
    // id,
    // image,
    // text,
    // social,
    // title,
    // subtext,
    // imageFood,
    // socialTitle,
  }
) => {
  const { favoriteRecipes } = useSelector((state: StoreType) => state);
  console.log("favoriteRecipes", favoriteRecipes);

  return (
    <>
      <div className="container recipes">
        <div style={postsStyles.postsContainer}>
          {favoriteRecipes.map((item) => (
            <FavoriteCard data={item} />
          ))}
        </div>
      </div>
    </>
  );
};
