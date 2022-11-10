import React from 'react'
import { useState} from 'react'
import {useForm} from 'react-hook-form'
import toast, {Toaster} from "react-hot-toast"
import axios from '../api/axios'


function Registeration() {
  const { register, handleSubmit, errors } = useForm();
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  
  const url = 'http://localhost:3000/api/auth/register'
  const data = {nom, prenom, email, password}
  const onSubmit= async(e)=>{
    e.preventDefault()
      await axios.post(url, data)
    .then(()=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
      
  }
  const showToast = ()=>{
    toast.success('Successfully toasted!')
  }
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center">
      <div className='w-7/12 flex justify-center items-center bg-white h-4/5 rounded-3xl'>
        <form className='bg-white flex flex-col w-1/2' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-center'>Register</h1>
          <Toaster />
          <label htmlFor="nom">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Nom
            </span>
          </label>
          <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500" name="nom" id='nom'/>
          {/* {...register("nom", { required: true })} */}
          {/* {errors.nom && (<div>{errors.nom.message}</div>) } */}
          <label htmlFor="">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Prénom
            </span>
          </label>
          <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} name="prenom" id="prenom" className= 'block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500' />
          <label htmlFor="email">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
            </span>
          </label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className=' block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500' />
          <label htmlFor="password">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Mot de passe
            </span>
          </label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" className= 'block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500' />
          <div className='flex justify-center items-center'>
            <button className='rounded-full bg-red-500 active:bg-red-600 active:text-white text-white w-32 p-2 hover:text-red-600 font-bold hover:bg-white border-2 border-red-500' onClick={showToast}>Register</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Registeration