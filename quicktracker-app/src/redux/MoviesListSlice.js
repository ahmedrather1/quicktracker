// remember to add to store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllMovies = createAsyncThunk(
  "moviesList/getAllMovies",
  async (input) => {
    let api = new Api();

    const movies = await api.get(
      process.env.REACT_APP_API_PATH + "mediaitems/movies/" + input.email
    );
    return movies.data;
  }
);

export const deleteMovie = createAsyncThunk(
  "moviesList/deleteMovie",
  async (input) => {
    let api = new Api();

    await api.delete(process.env.REACT_APP_API_PATH + "mediaitems/" + input.id);
  }
);

export const clearList = createAsyncThunk(
  "moviesList/clearList",
  async (input) => {
    return [];
  }
);

const MoviesListSlice = createSlice({
  name: "moviesList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllMovies.fulfilled]: (state, action) => {
      return { list: action.payload, loading: false };
    },
    [clearList.fulfilled]: (state, action) => {
      console.log("clearing list");
      return { list: action.payload, loading: false };
    },

    [deleteMovie.fulfilled]: (state, action) => {},
  },
});

export default MoviesListSlice.reducer;
