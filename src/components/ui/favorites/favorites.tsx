import { postsStyles } from "../posts/postsStyled";
import { useSelector } from "react-redux";
import { StoreType } from "../../../redux/store";
import { FavoriteCard } from "./favoritesCard";

import "./favorite.css";

export const Favorites = () => {
  const { favoriteRecipes } = useSelector((state: StoreType) => state);

  return (
    <>
      <div className="container recipes">
        <div style={postsStyles.postsContainer}>
          {favoriteRecipes.map((item) => (
            <FavoriteCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};
