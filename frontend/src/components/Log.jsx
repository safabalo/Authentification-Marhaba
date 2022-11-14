import React from "react";
import { useState } from "react";
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

// const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const LOGIN_URL = "http://localhost:3000/api/auth/login";

function Log() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr]= useState("")

  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const data = { email, password };
  const handleSubmit = e => {
    e.preventDefault();
    
      if(password=== " " || email === " " ){
        setEmailErr("Veuillez saisir votre email")
        setErrMsg("Veuillez saisir votre mot de passe")
      }else{

      
        axios
        .post(LOGIN_URL, data, { withCredentials: true })
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
          toast.error(err,{
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
      
  };
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center">
      <div className="w-7/12 flex justify-center items-center bg-white h-4/5 rounded-3xl">
        <form className="bg-white flex flex-col w-1/2" onSubmit={handleSubmit}>
          <h1 className="text-center">Register</h1>
          <label htmlFor="email">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            id="email"
            className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
          />
          <span>{emailErr}</span>
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
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm hover:border-2  hover:border-cyan-500"
          />
          <span>{errMsg}</span>
          <Link to={'/register'} className="mb-5">
            <p className="ml-5 text-sky-300">Vous n'avez pas de compte inscrit toi</p>
          </Link>
          <div className="flex justify-center items-center">
            <button className="rounded-full bg-red-500 active:bg-red-600 active:text-white text-white w-32 p-2 hover:text-red-600 font-bold hover:bg-white border-2 border-red-500">
              Login
            </button>
            <ToastContainer />
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Log;
