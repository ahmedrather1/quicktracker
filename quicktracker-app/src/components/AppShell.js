import Auth0ProviderWithHistory from "./auth0Provider";

import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/LoginSlice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

require("dotenv").config();

function AppShell() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(logIn(user));
    } else {
      dispatch(logOut());
    }
  }, [isAuthenticated]);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default AppShell;
