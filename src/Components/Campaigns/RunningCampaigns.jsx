import React, { useContext } from 'react'
import { CampApi } from './CampProvider'
import RunningCampCard from './RunningCampCard'

function RunningCampaigns() {


const {camp} = useContext(CampApi)

console.log(camp)
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>Running Campaign</h1>
<div>
  {
    camp.map(camps=><RunningCampCard camps={camps} /> )
  }
</div>
    </div>
  )
}

export default RunningCampaigns

