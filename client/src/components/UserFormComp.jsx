import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function UserFormComp() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const createUser = (e) => {
    console.log(e);
    axios
      .post(`http://localhost:8000/api/createUser`, e)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha agregado ${res.data.name}el usuario perfectamente!`,
          position: "center",
          timer: 3000,
        });
        navigate("/user/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "NO SE AGREGO USUARIO!!!",
          text: "campo no completado",
        });
      });
  };

  return (
    <div className="container border border-primary p-3">
      <div className="col-lg-6">
        <h6 className="col" style={{ color: "Navy" }}>
          Complete el formulario de inquilino:
        </h6>
        <form onSubmit={handleSubmit(createUser)}>
          <div>
            <label className="form-label"> Nombre del inquilino</label>
            <input
              className="form-control"
              type="text"
              minLength={"3"}
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label className="form-label"> Telefono :</label>
            <input
              className="form-control"
              type="number"
              minLength={"8"}
              {...register("phone", { required: true })}
            />
          </div>
          <div>
            <label className="form-label"> Documento:</label>
            <input
              className="form-control"
              type="text"
              minLength={"3"}
              {...register("document", { required: true })}
            />
          </div>
          <br />
          <button className="btn btn-success">Registrar </button>
          &nbsp; &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => navigate("/user/home")}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
