import React from 'react'
import RunningCampaigns from '../Components/Campaigns/RunningCampaigns'
import { useLoaderData } from 'react-router-dom'
import Discovar from '../Components/Campaigns/Extra/Discovar'
import Reviews from '../Components/Campaigns/Extra/Reviews'

function Home() {



  return (
    <div className='my-16'>
    <div>
    <RunningCampaigns />
    </div>
      <div className='my-16'>
        <Discovar/>
      </div>
      <div className='my-16'>
        <Reviews/>
      </div>
    </div>
  )
}

export default Home
