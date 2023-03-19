import React from "react";
import UserDetailcomp from "../components/UserDetailcomp";
import Menu from "../Menu/Menu";

export default function UserDetail() {
  return (
    <div className="container">
      <Menu />
      <h1> Pagina de Detalle INQUILINO</h1>
      <UserDetailcomp />
    </div>
  );
}
