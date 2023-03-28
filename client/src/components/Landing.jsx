import React from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

import img1 from "../assets/evento1.jpeg";
import img2 from "../assets/evento2.jpeg";
import img3 from "../assets/evento3.jpeg";
import logo from "../assets/logodefinitivo.png";

export default function Landing() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="container-fluid w-100 p-0">
        <nav
          className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "Navy" }}
        >
          <div className="col">
            <img
              src={logo}
              width="150"
              height="100"
              alt="Terrap Logo"
              className="mx-auto my-auto border-primary"
            />
          </div>
          <div className="px-5">
            <LoginButton />
          </div>
        </nav>
      </div>
      <div className="container align-items-center justify-content-center ">
        &nbsp;
        <div className="row ">
          <h1 className="text-center my-4">Espacios para tus eventos</h1>
          <p>
            Te presentamos nuestro servicio de alquiler de terrazas. Contamos
            con una amplia variedad de terrazas disponibles para todo tipo de
            eventos, desde una cena íntima hasta una fiesta de cumpleaños.
            Nuestras terrazas están equipadas con todo lo necesario para hacer
            de tu evento una experiencia única y memorable.
          </p>
        </div>
        &nbsp; &nbsp;
        <br />
        <div className=" row justify-content-center text-center ">
          <div className="col-sm-4">
            <div class="card">
              <div class="text-center">
                <img
                  src={img1}
                  alt="Fotos"
                  className="img-fluid rounded-start"
                  width="400"
                />
                &nbsp;
                <h3>Fotos y Rodajes</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="text-center">
                <img
                  src={img2}
                  alt="Cumpleaños"
                  width="360"
                  className="img-fluid rounded-start"
                />
                &nbsp;
                <h3>Cumpleaños</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="text-center">
                <img
                  src={img3}
                  alt="Eventos corporativos"
                  className="img-fluid rounded-start"
                  width="500"
                />
                &nbsp;
                <h3>Eventos corporativos</h3>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        <h1 className="justify-content-center p-1 ">
          Reserva comodamente desde tu dispositivo y disfruta de tu evento{" "}
        </h1>
        &nbsp;
        <div className="row  p-4">
          <div className="col justify-content-center">
            <h2>
              <i class="bi bi-1-square-fill m-1"></i>Busca un espacio
            </h2>
            <p>
              Eliga el espacio que se adapte a sus necesidades entre las que
              tenemos en TERRAPP.
            </p>
          </div>
          <div className="col justify-content-center">
            <h2>
              <i class="bi bi-2-square-fill m-1"></i>Contacta con el anfitrion{" "}
            </h2>
            <p> Podras comunicarte con el anfitrion y cerrar un trato </p>
          </div>

          <div className="col justify-content-center">
            <h2>
              <i class="bi bi-3-square-fill m-1"></i>Confirma tu reserva
            </h2>
            <p>
              Cuando acepte tu solicitud solo resta pagar para confirmar tu
              reserva
            </p>
          </div>
        </div>
        <br />
        <div className="row align-items-center p-2">
          <div className="col text-center justify-content-center">
            <h2> TERRAPP</h2>
            <h3> Portal que ayuda a convertir tus eventos en realidad </h3>
            <p>
              <i class="bi bi-geo-fill lead"></i> Av. Francia
              Encarnacion,Paraguay
            </p>
          </div>
          <div className="col text-center">
            <h2> Preguntas frecuentes</h2>
            <br />
            <p>- Acerca de TERRAPP</p>
            <p>- Cuanto cuesta utilizar los servicios de la app</p>
            <p>- Como Funciona</p>
            <p>-Como Pago mi reserva</p>
          </div>
        </div>
        &nbsp;
        <br />
        <div className="row  justify-content-center d-flex">
          <div className="col text-center mr-3">
            Contactanos en nuestras redes sociales
          </div>
          <div className="col text-center mr-3">
            <i class="bi bi-facebook m-1"></i>Facebook
          </div>
          <div className="col text-center mr-3">
            <i class="bi bi-twitter m-1"></i>Twiter
          </div>
          <div className="col text-center">
            <i class="bi bi-instagram m-1 "></i>Instagram
          </div>
        </div>
        &nbsp;
        <hr className="hr bg-secondary w-100" />
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            COPYRIGTH 2023 TERRAP- ESPACIOS PARA TUS EVENTOS &nbsp;&nbsp;
            TERMINOS Y CONDICIONES &nbsp;&nbsp; POLITICA Y PRIVACIDAD
          </div>
        </div>
        &nbsp;
      </div>
    </>
  );
}
