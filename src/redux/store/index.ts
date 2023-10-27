import {configureStore} from "@reduxjs/toolkit";
import { appReducer } from "../redusers/appReduser";

export const store = configureStore({
    reducer: appReducer,
  });
//   reducer: {
//     newsDataCards: recipesDataReducer,
//     userData: singleRecipeReducer,
// }


export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
