import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const FORGET_URL = "http://localhost:3000/api/auth/forgetpassword";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  let [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const data = { email };
  const handleSubmit = async e => {
    e.preventDefault();
    if (email === "") {
      setErrMsg("Veuillez saisir votre email");
    } else {
      await axios
        .post(FORGET_URL, data)
        .then(res => {
          toast.info(res.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/login");
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
  };
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center">
      <div className="w-7/12 flex justify-center items-center bg-white h-4/5 rounded-3xl">
        <form className="bg-white flex flex-col w-1/2" onSubmit={handleSubmit}>
          <h1 className="text-center my-5 font-extrabold text-red-600 text-2xl font-mono">
            Forget password
          </h1>
          <label htmlFor="email">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
          </label>
          <span className="text-red-600 mb-2">{errMsg}</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            id="email"
            className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-sm  hover:border-2  hover:border-cyan-500"
          />
          <Link to={"/login"} className="mb-5 mt-2">
            <p className="text-gray-400">Vous avez pas de compte connect toi</p>
          </Link>
          <div className="flex justify-center items-center">
            <button className="rounded-full bg-red-500 active:bg-red-600 active:text-white text-white w-32 p-2 hover:text-red-600 font-bold hover:bg-white border-2 border-red-500">
              Envoyer
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
