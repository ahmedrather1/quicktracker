// remember to add to store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllShows = createAsyncThunk(
  "showsList/getAllShows",
  async (input) => {
    let api = new Api();

    const shows = await api.get(
      process.env.REACT_APP_API_PATH + "mediaitems/shows/" + input.email
    );
    return shows.data;
  }
);

export const deleteShow = createAsyncThunk(
  "showsList/deleteShow",
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

const ShowsListSlice = createSlice({
  name: "showsList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllShows.fulfilled]: (state, action) => {
      return { list: action.payload, loading: false };
    },
    [clearList.fulfilled]: (state, action) => {
      console.log("clearing list");
      return { list: action.payload, loading: false };
    },

    [deleteShow.fulfilled]: (state, action) => {},
  },
});

export default ShowsListSlice.reducer;
