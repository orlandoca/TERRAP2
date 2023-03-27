import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import BookingReport from "./BookingReport";

export default function BookingComp() {
  const [bookings, setBookings] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("name");

  const [filterDate, setFilterDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(
        `http://localhost:8000/api/booking/getAll/`
      );
      console.log("Data booking", respuesta.data);
      setBookings(respuesta.data);
    };

    getData();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    if (filterType === "name") {
      return booking.user.name.toLowerCase().includes(searchText.toLowerCase());
    } else if (filterType === "name_building") {
      return booking.name_building
        .toLowerCase()
        .includes(searchText.toLowerCase());
    } else if (filterType === "date") {
      const bookingDate = new Date(booking.date).toLocaleDateString("es-ES");
      return bookingDate.includes(filterDate); // Agregado para el filtro de fecha
    }
  });

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
    setSearchText("");
    setFilterDate("");
  };

  const handleFilterInputChange = (e) => {
    setSearchText(e.target.value);
    setFilterDate(e.target.value);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="mb-0">Lista De Reservas</h1>
        <div className="ml-auto">
          <BookingReport />
        </div>
      </div>
      <div className="row pb-3">
        <select value={filterType} onChange={handleFilterTypeChange}>
          <option value="name_building">Nombre del edificio</option>
          <option value="name">Nombre del inquilino</option>
          <option value="date">Fecha de alquiler</option>
        </select>
        &nbsp; &nbsp;
        {filterType === "name_building" && (
          <input
            id="id_filter"
            type="text"
            value={searchText}
            onChange={handleFilterInputChange}
            placeholder="Buscar por nombre del Edificio"
          />
        )}
        {filterType === "date" && (
          <input
            type="text"
            value={filterDate}
            onChange={handleFilterInputChange}
            placeholder="Buscar por fecha de alquiler"
          />
        )}
        {filterType === "name" && (
          <input
            id="id_filter"
            type="text"
            value={searchText}
            onChange={handleFilterInputChange}
            placeholder="Buscar por nombre del inquilino"
          />
        )}
      </div>
      <div className="row">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Nombre del edificio</th>
              <th>Nombre del inquilino</th>
              <th>Cantidad de Personas </th>
              <th>Fecha Alquiler </th>
              <th>Hora Alquiler</th>
              <th>Acciones </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name_building}</td>
                <td>{booking.user.name}</td>
                <td>{booking.quantity}</td>
                <td>{new Date(booking.date).toLocaleDateString("es-ES")}</td>
                <td>{booking.start_time}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/booking/detail/${booking._id}`}
                  >
                    Detalle
                  </Link>
                  &nbsp; &nbsp;
                  <Link
                    className="btn btn-warning"
                    to={`/booking/edit/${booking._id}`}
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* fila nueva */}
      <div className="row borde p-0">
        <br />
        <div className="pt-2 py-2">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/booking/new")}
          >
            Agregar Nueva Reserva
          </button>
          &nbsp; &nbsp;
        </div>
      </div>
    </div>
  );
}
