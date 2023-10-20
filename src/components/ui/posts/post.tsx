import { FC, useContext } from "react";
import { RecipeItem } from "./posts";
import { RecipeContainer, postsStyles } from "./postsStyled";
import { ThemeContext } from "../../../themeContext";
import { Button } from "../../shared/button/button";

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
      <img style={postsStyles.postImage} src={data.image}></img>
      <h3 style={postsStyles.postText}>{data.title}</h3>
    </RecipeContainer>
  );
};

{
  /* <div>
<Button onClick={}
  id="post-button"
  className="post-button"
  buttonText="Click here"
/>
</div> */
}
