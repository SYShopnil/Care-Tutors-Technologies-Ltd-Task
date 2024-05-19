import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

export const todoStore = () => {
  return configureStore({
    reducer: {
      todos: todoSlice,
    },
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof todoStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
