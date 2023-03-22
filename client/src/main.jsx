import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-u533rni3.us.auth0.com"
    clientId="9sbeNRBA6R9qs2G1NWjWiTYs2LVZxEes"
    authorizationParams={{
      redirect_uri: window.location.origin,
      // redirect_uri: "https://localhost:5173/home",
    }}
  >
    <App />
  </Auth0Provider>
);
