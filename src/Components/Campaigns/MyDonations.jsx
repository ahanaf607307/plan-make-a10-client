import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MyDonations() {
  const camps = useLoaderData()
  console.log(camps)
  return (
    <>
    {
      camps.map(camp => <div className="card flex flex-col h-96 card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={camp?.imageUrl}
            alt="campaigns"
            className='h-48 md:h-56 w-full' />
        </figure>
        <div className="my-3 px-2 flex-1 space-y-2">
          
          <h1 className='text-2xl font-bold'>{camp?.campignsName}</h1>
          <h2>Tpye : {camp?.campignsType}</h2>
       
        
          <h1>Deadline : {camp?.deadline}</h1>
        
      
        </div>
       
      </div>)
    }
    </>
  )
}

export default MyDonations
