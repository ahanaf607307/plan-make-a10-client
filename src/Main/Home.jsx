import React from 'react'
import RunningCampaigns from '../Components/Campaigns/RunningCampaigns'
import { useLoaderData } from 'react-router-dom'

function Home() {



  return (
    <div>
      <RunningCampaigns />
    </div>
  )
}

export default Home
