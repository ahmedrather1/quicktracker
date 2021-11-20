// remember to add to store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllBooks = createAsyncThunk(
  "booksList/getAllBooks",
  async (input) => {
    let api = new Api();

    const books = await api.get(
      process.env.REACT_APP_API_PATH + "mediaitems/books/" + input.email
    );
    return books.data;
  }
);

const BooksListSlice = createSlice({
  name: "booksList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllBooks.fulfilled]: (state, action) => {
      console.log("from fulfilled", action.payload);
      return { list: action.payload, loading: false };
    },
    [getAllBooks.pending]: (state, action) => {
      return { list: [], loading: true };
    },
  },
});

export default BooksListSlice.reducer;
