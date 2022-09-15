import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TokenService from "../component/Tokenservice";

export interface CounterState {
  movies: [];
  users: [];
  movies2: [];
  cards: [];
  answers: [];
}

const initialState: CounterState = {
  movies: [],
  users: [],
  movies2: [],
  cards: [],
  answers: [],
};

export const fetchmovies = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/employees")
    .then((res) => dispatch(getMovies(res.data)))
    .catch((err) => console.log(err));
};

export const fetchmovies2 = () => async (dispatch: any) => {
  console.log("hellohs");
  await axios
    .get("http://localhost:3000/movies")
    .then((res) => dispatch(getmovies2(res.data)))
    .catch((err) => console.log(err.msg));
};
export const deletemovies= (id: string) => async (dispatch: any) => {
  await axios
    .delete(`http://localhost:3000/employees/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const addmovies= (storemovie: any) => async (dispatch: any) => {
  console.log(storemovie, "storemovie");
  await axios
    .post("http://localhost:3000/employees", storemovie)
    .then((res: any) => dispatch(getMovies(res.data)))
    .catch((err: any) => console.log(err));
};

export const postloginusers= (values: any) => async (dispatch: any) => {
  await axios
    .post("http://localhost:3007/login", values)
    .then((res: any) => {
      console.log(res.data, "dsdsdsdsd");
      dispatch(loginusers(res.data));

      TokenService.setAccessToken(res.data.accessToken);
      TokenService.setRefreshToken(res.data.refreshToken);
    })

    .catch((err: any) => console.log(err));
};

export const editmovies = (data: any) => async (dispatch: any) => {
  await axios
    .put(`http://localhost:3000/employees/${data.id}`, data)
    .then((res) => console.log(res.data))

    .catch((err) => console.log(err));
};

export const fetchcards = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/cards")
    .then((res) => dispatch(getcards(res.data)))
    .catch((err) => console.log(err));
};
export const fetchanswer = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/answers")
    .then((res) => dispatch(getanswer(res.data)))
    .catch((err: any) => console.log(err));
};

export const counterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state, { payload }) => {
      state.movies = payload;
    },
    loginusers: (state, { payload }) => {
      state.users = payload;
    },
    getmovies2: (state, { payload }) => {
      state.movies2 = payload;
    },
    getcards: (state, { payload }) => {
      state.cards = payload;
    },
    getanswer: (state, { payload }) => {
      state.answers = payload;
    },
  }
});

const { getMovies, loginusers, getmovies2, getcards, getanswer } =
  counterSlice.actions;

export const moviessReducer = counterSlice.reducer;
