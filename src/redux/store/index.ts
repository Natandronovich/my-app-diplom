import {configureStore} from "@reduxjs/toolkit";
import { appReducer } from "../redusers/appReduser";

export const store = configureStore({
    reducer: appReducer,
  });
  

  
export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
