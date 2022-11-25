import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  let authentification = localStorage.getItem("auth");
  let auth = JSON.parse(authentification);

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoutes;
