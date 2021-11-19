import Auth0ProviderWithHistory from "./auth0Provider";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppShell from "./AppShell";

require("dotenv").config();

function App() {
  const loginState = useSelector((state) => state.login);

  useEffect(() => {
    console.log("login info: " + loginState.login.name);
  });
  return (
    <Auth0ProviderWithHistory>
      <AppShell />
    </Auth0ProviderWithHistory>
  );
}

export default App;
