
  export type initialStateType = {
    recipesData: Array<RecipeItem>;
    singleRecipe:SingleRecipeItem | null;
    favoriteRecipes: Array<SingleRecipeItem>;
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
    summary?: string;
    sourceUrl?: string;
  }


  export interface RecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }
  