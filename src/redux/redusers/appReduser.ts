// import { Recipes } from './../../components/ui/posts/posts';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecipeItem, SingleRecipeItem, initialStateType } from "./types";
import { axiosApiConfig } from "../../api/axiosConfig";

const initialState: initialStateType = {
  recipesData: [],
  singleRecipe: null,
  favoriteRecipes: [{}],
  loading: false,
  error: null,
};

export const fetchRecipes =  createAsyncThunk<void, string>(
  "posts/fetchRecipes",
  async (category, { dispatch, rejectWithValue }) => {
    try{
      const result = await axiosApiConfig.get('/complexSearch?${category}')
      dispatch(addRecipes(result.data.results))
    }catch{

    }
    })


export const fetchSingleRecipe =  createAsyncThunk<void, string>(
  "posts/fetchSingleRecipe",
  async (singleId, { dispatch, rejectWithValue }) => {
    try{
      return fetch(`https://api.spoonacular.com/recipes/${singleId}/information`, {
        method: "GET",
        headers: {
          "x-api-key": "e14e7905f7ae46fc8c3f11cf7c49d213",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addSingleRecipe(data))})
    }catch(error:any ){
      return rejectWithValue(error.message)
      }
    })


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
  extraReducers: (builder) =>
    builder
      .addCase(fetchSingleRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        // state.singleRecipe = action.payload;
        state.loading = false;
      })
      .addCase(fetchSingleRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        // state.recipesData = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

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
