import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { moviessReducer } from "./slice";

export const store = configureStore({
  reducer: {
    movies: moviessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
