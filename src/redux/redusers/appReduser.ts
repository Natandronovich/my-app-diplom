import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
  recipesData: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {

  },
});

// export const {} = appSlice.actions;

export const appReducer = appSlice.reducer;