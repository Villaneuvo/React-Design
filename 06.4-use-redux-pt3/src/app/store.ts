// This File is to store global variable of redux
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
