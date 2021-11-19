// remember to add to store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllBooks = createAsyncThunk(
  "entriesList/getAllBooks",
  async (input) => {
    let api = new Api();
    const books = await api.get(input.path, input.body);
  }
);

const BooksListSlice = createSlice({
  name: "booksList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllEntries.fulfilled]: (state, action) => {
      return { list: action.payload, loading: false };
    },
  },
});

export default EntriesListSlice.reducer;
