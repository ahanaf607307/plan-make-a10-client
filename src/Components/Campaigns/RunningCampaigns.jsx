import React from 'react'

import RunningCampCard from './RunningCampCard'

function RunningCampaigns({runningCampData}) {





  return (
    <div>
      <h1 className='text-sm text-orange-600 text-center font-bold mt-4'>-- BUSINESSES YOU CAN BACK --</h1>
      <h1 className='text-2xl md:text-4xl lg:px-60 px-5 md:px-36 text-center font-bold mt-5 mb-10'>Best Featured Projects
      Explore Now</h1>
<div className='grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
  {
    runningCampData.map(camps=><RunningCampCard key={camps?._id} camps={camps} /> )
  }
</div>
    </div>
  )
}

export default RunningCampaigns

