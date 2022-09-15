import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Shows {
  popularshows: [];
  Moviesrecommendedforyou: [];
  Top10TrendingMovies: [];
}

const initialState: Shows = {
  popularshows: [],
  Moviesrecommendedforyou: [],
  Top10TrendingMovies: [],
};

export const fetchpopularshows = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/popularshows")
    .then((res) => dispatch(getpMoviesrecommendedforyou(res.data)))
    .catch((err) => console.log(err));
};

export const fetchMoviesrecommendedforyou = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/Moviesrecommendedforyou")
    .then((res) => dispatch(getpopularshows(res.data)))
    .catch((err) => console.log(err));
};

export const fetchTop10TrendingMovies = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/Top10TrendingMovies")
    .then((res) => dispatch(gettoptenmovies(res.data)))
    .catch((err) => console.log(err));
};

export const polularshowsslice = createSlice({
  name: "popularmovies",
  initialState,
  reducers: {
    getpopularshows: (state, { payload }) => {
      state.popularshows = payload;
    },
    getpMoviesrecommendedforyou: (state, { payload }) => {
      state.Moviesrecommendedforyou = payload;
    },
    gettoptenmovies: (state, { payload }) => {
      state.Top10TrendingMovies = payload;
    },
  },
});

const { getpopularshows, getpMoviesrecommendedforyou, gettoptenmovies } =
  polularshowsslice.actions;
export const popularReducer = polularshowsslice.reducer;
