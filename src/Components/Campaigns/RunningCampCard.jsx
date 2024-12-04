import React from 'react'

function RunningCampCard({camps}) {
  const {imageUrl,campignsName,campignsType,minDonation,deadline,userEmail,userName} = camps
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={imageUrl}
      alt="campaigns" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default RunningCampCard
