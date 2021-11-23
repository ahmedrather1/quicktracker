import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import BooksReducer from "./BooksListSlice";
import MoviesReducer from "./MoviesListSlice";
import ShowsReducer from "./ShowsListSlice";
import SongsReducer from "./SongsListSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
    booksList: BooksReducer,
    moviesList: MoviesReducer,
    showsList: ShowsReducer,
    songsList: SongsReducer,
  },
});
