import React, { createContext, useEffect, useState } from 'react'


export const CampApi = createContext()
function CampProvider({children}) {
    const [camp , setCamp] = useState([])
    const [allCamp , setAllCamp] = useState([])
useEffect(()=> {
const fetchData = async()=> {
    const res =await fetch('http://localhost:8000/campaigns')
    const data = await res.json()
    setCamp(data)

    const result =await fetch('http://localhost:8000/campaign')
    const allCampData = await result.json()
    setAllCamp(allCampData)
}



fetchData()
},[setCamp,setAllCamp])

const apiInfo = {
    camp,
    allCamp
}

  return(
  <CampApi.Provider value={apiInfo}>{children}</CampApi.Provider>
) 
}

export default CampProvider
