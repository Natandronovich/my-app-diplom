import { ChangeEvent, useContext, useEffect, useState } from "react";
import { postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";
import { PostCard } from "./post";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { ErrorMessage } from "../../shared/errorMessage";
import "./postStyle.css";
import searchImg from "../../../assets/search.svg";
import { categories } from "./recipesData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../../redux/store";
import { fetchRecipes } from "../../../redux/redusers/appReduser";

export const Recipes = () => {
  const dataContext = useContext(ThemeContext);

  const [categoryId, setCategoryId] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { recipesData, loading, error } = useSelector(
    (state: StoreType) => state
  );
  const dispatch = useDispatch<AppDispatch>();

  const category = categoryId ? `cuisine=${categoryId}` : "";

  useEffect(() => {
    dispatch(fetchRecipes(`${category}`));
  }, [categoryId]);

  if (loading) {
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
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container recipes">
      <div className="top">
        <div className="search">
          <img className="search__img" src={searchImg} alt="search" />
          <input
            value={searchValue}
            onChange={onChangeSearchValue}
            type="text"
            placeholder="Find recipe..."
          />
        </div>

        <ul
          className={
            dataContext.currentTheme === "light" ? "tags " : "tags dark"
          }
        >
          {categories.map((obj) => (
            <li
              onClick={() => setCategoryId(obj.name)}
              className={categoryId === obj.name ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={postsStyles.postsContainer}>
        {error && <ErrorMessage errorText={error} />}

        {recipesData
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
