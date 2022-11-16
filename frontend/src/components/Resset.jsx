import React from "react";
import { useState } from "react";
import {useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "../api/axios";

function Reset() {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [success, setSuccess] = useState("")
  const [err, setError]= useState("")
  let { token } = useParams();
  const data = { password, token };
  const RESET_URL = `http://localhost:3000/api/auth/resetpassword/${token}`;
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(token);
    if (password === repassword) {
      await axios
        .post(RESET_URL, data)
        .then(res => {
          toast.success(res.data, {
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
    } else {
      toast.warn("Password doesnt match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center">
      <div className="w-7/12 flex justify-center items-center bg-white h-4/5 rounded-3xl">
        <form className="bg-white flex flex-col w-1/2" onSubmit={handleSubmit}>
          <h1 className="text-center my-5 font-extrabold text-red-600 text-2xl font-mono">Resset Password</h1>
          <label htmlFor="password">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Mot de passe
            </span>
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            id="password"
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
          />
          <span className="text-red-500">{setPassword}</span>
          <label htmlFor="password">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Répéter le mot de passe
            </span>
          </label>
          <input
            type="password"
            value={repassword}
            onChange={e => setRepassword(e.target.value)}
            name="password"
            id="cnPassword"
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
          />
          {/* <span className="text-red-500"></span> */}
          <div className="flex justify-center items-center">
            <button className="rounded-full bg-red-500 active:bg-red-600 active:text-white text-white w-32 p-2 hover:text-red-600 font-bold hover:bg-white border-2 border-red-500">
              Changer
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
