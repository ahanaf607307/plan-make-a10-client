import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { LiaSortNumericUpSolid } from "react-icons/lia";
function Discovar() {
  return (
    <div className='grid md:grid-cols-12 items-center p-5'>
      <div className='md:col-span-7'>
      <h1 className='text-blue-500 font-bold'>READY TO GO --</h1>
      <h1 className='font-bold text-blue-900 text-2xl md:text-3xl lg:text-4xl my-4 md:my-7'>Why You Should Choose
      PlanMake Platform</h1>
      <p className='text-gray-500 text-sm font-medium my-5 md:my-7'>With verified campaigns, clear organizer details, and endorsements from reputable individuals or organizations, donors can feel confident in supporting your cause.Ensure your website is mobile-friendly and optimized for people with disabilities, making it inclusive for everyone to contribute.</p>
     <div className='flex flex-col gap-y-5'>
     <div className='md:flex gap-x-2  border-2 rounded-xl py-5'>
        <div className='border rounded-xl p-2 my-5 md:my-0 ml-2'>
        <h1 className='text-6xl text-blue-900 '><GiTrophyCup /></h1>
        </div>
        <div>
            <h1 className='font-semibold text-gray-700 text-lg'>Highest Success Rates</h1>
            <p className='text-gray-500 text-sm my-2'>Support campaigns of all sizes, from grassroots initiatives to global movements, ensuring every campaigner has the resources they need to succeed.</p>
        </div>
      </div>
      <div  className='md:flex gap-x-2  border-2 rounded-xl py-5'>
        <div className='border rounded-xl p-2 my-5 md:my-0 md:ml-2'>
        <h1 className='text-6xl text-blue-900 '><LiaSortNumericUpSolid /></h1>
        </div>
        <div>
            <h1 className='font-semibold text-gray-700 text-lg'>Millions in Funding</h1>
            <p className='text-gray-500 text-sm my-2'>Advanced marketing tools and targeted outreach strategies connect campaigns with the right audiences. The platform's secure payment processing ensures safe and seamless transactions.</p>
        </div>
      </div>
     </div>
      </div>
      <div  className='md:col-span-5 flex flex-col justify-center items-center'>
<h1 className='text-[300px] text-orange-400'>      <GiTrophyCup /></h1>
      </div>
    </div>
  )
}

export default Discovar
