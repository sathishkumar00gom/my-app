import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Shows {
  popularshows: [];
  Moviesrecommendedforyou:[];
}

const initialState: Shows = {
  popularshows: [],
  Moviesrecommendedforyou:[]
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

export const polularshowsslice = createSlice({
  name: "popularmovies",
  initialState,
  reducers: {
    getpopularshows: (state, { payload }) => {
      state.popularshows = payload;
    },
    getpMoviesrecommendedforyou: (state, { payload }) => {
        state.Moviesrecommendedforyou = payload;
      }
  },
});

const {getpopularshows,getpMoviesrecommendedforyou} = polularshowsslice.actions;
export const popularReducer = polularshowsslice.reducer;
