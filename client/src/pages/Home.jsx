import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { MyRoutes } from "../routes/routes";

export default function Home() {
  useEffect(() => {
    console.log("hola");
  }, []);

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h3> Bienvenido {user.name}</h3>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">Favor iniciar sesión</h1>
          <button
            className="btn btn-success position-relative mt-4"
            onClick={() => loginWithRedirect()}
          >
            Iniciar Sesión
          </button>
        </div>
      )}
    </div>
  );
}
