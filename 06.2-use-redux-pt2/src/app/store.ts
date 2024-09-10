import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export interface CounterState {
  counter: {
    value: number;
  };
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
