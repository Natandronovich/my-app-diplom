import { FC, useContext } from "react";
import { SingleRecipeItem } from "../../../redux/redusers/types";
import {
  ButtonSinglePost,
  FavoriteContainer,
  RecipeContainer,
} from "../posts/postsStyled";
import { ThemeContext } from "../../../themeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { deleteFromFavorites } from "../../../redux/redusers/appReduser";

interface FavoriteCardProps {
  data: SingleRecipeItem;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ data }) => {
  const dataContext = useContext(ThemeContext);

  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <FavoriteContainer
      key={data.id}
      myTheme={dataContext.currentTheme}
      themeStyles={dataContext.stylesForTheme}
    >
      <div className="single-post__image">
        <img src={data.image} alt={data.title}></img>
      </div>

      <div className="instructions">
        <h4 className="instructions-descr">
          Ready in minutes: {data.readyInMinutes}
        </h4>
        <p>{data.instructions.replace(/<\/?[a-zA-Z]+>/gi, "")}</p>
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
              dispatch(deleteFromFavorites(data.id));
            }}
          >
            Delete
          </ButtonSinglePost>
        </div>
      </div>
    </FavoriteContainer>
  );
};
