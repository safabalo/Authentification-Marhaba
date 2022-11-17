import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateLivreurRoutes() {
  let authentification = localStorage.getItem("auth");
  let auth = JSON.parse(authentification);
  return auth.token && auth.role === "livreur" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateLivreurRoutes;
