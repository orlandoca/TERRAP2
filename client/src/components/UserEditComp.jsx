import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function UserEditComp() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //traemos los usuarios
  useEffect(() => {
    async function getData() {
      await axios
        .get(`http://localhost:8000/api/user/get/${id}`)
        .then((res) => {
          reset({
            name: res.data.name,
            phone: res.data.phone,
            document: res.data.document,
          });
        });
    }

    getData();
  }, []);

  const updateUser = (data) => {
    axios
      .put(`http://localhost:8000/api/user/update/${id}`, data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha actualizado ${data["name"]} perfectamente!`,
          timer: 2000,
        });
        navigate("/user/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "No se actualizo el usuario!",
          text: "hubo un error",
        });
      });
  };

  return (
    <div>
      <div className="container border border-primary p-3">
        <div className="col-lg-6">
          <h6 className="col" style={{ color: "darkcyan" }}>
            Editar un inquilino
          </h6>
          <form onSubmit={handleSubmit(updateUser)}>
            <div>
              <label className="form-label"> Nombre del Inquilino</label>
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
              <label className="form-label"> Document :</label>
              <input
                className="form-control"
                type="text"
                minLength={"1"}
                {...register("document", { required: true })}
              />
            </div>
            <br />
            <button className="btn btn-info">Editar Usuario</button>
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
    </div>
  );
}
