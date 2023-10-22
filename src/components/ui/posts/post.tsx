import { FC, useContext } from "react";
import { RecipeItem } from "./posts";
import { RecipeContainer, postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";

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
