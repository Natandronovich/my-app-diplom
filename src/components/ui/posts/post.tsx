import { FC, useContext } from "react";
import { RecipeContainer, postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";
import { RecipeItem } from "../../../redux/redusers/types";

interface RecipeCardProps {
  data: RecipeItem;
}

export const PostCard: FC<RecipeCardProps> = ({ data }) => {
  const dataContext = useContext(ThemeContext);

  return (
    <RecipeContainer
      key={data.id}
      myTheme={dataContext.currentTheme}
      themeStyles={dataContext.stylesForTheme}
    >
      <img style={postsStyles.postImage} src={data.image} alt="post_img"></img>
      <h3 style={postsStyles.postText}>{data.title}</h3>
    </RecipeContainer>
  );
};
