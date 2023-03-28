import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function BookingDetailComp() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  console.log(data);

  //traemos los datos
  useEffect(() => {
    axios.get(`http://localhost:8000/api/booking/get/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  //funcion que elimina
  function deleteBooking() {
    axios
      .delete(`http://localhost:8000/api/booking/delete/${id}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha eliminado la reserva perfectamente!`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/booking/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Detalles de reserva</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre del Inquilino </td>
            <td>{data["user"]?.["name"]}</td>
          </tr>
          <tr>
            <td>Telefono </td>
            <td>{data["user"]?.["phone"]}</td>
          </tr>
          <tr>
            <td>Nombre del edificio </td>
            <td>{data["name_building"]}</td>
          </tr>
          <tr>
            <td>Cantidad de personas </td>
            <td>{data["quantity"]}</td>
          </tr>
          <tr>
            <td>Motivo de reserva </td>
            <td>{data["reason"]}</td>
          </tr>
          <tr>
            <td>Fecha de reserva </td>
            <td>{new Date(data["date"]).toLocaleDateString("es-ES")}</td>
          </tr>
          <tr>
            <td>Horario Inicio </td>
            <td>{data["start_time"]}</td>
          </tr>
          <tr>
            <td>Horario Fin </td>
            <td>{data["end_time"]}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/booking/home/")}
        >
          Volver{" "}
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={deleteBooking}>
          {" "}
          Eliminar{" "}
        </button>
      </div>
    </div>
  );
}
