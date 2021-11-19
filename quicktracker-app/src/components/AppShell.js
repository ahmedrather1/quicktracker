import Auth0ProviderWithHistory from "./auth0Provider";
import Api from "../api/Api";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/LoginSlice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import HomeComponent from "./HomeComponent";
import SongsComponent from "./SongsComponent";
import ShowsComponent from "./ShowsComponent";
import MoviesComponent from "./MoviesComponent";
import BooksComponent from "./BooksComponent";

import PostMedia from "./PostMedia";

require("dotenv").config();

function AppShell() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(logIn(user)).then((data) =>
        console.log("state from shell -> with then", data)
      );
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
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/books" component={BooksComponent} />
        <Route path="/postmedia" component={PostMedia} />
        <Route path="/movies" exact component={MoviesComponent} />
        <Route path="/shows" exact component={ShowsComponent} />
        <Route path="/songs" exact component={SongsComponent} />
      </Switch>
    </div>
  );
}

export default AppShell;
