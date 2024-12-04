import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

function MainLayout() {
  return (
    
    
    <div className='md:w-[800px] lg:w-[1024px] h-screen mx-auto flex flex-col'>
        <section>
            <Navbar/>
        </section>
      <section className='flex-1'>
      <Outlet/>
      </section>
       <section>
        <Footer/>
      </section>
    </div> 
  
 
  )
}

export default MainLayout
