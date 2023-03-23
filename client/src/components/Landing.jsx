import React from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

export default function Landing() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="container border-3 align-items-center justify-content-center bg-secondary">
      &nbsp;
      <nav className="d-flex justify-content-between bg-secondary">
        <h1> logo </h1>
        <LoginButton />
        <LogoutButton />
      </nav>
      &nbsp;
      <div className="row border border-primary rounded">
        <h2 className="text-center my-4">Espacios para tus eventos</h2>
        <p>
          Te presentamos nuestro servicio de alquiler de terrazas. Contamos con
          una amplia variedad de terrazas disponibles para todo tipo de eventos,
          desde una cena íntima hasta una fiesta de cumpleaños. Nuestras
          terrazas están equipadas con todo lo necesario para hacer de tu evento
          una experiencia única y memorable.
        </p>
      </div>
      &nbsp; &nbsp;
      <br />
      <div className=" row border border-primary  justify-content-center text-center ">
        <div className="col-md-4 border">
          <div class="text-center">
            <img src="ruta-de-la-imagen-1.jpg" alt="Fotos" class="img-fluid" />
            <h3>Fotos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus mauris quis venenatis rutrum.
            </p>
          </div>
        </div>
        <div class="col-md-4 border">
          <div class="text-center">
            <img
              src="ruta-de-la-imagen-2.jpg"
              alt="Cumpleaños"
              className="img-fluid"
            />
            <h3>Cumpleaños</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus mauris quis venenatis rutrum.
            </p>
          </div>
        </div>
        <div className="col-md-4 border">
          <div className="text-center">
            <img
              src="ruta-de-la-imagen-3.jpg"
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
      <br />
      <div className="row border border-primary justify-content-center align-items-center">
        <div className="col text-center">
          <p>- Nombre de la app </p>
          <p>- Pagina Dedicada a eventos </p>
          <p>- Av. Francia Encarnacion,Paraguay</p>
        </div>
        <div className="col text-center">
          <h2> Preguntas frecuentes</h2>
          <br />
          <p>- Acerca de TERRAP</p>
          <p>- Cuanto cuesta utilizar los servicios de la app</p>
          <p>- Como Funciona -Como Pago mi reserva</p>
        </div>
      </div>
      &nbsp;
      <div className="row border border-primary justify-content-center">
        <div className="col text-center">
          COPYRIGTH 2023-NOMBRE DE LA APP &nbsp; TERMINOS Y CONDICIONES &nbsp;
          POLITICA Y PRIVACIDAD
        </div>
      </div>
      &nbsp;
    </div>
  );
}
