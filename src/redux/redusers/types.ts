
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
    extendedIngredients: Array<extendedIngrType>;
  }

  interface extendedIngrType{
      id?: number;
      aisle?: string;
      image?: string;
      consistency?: string;
      name?: string;
      nameClean?: string;
      original: string;
      originalName?: string;
      amount?: 0.25,
      unit?: string;
  }


  export interface RecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }
  