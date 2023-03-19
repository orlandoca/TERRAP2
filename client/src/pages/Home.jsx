import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="container mh-100">
      {isAuthenticated ? (
        <div>
          <h3> Bienvenido {user.name}</h3>
        </div>
      ) : (
        ""
      )}
      <center>
        <img src="https://i.imgur.com/J5cQGer.png" width="400" />
      </center>
    </div>
  );
}
