import Auth0ProviderWithHistory from "./auth0Provider";
import Api from "../api/Api";
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

  /*
  const loginPromise = (userObj) => {
    return new Promise((resolve, reject) => {
      dispatch(logIn(userObj));
      resolve();
    });
  };
  */

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(logIn(user)).then((data) =>
        console.log("state from shell -> with then", data)
      );

      //let api = new Api();
      //let str = "http://localhost:4000/users/" + loginState.login.email;
      //api.get("http://localhost:4000/users/" + loginState.login.email, {});
    } else {
      dispatch(logOut());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log("state from shell - loginState", loginState);
  }, [loginState]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default AppShell;
