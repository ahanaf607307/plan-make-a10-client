import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Details() {
    const detail = useLoaderData()
    console.log(detail)
    const {_id,imageUrl,campignsName,campignsType,minDonation,deadline,userEmail,userName , description} = detail
  return (
    <div className="card lg:card-side bg-base-100 border-2 shadow-xl grid grid-cols-1 md:grid-cols-12 mt-10">
    <figure className='h-96 col-span-5'>
      <img
        src={imageUrl}
        alt="Album" />
    </figure>
    <div className="card-body col-span-7">
      <h2 className="card-title">{campignsName}</h2>
      <p>{campignsType}</p>
      <p>{description}</p>
      <p>Minium Donation Amount : {minDonation}</p>
      <p>{deadline}</p>
      <p>User Email : {userEmail}</p>
      <p>User Name : {userName}</p>
      <div className="card-actions justify-end">
        <button className="btn bg-orange-500">Donate</button>
      </div>
    </div>
  </div>
  )
}

export default Details
