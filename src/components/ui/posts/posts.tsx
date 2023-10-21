import { useContext, useEffect, useState } from "react";
import { postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";
import { PostCard } from "./post";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { ErrorMessage } from "../../shared/errorMessage";

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
  const [isLoadind, setIsLoadding] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoadding(true);
    fetch(`https://api.spoonacular.com/recipes/complexSearch?random=true`, {
      method: "GET",
      headers: {
        "x-api-key": "e14e7905f7ae46fc8c3f11cf7c49d213",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.results);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoadding(false));
  }, []);

  if (isLoadind) {
    return (
      <>
        <Bars
          height="80"
          width="80"
          color="#5C4EAE"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </>
    );
  }

  return (
    <div style={postsStyles.postsContainer}>
      {error && <ErrorMessage errorText={error} />}
      {recipes.map((item) => (
        <Link to={`/recipes/${item.id}`}>
          <PostCard data={item} />
        </Link>
      ))}
    </div>
  );
};
