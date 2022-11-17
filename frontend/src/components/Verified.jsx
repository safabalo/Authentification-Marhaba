import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import { ToastContainer, toast } from "react-toastify";

function Verified() {
  let { userToken } = useParams();
  const navigate = useNavigate();

  const Verified_URL = `http://localhost:3000/api/auth/verify-email/${userToken}`;
  axios
    .get(Verified_URL)
    .then(res => {
      console.log(res.userToken);
      toast.success(res.userToken, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center flex-col">
      <p>You are verified</p>
      <button
        className="rounded-full bg-red-500 active:bg-red-600 active:text-white text-white w-32 p-2 hover:text-red-600 font-bold hover:bg-white border-2 border-red-500"
        onClick={handleClick}
      >
        back to login
      </button>
      <ToastContainer />
    </div>
  );
}

export default Verified;
