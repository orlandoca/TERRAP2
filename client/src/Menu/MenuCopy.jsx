import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
import { useAuth0, User } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import UserHome from "../pages/UserHome";
import Home from "../pages/Home";

const Menu = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "CadetBlue" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1>
            <b>Terrap</b>
          </h1>
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/booking/home">
                <h4>
                  {" "}
                  <i class="bi bi-pen-fill"></i>Booking
                </h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/user/home">
                <h4>
                  {" "}
                  <i class="bi bi-person-circle"></i>Inquilinos
                </h4>
              </Link>
            </li>
          </ul>
          <div className="dropdown ">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Profile />
            </button>
            <ul className="dropdown-menu">
              <li>
                {isAuthenticated ? (
                  <LogoutButton />
                ) : (
                  //* llama a los siguientes componentes si NO ESTA LOGUEADO */
                  <LoginButton />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
