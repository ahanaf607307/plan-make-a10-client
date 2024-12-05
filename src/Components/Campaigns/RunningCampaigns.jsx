import React, { useContext } from 'react'
import { CampApi } from './CampProvider'
import RunningCampCard from './RunningCampCard'

function RunningCampaigns() {


const {camp} = useContext(CampApi)

console.log(camp)
  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-10'>Running Campaign</h1>
      <h1 className='text-xl text-center font-bold mt-5 mb-10'>Meet people and life-changing teachers in need of your support</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
  {
    camp.map(camps=><RunningCampCard key={camps?._id} camps={camps} /> )
  }
</div>
    </div>
  )
}

export default RunningCampaigns

