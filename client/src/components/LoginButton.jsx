import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-link"
      onClick={() =>
        loginWithRedirect({
          // redirect_uri: "https://www.google.com/",
          returnTo: "https://www.google.com/",

          // redirect_uri: "http://localhost:5173/home",
        })
      }
    >
      Iniciar Sesión
    </button>
  );
};

export default LoginButton;
