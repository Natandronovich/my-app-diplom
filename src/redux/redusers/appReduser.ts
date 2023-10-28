
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecipeItem, SingleRecipeItem, initialStateType } from "./types";
import { axiosApiConfig } from "../../api/axiosConfig";

const initialState: initialStateType = {
  recipesData: [],
  singleRecipe: null,
  favoriteRecipes: [],
  loading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk<void, string>(
  "posts/fetchRecipes",
  async (category, { dispatch, rejectWithValue }) => {
    try {
      const result = await axiosApiConfig.get(`/complexSearch?${category}&number=50`);
      dispatch(addRecipes(result.data.results));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSingleRecipe = createAsyncThunk(
  "posts/fetchSingleRecipe",
  async (singleId:any, { dispatch, rejectWithValue }) => {
    try {
      const result = await axiosApiConfig.get(`/${singleId}/information`);
      dispatch(addSingleRecipe(result.data));
    }  catch (error: any) {
      return rejectWithValue(error.message);
    }

  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addRecipes: (state, action: PayloadAction<Array<RecipeItem>>) => {
      state.recipesData = action.payload;
    },
    addSingleRecipe: (state, action: PayloadAction<SingleRecipeItem>) => {
      state.singleRecipe = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favoriteRecipes.push(action.payload)
    },
    deleteFromFavorites: (state, action)=>{
      state.favoriteRecipes = state.favoriteRecipes.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchSingleRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state) => {
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
      .addCase(fetchRecipes.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { addToFavorites, addRecipes, addSingleRecipe, deleteFromFavorites } = appSlice.actions;

export const appReducer = appSlice.reducer;