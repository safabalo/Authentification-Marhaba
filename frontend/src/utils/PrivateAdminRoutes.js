import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateAdminRoutes() {
  let authentification = localStorage.getItem("auth");
  let auth = JSON.parse(authentification);
  return auth.token && auth.role === "manager" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateAdminRoutes;
