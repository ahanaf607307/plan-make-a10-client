import React, { useContext } from 'react'
import { AuthContext } from '../FireBase/AuthProvider'

function Home() {
    const {name} = useContext(AuthContext)
  return (
    <div>
      {name}
    </div>
  )
}

export default Home
