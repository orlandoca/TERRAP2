import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}
