import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    // <div className='flex w-full'>
        <div className='w-72 bg-gray-50 min-h-screen text-green-600 px-4'>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className="cursor-pointer" />
            </div>
            <div className='mt-4 flex flex-col gap-4 relative'>
                <Link to={"/dashboard"}>
                    <h2>Dashboard</h2>
                </Link>
                <Link to={"/"}>
                    <h2>Dashboard</h2>
                </Link>

            </div>
        </div> 
        // /* <div className='m-3 text-xl flex-1 h-screen'>Hi to the camera</div> */}
    // </div>
  )
}

export default Sidebar