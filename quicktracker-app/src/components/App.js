import Auth0ProviderWithHistory from "./auth0Provider";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppShell from "./AppShell";
import styled from "styled-components";
import "../index.css";

require("dotenv").config();

function App() {
  return (
    <Auth0ProviderWithHistory>
      <AppShell />
    </Auth0ProviderWithHistory>
  );
}

export default App;
