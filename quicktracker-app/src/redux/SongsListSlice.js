// remember to add to store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllSongs = createAsyncThunk(
  "songsList/getAllSongs",
  async (input) => {
    let api = new Api();

    const songs = await api.get(
      process.env.REACT_APP_API_PATH + "mediaitems/songs/" + input.email
    );
    return songs.data;
  }
);

export const deleteSong = createAsyncThunk(
  "songsList/deleteSong",
  async (input) => {
    let api = new Api();

    await api.delete(process.env.REACT_APP_API_PATH + "mediaitems/" + input.id);
  }
);

export const clearList = createAsyncThunk(
  "booksList/clearList",
  async (input) => {
    return [];
  }
);

const SongsListSlice = createSlice({
  name: "songsList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllSongs.fulfilled]: (state, action) => {
      return { list: action.payload, loading: false };
    },
    [clearList.fulfilled]: (state, action) => {
      console.log("clearing list");
      return { list: action.payload, loading: false };
    },

    [deleteSong.fulfilled]: (state, action) => {},
  },
});

export default SongsListSlice.reducer;
