import { RecipeItem } from "../../components/ui/posts/posts";
import { SingleRecipeItem } from "../../components/ui/posts/singlePost";

  
  export type initialStateType = {
    recipesData: Array<RecipeItem>;
    singleRecipe:SingleRecipeItem | null;
    // chefsData: Array<dataChefsObj>;
    favoriteRecipes: Array<object>;
  };