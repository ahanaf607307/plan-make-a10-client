import React, { createContext, useEffect, useState } from 'react'


export const CampApi = createContext()
function CampProvider({children}) {
    const [camp , setCamp] = useState(null)
useEffect(()=> {
const fetchData = async()=> {
    const res =await fetch('http://localhost:8000/campaigns')
    const data = await res.json()
    setCamp(data)
}
fetchData()
},[setCamp])

const apiInfo = {
    camp,
}

  return(
  <CampApi.Provider value={apiInfo}>{children}</CampApi.Provider>
) 
}

export default CampProvider
