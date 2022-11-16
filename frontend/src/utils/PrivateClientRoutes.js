import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

function PrivateClientRoutes() {
    let auth = {'token':true, 'role':true}
    return (
        auth.token && auth.role === "client" ? <Outlet/> : <Navigate to='/login'/>
      )
}

export default PrivateClientRoutes