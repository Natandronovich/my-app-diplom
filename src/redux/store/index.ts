import {configureStore} from "@reduxjs/toolkit";
import { appReducer } from "../redusers/appReduser";

export const store = configureStore({
    reducer: appReducer,
  });
  

console.log('my store', store)

// export type StoreType = ReturnType<typeof store.getState>

// export  type AppDispatch = typeof store.dispatch


export type StoreType = ReturnType<typeof store.getState>;



export type AppDispatch = typeof store.dispatch;
