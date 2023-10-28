// import { RecipeItem } from "../../components/ui/posts/posts";

  
  export type initialStateType = {
    recipesData: Array<RecipeItem>;
    singleRecipe:SingleRecipeItem | null;
    favoriteRecipes: Array<SingleRecipeItem>;
    // favoriteRecipes: any;
    loading: boolean,
    error: any,
  };

  export interface SingleRecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
    instructions: string;
    readyInMinutes: number;
  }


  export interface RecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }
  
  // type RecipeItemArray = Array<RecipeItem>;