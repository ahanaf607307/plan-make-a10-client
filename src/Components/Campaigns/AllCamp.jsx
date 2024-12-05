import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../FireBase/AuthProvider'

function AllCamp() {
  const campaign = useLoaderData()
  const {users} = useContext(AuthContext)
  return (
    <div>
    <h1 className='text-center text-3xl'>All Campaigns</h1>
    

<div className="overflow-x-auto">
<table className="table table-xs">
  <thead>
    <tr>
      <th></th>
      <th>Campaign Name</th>
      <th>Campaign Type</th>
      <th> Donation amount</th>
      <th>Deadline </th>
      <th>User Email </th>
      <th></th>
  
    </tr>
  </thead>
  <tbody>
    {
      campaign.map((camp,index) => <tr key={camp?._id}>
        <th>{index+1}</th>
        <td>{camp?.campignsName}</td>
        <td>{camp?.campignsType}</td>
        <td>{camp?.minDonation}</td>
        <td>{camp?.deadline}</td>
        <td>{camp?.userEmail}</td>
        <td><Link to={`/details/${camp?._id}`} className='btn bg-orange-600 text-white'>See More </Link></td>
 
      </tr>)
    }

 </tbody>
</table>
</div>
  </div>
  )
}

export default AllCamp
