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

export const deleteBook = createAsyncThunk(
  "booksList/deleteBook",
  async (input) => {
    let api = new Api();

    await api.delete(process.env.REACT_APP_API_PATH + "mediaitems/" + input.id);
  }
);

const BooksListSlice = createSlice({
  name: "booksList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllBooks.fulfilled]: (state, action) => {
      return { list: action.payload, loading: false };
    },

    [deleteBook.fulfilled]: (state, action) => {},
  },
});

export default BooksListSlice.reducer;
