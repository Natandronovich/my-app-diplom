import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./types";
import { RecipeItem } from "../../components/ui/posts/posts";
import { SingleRecipeItem } from "../../components/ui/posts/singlePost";

const initialState: initialStateType = {
  recipesData: [],
  singleRecipe: null,
  favoriteRecipes: [{}],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addRecipes: (state, action:PayloadAction<Array<RecipeItem>>) => {
      state.recipesData = action.payload;
    },
    addSingleRecipe: (state, action:PayloadAction<SingleRecipeItem>) => {
      state.singleRecipe = action.payload;
    },
    // PayloadAction<number>PayloadAction<Array<object>>
    addToFavorites: (state, action) => {
      // state.favoriteRecipes.push(action.payload)
      state.favoriteRecipes = action.payload;

      // state.favoriteRecipes = state.favoriteRecipes.filter((id) => id !== action.payload);
      console.log("FAVORITE FROM REDUX", state.favoriteRecipes);
    },
    // deleteFromFavorites: (state, action){
    //   state.favoriteRecipes = state.favoriteRecipes.filter((id) => id !== action.payload);
    // },
  },
});

export const { addToFavorites, addRecipes, addSingleRecipe } = appSlice.actions;

export const appReducer = appSlice.reducer;

// const onClickInFavorite = (id) => {
//   if (favoriteRecipe.includes(id)) {
//       setFavoriteRecipe((prev) => prev.filter((id) => id !== id));
//   } else {
//       setFavoriteRecipe((prev) => [...prev, id]);
//   }
// };

// addToFavorites: (state, action: PayloadAction<Product>) => {
//   const favoriteRecipes= state.products.find(
//     (recipes) => Recipe.item.id === action.payload.id,
//   );

//   if (recipes) {
//     state.recipes = changeRecipes(state.recipes, {
//       item: action.payload,
//       count: existProduct.count + 1,
//     });
//   } else {
//     state.recipes = [
//       ...state.recipes,
//       { item: action.payload, count: 1 },
//     ];
//   }

//   saveProducts(state.products);
