import React from 'react'

import RunningCampCard from './RunningCampCard'
import { Typewriter } from 'react-simple-typewriter'

function RunningCampaigns({runningCampData}) {





  return (
    <div>
      <h1 className='text-sm text-orange-600 text-center font-bold mt-4 lg:mt-14'><Typewriter
            words={['- BUSINESSES YOU CAN BACK -']}
            loop={Infinity} 
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000}
          /></h1>
      <h1 className='text-2xl md:text-4xl lg:px-60 px-5 md:px-36 text-center font-bold mt-5 mb-10'>
      <Typewriter
            words={['Best Featured Projects Explore Now']}
            loop={1} 
            cursor
            cursorStyle=""
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000}
          />
      </h1>
<div className='grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
  {
    runningCampData.map(camps=><RunningCampCard key={camps?._id} camps={camps} /> )
  }
</div>
    </div>
  )
}

export default RunningCampaigns

