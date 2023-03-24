import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "Navy" }}
      >
        <div className="col-sm-3 col-lg-2">
          <div className="col ">
            <img
              src="https://i.imgur.com/J5cQGer.png"
              width="100"
              height="50"
              alt="Terrap Logo"
              className="mx-auto my-auto"
            />
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* buscar */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button className="btn" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>

        {/* fin buscar */}

        {/* perfil */}
        <div className="nav-item dropdown m-auto text-bg-light">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-fill"></i>Perfil
          </a>
          <div className="dropdown-menu">
            {isAuthenticated ? (
              <div>
                <Profile />
                <LogoutButton />
              </div>
            ) : (
              //* llama a los siguientes componentes si NO ESTA LOGUEADO */
              <LoginButton />
            )}
          </div>
        </div>

        {/* fin perfil */}
      </nav>
      <hr className="hr bg-secondary" />
    </div>
  );
}
