import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
import { useAuth0, User } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import UserHome from "../pages/UserHome";
import BookingHome from "../pages/BookingHome";

import Home from "../pages/Home";

const Menu = () => {
  const { isAuthenticated } = useAuth0();

  return (
    //COMIENZO DE SIDEBAR
    <div className="d-flex">
      <div id="sidebar-container" className="bg-primary">
        <div className="logo">
          <h1 className="text-light font-weight-bold">TERRAP</h1>
        </div>
        <div className="menu">
          <Link to="/" className="d-block p-3 text-light">
            <i className="bi bi-house-fill lead m-2"></i>
            Home{" "}
          </Link>

          {isAuthenticated && (
            <Link className="d-block p-3 text-light" to="/booking/home">
              <i className="bi bi-pen-fill lead m-2"></i>Reservas
            </Link>
          )}
          {isAuthenticated && (
            <Link className="d-block p-3 text-light" to="/user/home">
              <i className="bi bi-person-circle m-2 lead "></i>Inquilinos
            </Link>
          )}

          <a href="#" className="d-block p-3 text-light">
            <i className="bi bi-gear m-2 lead "></i>Configuracion
          </a>
        </div>
      </div>
      {/*  FIN DE SIDEBAR */}

      <div className="w-100">
        {/* comienzo del navbar*/}
        {/* fila del sidebar */}
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
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
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </form>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-1 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></a>
                    <ul className="dropdown-menu">
                      <li>
                        {isAuthenticated ? (
                          <div>
                            <Profile />
                            <LogoutButton />
                          </div>
                        ) : (
                          //* llama a los siguientes componentes si NO ESTA LOGUEADO */
                          <LoginButton />
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* fila del componente que muestra debajo del sidebar */}
        {isAuthenticated ? (
          <div className="container">
            <div className="row">
              <Routes>
                <Route path="/booking/home" component={BookingHome} />
                <Route path="/user/home" component={UserHome} />
              </Routes>
            </div>
          </div>
        ) : (
          //* llama a los siguientes componentes si NO ESTA LOGUEADO */
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Menu;
