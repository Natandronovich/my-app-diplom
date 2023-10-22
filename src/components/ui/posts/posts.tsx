import { useContext, useEffect, useState } from "react";
import { postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";
import { PostCard } from "./post";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { ErrorMessage } from "../../shared/errorMessage";
import "./postStyle.css";

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

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setIsLoadding(true);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&cuisine=greek&cuisine=spain&cuisine=english`,
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

  //функция по поиску рецепта
  const onChangeSearchValue = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container recipes">
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Find recipe..."
        />
      </div>
      <div style={postsStyles.postsContainer}>
        {error && <ErrorMessage errorText={error} />}

        {recipes
          .filter((item) => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((item) => (
            <Link to={`/recipes/${item.id}`}>
              <PostCard data={item} />
            </Link>
          ))}
      </div>
    </div>
  );
};
