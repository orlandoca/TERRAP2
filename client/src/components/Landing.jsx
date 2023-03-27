import React from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

import img1 from "../assets/foto1.jpeg";
import img2 from "../assets/foto2.jpeg";
import img3 from "../assets/foto3.jpeg";

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
              src="https://i.imgur.com/J5cQGer.png"
              width="150"
              height="80"
              alt="Terrap Logo"
              className="mx-auto my-auto"
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
          <h2 className="text-center my-4">Espacios para tus eventos</h2>
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
                <img src={img1} alt="Fotos" class="img-fluid" />
                <h3>Fotos y Rodajes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  maximus mauris quis venenatis rutrum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="text-center">
                <img
                  src={img2}
                  alt="Cumpleaños"
                  width="225"
                  height="100"
                  className="img-fluid"
                />
                <h3>Cumpleaños</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  maximus mauris quis venenatis rutrum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <div className="text-center">
                <img
                  src={img3}
                  alt="Eventos corporativos"
                  className="img-fluid"
                />
                <h3>Eventos corporativos</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  maximus mauris quis venenatis rutrum.
                </p>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        <div className="row">
          <div className="col justify-content-center">
            <h2> Busca un espacio</h2>
            <p>
              Eliga el espacio que se adapte a sus necesidades entre las que
              tenemos en TERRAPP.
            </p>
          </div>
          <div className="col justify-content-center">
            <h2>Contacta con el anfitrion </h2>
            <p> Podras comunicarte con el anfitrion y cerrar un trato </p>
          </div>

          <div className="col justify-content-center">
            <h2>Confirma tu reserva</h2>
            <p>
              Cuando acepte tu solicitud solo resta pagar para confirmar tu
              reserva
            </p>
          </div>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col text-center justify-content-center">
            <h2> Terrapp</h2>
            <h3> Portal que ayuda a convertir tus eventos en realidad </h3>
            <p>
              <i class="bi bi-geo-fill"></i> Av. Francia Encarnacion,Paraguay
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
            <i class="bi bi-facebook"></i>Facebook
          </div>
          <div className="col text-center mr-3">
            <i class="bi bi-twitter"></i>Twiter
          </div>
          <div className="col text-center">
            <i class="bi bi-instagram"></i>Instagram
          </div>
        </div>
        &nbsp;
        <div className="row justify-content-center">
          <div className="col text-center">
            COPYRIGTH 2023-TERRAP &nbsp; TERMINOS Y CONDICIONES &nbsp; POLITICA
            Y PRIVACIDAD
          </div>
        </div>
        &nbsp;
      </div>
    </>
  );
}
