import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function UserComp() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(
        `http://localhost:8000/api/user/getAll`
      );
      setUsers(respuesta.data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Lista de Inquilinos</h1>
      <div className="row">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Nombre del inquilino</th>
              <th>Telefono </th>
              <th>Documento </th>
              <th>Acciones </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.document.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/user/detail/${user._id}`}
                  >
                    Detalle
                  </Link>
                  &nbsp; &nbsp;
                  <Link
                    className="btn btn-warning"
                    to={`/user/edit/${user._id}`}
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex borde p-0">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/user/new")}
          >
            Agregar Nuevo Usuario
          </button>
        </div>
      </div>
    </div>
  );
}
