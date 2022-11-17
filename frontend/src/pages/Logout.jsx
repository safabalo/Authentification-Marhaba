import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../api/axios";

const LOGOUT_URL = "http://localhost:3000/api/auth/logout";
export default function Logout() {
  let navigate = useNavigate();
  axios
    .get(LOGOUT_URL)
    .then(res => {
      localStorage.clear();
      toast.success("🦄 logout successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    })
    .catch(err => {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
}
