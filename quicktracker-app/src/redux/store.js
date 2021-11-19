import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
  },
});
