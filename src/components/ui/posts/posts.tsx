import { useContext, useEffect, useState } from "react";
import { RecipeContainer, postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";
import { PostCard } from "./post";
import { Link } from "react-router-dom";

export interface RecipeItem {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

type RecipeItemArray = Array<RecipeItem>;

export const Recipes = () => {
  const dataContext = useContext(ThemeContext);

  const [recipes, setRecipes] = useState<RecipeItemArray>([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&cuisine=greek&cuisine=english&cuisine=turkey`,
      {
        method: "GET",
        headers: {
          "x-api-key": "e14e7905f7ae46fc8c3f11cf7c49d213",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.results);
      });
  }, []);

  return (
    <div style={postsStyles.postsContainer}>
      {recipes.map((item) => (
        <Link to={`/recipes/${item.id}`}>
          <PostCard data={item} />
        </Link>
      ))}
    </div>
  );
};
