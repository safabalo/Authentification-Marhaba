import React from "react";
import { useState } from "react";
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {json, Link, useNavigate} from 'react-router-dom'
import foodIcon from "../assets/images/delivrey.png";

// const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const LOGIN_URL = "http://localhost:5000/api/auth/login";

function Log() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  // const [emailErr, setEmailErr]= useState("")

  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const data = { email, password };
  const handleSubmit = e => {
    e.preventDefault();
        axios
        .post(LOGIN_URL, data, { withCredentials: true })
          .then(res => {
          console.log(res.data)
          localStorage.setItem('auth',JSON.stringify(res.data))
          toast.success("Vous étes authentifier", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            let authentification = localStorage.getItem("auth");
            let auth = JSON.parse(authentification)
            if(auth.token && auth.role === "client"){
              navigate('/client/me')
            }else if(auth.token && auth.role === "livreur"){
              navigate('/livreur/me')
            }else if(auth.token && auth.role === "manager"){
              navigate('/manager/livreur')
            }
        })
        .catch(err => {
          console.log(err)
          toast.error(err.message,{
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
        
  };
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center">
      <div className="w-7/12 flex  items-center bg-white h-4/5 rounded-3xl flex-col">
        <div className="mt-16 w-20 h-20">
          <img src={foodIcon} alt="" className="w-full h-full rounded-full" />
        </div>
        <form className="bg-white flex flex-col w-1/2" onSubmit={handleSubmit}>
          <h1 className="text-center my-5 font-extrabold text-red-600 text-2xl font-mono">Login</h1>
          <label htmlFor="email" className="mb-2">
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
            placeholder="Inserer votre email"
            className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
          />
          {/* <span>{emailErr}</span> */}
          <label htmlFor="password" className="mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Mot de passe
            </span>
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            placeholder="Inserer votre mot de passe"
            id="password"
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm hover:border-2  hover:border-cyan-500"
          />
          <span>{errMsg}</span>
          <div className="mb-1 flex">
            <Link to={'/register'} className="mb-1 mt-2">
            <p className="text-gray-400">Vous n'avez pas de compte inscrit toi</p>
            </Link>
            <Link to={'/forgetpassword'} className="mt-2">
            <p className="text-red-500">Vous avez oublier votre mot de passe ?</p>
            </Link>
          </div>
          
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
