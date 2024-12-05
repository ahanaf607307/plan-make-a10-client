import React from 'react'
import { Link } from 'react-router-dom'

function RunningCampCard({camps}) {
  const {_id,imageUrl,campignsName,campignsType,minDonation,deadline,userEmail,userName} = camps
  return (
    <div className="card flex flex-col h-[450px] card-compact bg-base-100  shadow-xl animate__jackInTheBox animate__animated relative ">
  <div className=''>
    <img
      src={imageUrl}
      alt="campaigns"
      className='h-48 md:h-60 w-full rounded-t-xl'/>
  </div>
  <div className="my-3 px-2 flex-1 space-y-2 text-center">
    
    <h1 className='text-2xl my-4 font-bold'>{campignsName}</h1>
    <h2 className='absolute top-52 right-24 text-white rounded-sm bg-orange-600 px-2 py-1'> {campignsType}</h2>
 
  
  <div className='flex justify-between text-gray-500 px-3 mt-5'>
  <h1>Deadline : {deadline}</h1>
  <h1>{minDonation}</h1>
  </div>
  

  </div>
  <Link to={`/details/${_id}`} className='btn w-full bg-blue-200 '>See more </Link>
</div>
  )
}

export default RunningCampCard
