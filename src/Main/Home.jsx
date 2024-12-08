import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../Components/Campaigns/Banner'
import Discovar from '../Components/Campaigns/Extra/Discovar'
import Reviews from '../Components/Campaigns/Extra/Reviews'
import RunningCampaigns from '../Components/Campaigns/RunningCampaigns'
import { Helmet } from 'react-helmet-async'


function Home() {
const runningCampData = useLoaderData()
console.log(runningCampData)

  return (
    <div className='my-12'>
      <Helmet>
        <title>Home | PlanMake</title>
      </Helmet>
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
