import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MyDonations() {
  const camps = useLoaderData()
  console.log(camps)
  return (
  

    <>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-5' >
     {
   camps?.map(camp => <div key={camp.detail._id} className="card flex flex-col h-[450px] card-compact bg-base-100  shadow-xl ">
     <div className='flex-1'>
       <img
         src={camp.detail?.imageUrl}
         alt="campaigns"
         className='h-48 md:h-56 w-full rounded-t-xl' />
      </div>
     <div className="my-3 px-2 flex-1 space-y-2">
          
       <h1 className='text-2xl font-bold'>{camp.detail?.campignsName}</h1>
       <h2>Tpye : {camp.detail?.campignsType}</h2>
       
        
       <h1>Deadline : {camp.detail?.deadline}</h1>
        
      
     </div>
       
   </div>)
 }
 </div> 
    
    </>
  )
}

export default MyDonations
