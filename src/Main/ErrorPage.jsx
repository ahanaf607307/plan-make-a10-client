import React from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ErrorPage() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center'>
     <h1 className='text-red-600 font-bold text-3xl md:text-5xl animate__animated animate__jello animate__infinite	'> Error 404...</h1>
     <Link to='/' className='btn bg-cyan-500 mt-8 text-white font-bold animate__animated animate__pulse animate__infinite ' >Go To Home <FaHome className='ml-2 text-2xl' /></Link>
    </div>
  )
}

export default ErrorPage
