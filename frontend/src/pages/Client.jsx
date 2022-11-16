import React from 'react'
import SidebarC from '../components/SidebarC'
import {Outlet} from 'react-router-dom'

function Client() {
  return (
    <div className="flex w-screen">
    <SidebarC />
    <Outlet />
  </div>
  )
}

export default Client