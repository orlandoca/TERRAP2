import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function BookingFormComp() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

  const createBooking = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:8000/api/booking/createBooking`, {
        ...data,
        user: {
          _id: data.user,
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha agregado la reserva perfectamente!`,
          timer: 3000,
        });
        navigate("/booking/home/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Ops que mal!!!",
          text: "campo no completado",
        });
      });
  };

  return (
    <div className="container border border-primary p-3">
      <div className="col-lg-6">
        <h6 className="col" style={{ color: "BlueViolet" }}>
          Complete el formulario de reserva:
        </h6>
        <form onSubmit={handleSubmit(createBooking)}>
          <div>
            <label className="form-label"> Inquilino:</label>
            <select
              className="form-control"
              {...register("userId", { required: true })}
            >
              <option value="">Seleccione un inquilino</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label"> Motivo de la reserva :</label>
            <input
              className="form-control"
              type="text"
              minLength={"4"}
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
              className="form-control"
              type="datetime-local"
              {...register("date", { required: true })}
            />
          </div>
          <div>
            <label className="form-label"> Hora Inicio :</label>
            <input
              className="form-control"
              type="time"
              {...register("start_time", { required: true })}
            />
          </div>
          <div>
            <label className="form-label"> Hora Fin :</label>
            <input
              className="form-control"
              type="time"
              {...register("end_time", { required: true })}
            />
          </div>
          <br />
          <button
            className="btn btn-danger"
            onClick={() => navigate("/booking/home")}
          >
            Cancel
          </button>
          &nbsp; &nbsp;
          <button className="btn btn-success">Reservar </button>
        </form>
      </div>
    </div>
  );
}
