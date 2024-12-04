import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import Loader from './Loader'

function PrivateRoute({children}) {
  const {users, loader} = useContext(AuthContext)
  const location = useLocation()
 
if(loader) {
  return <Loader/>
}
if(users) {
  return children
}
return <Navigate state={location.pathname} to={'/login'}/>
}

export default PrivateRoute
