import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="row">
        <Link to="/home" className="d-block p-3 text-light">
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
      </div>
    </div>
  );
}
