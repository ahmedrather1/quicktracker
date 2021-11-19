import Auth0ProviderWithHistory from "../auth0Provider";
import { Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "./Header";

require("dotenv").config();

function App() {
  console.log("domain " + process.env.REACT_APP_AUTH0_DOMAIN);
  console.log("id " + process.env.REACT_APP_AUTH0_CLIENT_ID);

  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Header />
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
