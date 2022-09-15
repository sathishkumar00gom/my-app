import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { popularReducer } from "./popularshows/popularslice";
import { moviessReducer } from "./slice";

export const store = configureStore({
  reducer: {
    movies: moviessReducer,
    popularshows: popularReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
