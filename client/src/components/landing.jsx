import React from "react";
import { Link } from "react-router-dom";

export default function landing() {
  return (
    <div className="landing-page">
      landing
      <header>
        <h1>Alquiler de terrazas</h1>
        <nav>
          <h1> logo </h1>
          <Link to="login"> Iniciar Sesion </Link>
          <Link to="signup"> Registrarse </Link>
        </nav>
      </header>
      <section>
        <div className="container border border-primary rounded">
          <h2 className="text-center my-4">Espacios para tus eventos</h2>
          <p>
            Te presentamos nuestro servicio de alquiler de terrazas. Contamos
            con una amplia variedad de terrazas disponibles para todo tipo de
            eventos, desde una cena íntima hasta una fiesta de cumpleaños.
            Nuestras terrazas están equipadas con todo lo necesario para hacer
            de tu evento una experiencia única y memorable.
          </p>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-4">
            <div class="text-center">
              <img
                src="ruta-de-la-imagen-1.jpg"
                alt="Fotos"
                class="img-fluid"
              />
              <h3>Fotos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                maximus mauris quis venenatis rutrum.
              </p>
            </div>
          </div>
          <div class="col-md-4">
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
          <div className="col-md-4">
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
      </section>
    </div>
  );
}
