import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Placeholder } from "react-bootstrap";
import Api from "../api/Api";

export const logIn = createAsyncThunk("login/loginProcess", async (action) => {
  let api = new Api();
  const user = await api.get("http://localhost:4000/users/" + action.email, {});
  console.log("userinfo from thunk + ", user);
  if (user.data.length === 0) {
    console.log("unregistered");
  } else {
    console.log("registered ", user.data);
  }

  return {
    login: {
      isLoggedIn: true,
      email: action.email,
      name: action.name,
    },
  };
});

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    login: { isLoggedIn: false, email: null, name: null },
  },
  reducers: {
    logOut: (state, action) => {
      console.log("logged out from slice");
      return { login: { isLoggedIn: false, email: null, name: null } };
    },
  },
  extraReducers: {
    [logIn.fulfilled]: (state, action) => {
      //console.log("from extra", action.payload.login.email);
      return {
        login: {
          isLoggedIn: true,
          email: action.payload.login.email,
          name: action.payload.login.name,
        },
      };
    },
  },
});

export const { logOut } = LoginSlice.actions;

export const loginSelector = (state) => state.login;

export default LoginSlice.reducer;
