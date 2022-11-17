import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import Livreurs from '../components/Livreurs'
function Livreur() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Livreur;
