import React from 'react'
import { useState} from 'react'
import axios from '../api/axios';

const FORGET_URL = 'http://localhost:3000/api/auth/forgetpassword'

function ForgetPassword() {
  const [email, setEmail] = useState('')
  const data = {email}
  const handleSubmit = async (e)=>{
    e.preventDefault()
      await axios.post(FORGET_URL,data)
      .then(() =>{
        console.log("check your email")
      })
      .catch(err =>{
        console.log(err.message)
     })
  }
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex justify-center items-center">
      <div className='w-7/12 flex justify-center items-center bg-white h-4/5 rounded-3xl'>
        <form className='bg-white flex flex-col w-1/2' onSubmit={handleSubmit}>
          <h1 className='text-center'>Forget password</h1>
          <label htmlFor="email">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
            </span>
          </label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className=' block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500' />
          <div className='flex justify-center items-center'>
            <button className='rounded-full bg-red-500 active:bg-red-600 active:text-white text-white w-32 p-2 hover:text-red-600 font-bold hover:bg-white border-2 border-red-500'>Register</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword