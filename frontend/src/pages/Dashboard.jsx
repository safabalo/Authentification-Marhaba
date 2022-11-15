import React from "react";
import Sidebar from "../components/Sidebar";
import Livreur from "../components/Livreur";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
