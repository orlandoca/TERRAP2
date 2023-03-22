import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { MyRoutes } from "../routes/routes";

export default function Home() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className="row">
        <div
          className="col-sm-3 col-lg-2"
          style={{ backgroundColor: "CadetBlue" }}
        >
          <div className="col-12 text-center">
            <img
              src="https://i.imgur.com/J5cQGer.png"
              width="180"
              height="120"
              alt="Terrap Logo"
              className="mx-auto my-auto"
            />
          </div>
        </div>
        <div className="col-sm-9 col-lg-10">
          <Navbar />
        </div>
      </div>
      <div className="row vh-100">
        <div
          className="col-sm-3 col-lg-2"
          style={{ backgroundColor: "CadetBlue" }}
        >
          <Sidebar />
        </div>
        <div
          className="col-sm-9 col-lg-10"
          // style={{ backgroundColor: "red" }}
        >
          <div className="row h-100 align-items-start">
            <MyRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}
