import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import BooksReducer from "./BooksListSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
    booksList: BooksReducer,
  },
});
