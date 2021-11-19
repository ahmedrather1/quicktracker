import Auth0ProviderWithHistory from "./auth0Provider";
import { Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "./Header";

require("dotenv").config();

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Header />
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
