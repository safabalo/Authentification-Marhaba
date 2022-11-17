import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateClientRoutes() {
  let authentification = localStorage.getItem("auth");
  let auth = JSON.parse(authentification);
  return auth.token && auth.role === "client" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateClientRoutes;
