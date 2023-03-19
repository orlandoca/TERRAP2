import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function UserDetailcomp() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  console.log(data);

  //traeme el usuario especificoo
  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/get/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  //funcion que elimina
  function deleteUser() {
    axios
      .delete(`http://localhost:8000/api/user/delete/${id}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha eliminado ${data["name"]} perfectamente!`,
          showConfirmButton: true,
          timer: 3000,
        });
        navigate("/user/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Detalles del inquilino</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre del Inquilino: </td>
            <td>{data["name"]}</td>
          </tr>
          <tr>
            <td>Telefono: </td>
            <td>{data["phone"]}</td>
          </tr>
          <tr>
            <td>Documento: </td>
            <td>{data["document"]}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/user/home")}
        >
          Volver{" "}
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={deleteUser}>
          {" "}
          Eliminar{" "}
        </button>
      </div>
    </div>
  );
}
