import React from 'react'
import { Link } from 'react-router-dom'

function RunningCampCard({camps}) {
  const {_id,imageUrl,campignsName,campignsType,minDonation,deadline,userEmail,userName} = camps
  return (
    <div className="card flex flex-col h-[450px] card-compact bg-base-100  shadow-xl animate__jackInTheBox animate__animated">
  <div className=''>
    <img
      src={imageUrl}
      alt="campaigns"
      className='h-48 md:h-56 w-full rounded-t-xl'/>
  </div>
  <div className="my-3 px-2 flex-1 space-y-2">
    
    <h1 className='text-2xl font-bold'>{campignsName}</h1>
    <h2>Tpye : {campignsType}</h2>
 
  
    <h1>Deadline : {deadline}</h1>
  

  </div>
  <Link to={`/details/${_id}`} className='btn w-full bg-orange-600 text-white'>See more </Link>
</div>
  )
}

export default RunningCampCard
