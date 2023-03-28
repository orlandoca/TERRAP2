import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function BookingEditComp() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [dateValue, setDateValue] = useState("");
  const [startTimeValue, setStartTimeValue] = useState("");
  const [endTimeValue, setEndTimeValue] = useState("");
  const [reservaUser, setReservaUser] = useState([]);
  console.log("aqui esta el usuario de reserva ->", reservaUser);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://localhost:8000/api/booking/get/${id}`
      );
      // desestructurando nuestros datos obtenidos
      const {
        user,
        name_building,
        reason,
        quantity,
        date,
        start_time,
        end_time,
      } = res.data;
      reset({ name_building, reason, quantity, date, start_time, end_time });
      setReservaUser(user);
      // setDateValue(new Date(date).toISOString().substr(0, 16));
      // setStartTimeValue(new Date(start_time).toISOString().substr(0, 16));
      // setEndTimeValue(new Date(end_time).toISOString().substr(0, 16));
    }

    getData();
  }, []);

  //! obtener solo el nombre del inquilino
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/booking/get/${id}`)
      .then((res) => {
        console.log("useEffect solo el nombre user ->", res.data.user.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //! fin obtener solo el nombre del inquilino

  //! obtner todos los inquilinos
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/getAll`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //! fin obtener todos los inquilinos

  const updateBooking = (data) => {
    console.log("esto va a actualizar en reservas", data);
    const newbooking = {
      name_building: data.name_building,
      reason: data.reason,
      quantity: data.quantity,
      date: data.date,
      start_time: data.start_time,
      end_time: data.end_time,
      userId: users.find((user) => user._id === data.user)._id,
    };
    console.log("esto va a actualizar en newbooking", newbooking);

    axios
      .put(`http://localhost:8000/api/booking/update/${id}`, newbooking)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha editado perfectamente!`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/booking/home");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container border border-primary p-3">
        <div className="col-lg-6">
          <h6 className="col" style={{ color: "Navy" }}>
            Editar una reserva:
          </h6>
          <form onSubmit={handleSubmit(updateBooking)}>
            {/* seleccionar inquilino */}
            <div>
              <label className="form-label"> Inquilino:</label>
              <select
                className="form-control"
                {...register("user", { required: true })}
              >
                <option value={reservaUser._id}>{reservaUser.name}</option>
                {users.map((user) =>
                  reservaUser.name !== user.name ? (
                    <option key={user._id} value={user._id}>
                      {user.name}
                    </option>
                  ) : null
                )}
              </select>
            </div>
            {/* FIN seleccionar inquilino */}
            <div>
              <label className="form-label"> Nombre del edificio :</label>
              <input
                className="form-control"
                type="text"
                minLength={"3"}
                {...register("name_building", { required: true })}
              />
            </div>
            <div>
              <label className="form-label"> Motivo de la reserva :</label>
              <input
                className="form-control"
                type="text"
                minLength={"3"}
                {...register("reason", { required: true })}
              />
            </div>
            <div>
              <label className="form-label"> Cantidad de personas :</label>
              <input
                className="form-control"
                type="number"
                minLength={"1"}
                {...register("quantity", { required: true })}
              />
            </div>
            <div>
              <label className="form-label"> Fecha de la reserva:</label>
              <input
                className="form-control form-control-sm"
                type="datetime-local"
                // value={dateValue}
                // onChange={(e) => setDateValue(e.target.value)}
                {...register("date")}
              />
            </div>
            <div>
              <label className="form-label"> Hora Inicio :</label>
              <input
                className="form-control form-control-sm"
                type="time"
                // value={startTimeValue}
                // onChange={(e) => setStartTimeValue(e.target.value)}
                {...register("start_time")}
              />
            </div>
            <div>
              <label className="form-label"> Hora Fin :</label>
              <input
                className="form-control form-control-sm"
                type="time"
                // value={endTimeValue}
                // onChange={(e) => setEndTimeValue(e.target.value)}
                {...register("end_time")}
              />
            </div>
            <br />
            <button className="btn btn-info">Editar Reserva</button>
            &nbsp; &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => navigate("/booking/home")}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
