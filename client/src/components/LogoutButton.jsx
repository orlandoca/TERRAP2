import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-link"
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
    >
      Cerrar Sesion
    </button>
  );
};

export default LogoutButton;
