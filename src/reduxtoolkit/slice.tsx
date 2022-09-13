import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TokenService from "../component/Tokenservice";

export interface CounterState {
  movies: [];
  users: [];
  movies2: [];
  cards: [];
}

const initialState: CounterState = {
  movies: [],
  users: [],
  movies2: [],
  cards: [],
};

export const fetchmovies: any = () => async (dispatch: any) => {
  await axios
    .get("http://localhost:3000/employees")
    .then((res) => dispatch(getMovies(res.data)))
    .catch((err) => console.log(err));
};

export const fetchmovies2: any = () => async (dispatch: any) => {
  console.log("hellohs");
  await axios
    .get("http://localhost:3000/movies")
    .then((res) => dispatch(getmovies2(res.data)))
    .catch((err) => console.log(err.msg));
};
export const deletemovies: any = (id: any) => async (dispatch: any) => {
  await axios
    .delete(`http://localhost:3000/employees/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const addmovies: any = (storemovie: any) => async (dispatch: any) => {
  console.log(storemovie, "storemovie");
  await axios
    .post("http://localhost:3000/employees", storemovie)
    .then((res: any) => dispatch(getMovies(res.data)))
    .catch((err: any) => console.log(err));
};

export const postloginusers: any = (values: any) => async (dispatch: any) => {
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
  await axios.get("http://localhost:3000/cards")
  .then((res)=>dispatch(getcards(res.data)))
  .catch((err)=>console.log(err))
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
    getcards:(state,{payload})=>{
      state.cards=payload;
    }
  },
  // extraReducers: {
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchmovies.pending, (state:any) => {
  //       state. movies = [];
  //         state.loading = "loading";
  //     });
  //     builder.addCase(
  //       fetchmovies.fulfilled, (state:any, { payload }:any) => {
  //           state. movies = payload;
  //           state.loading = "loaded";
  //     });
  //     builder.addCase(
  //       fetchmovies.rejected,(state:any, action:any) => {
  //           state.loading = "error";
  //           state.error = action.error.message;
  //     });
  //  }
  //   },
});

const { getMovies, loginusers, getmovies2,getcards } = counterSlice.actions;

export const moviessReducer = counterSlice.reducer;
