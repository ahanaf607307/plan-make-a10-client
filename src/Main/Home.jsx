import React from 'react'
import RunningCampaigns from '../Components/Campaigns/RunningCampaigns'
import { useLoaderData } from 'react-router-dom'
import Discovar from '../Components/Campaigns/Extra/Discovar'
import Reviews from '../Components/Campaigns/Extra/Reviews'
import Banner from '../Components/Campaigns/Banner'

function Home() {
const runningCampData = useLoaderData()
console.log(runningCampData)

  return (
    <div className='my-12'>
      <div>
        <Banner/>
      </div>
    <div>
    <RunningCampaigns runningCampData={runningCampData} />
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
