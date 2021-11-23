import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/LoginSlice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import SongsComponent from "./SongsComponent";
import ShowsComponent from "./ShowsComponent";
import MoviesComponent from "./MoviesComponent";
import BooksComponent from "./BooksComponent";
import PostMedia from "./PostMedia";
import Footer from "./Footer";
import "../index.css";
import { getAllBooks } from "../redux/BooksListSlice";
import { getAllMovies } from "../redux/MoviesListSlice";
import { getAllShows } from "../redux/ShowsListSlice";
import { getAllSongs } from "../redux/SongsListSlice";

require("dotenv").config();

function AppShell() {
  const { isAuthenticated, user } = useAuth0();
  let dispatch = useDispatch();

  const loginState = useSelector((state) => state.login);

  const Background = styled.div`
    position: relative;
    background-color: #efefef;
    font-family: "Comfortaa";
    min-height: "100vh";
    height: "100vh";
  `;

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(logIn(user)).then((loginData) => {
        let input = {
          email: loginData.payload.login.email,
        };

        dispatch(getAllBooks(input)).then(() =>
          dispatch(getAllMovies(input)).then(() => {
            dispatch(getAllShows(input)).then(() => {
              dispatch(getAllSongs(input)).then(() => {});
            });
          })
        );
      });
    } else {
      dispatch(logOut());
    }
  }, [isAuthenticated]);

  return (
    <div className="App">
      <Background>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/books" component={BooksComponent} />
          <Route path="/postmedia" component={PostMedia} />
          <Route path="/movies" exact component={MoviesComponent} />
          <Route path="/shows" exact component={ShowsComponent} />
          <Route path="/songs" exact component={SongsComponent} />
        </Switch>
        <Footer />
      </Background>
    </div>
  );
}

export default AppShell;
