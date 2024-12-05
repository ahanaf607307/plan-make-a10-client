import React from 'react'
import RunningCampaigns from '../Components/Campaigns/RunningCampaigns'
import { useLoaderData } from 'react-router-dom'
import Discovar from '../Components/Campaigns/Extra/Discovar'

function Home() {



  return (
    <div className='my-10'>
    <div>
    <RunningCampaigns />
    </div>
      <div className='my-10'>
        <Discovar/>
      </div>
    </div>
  )
}

export default Home
