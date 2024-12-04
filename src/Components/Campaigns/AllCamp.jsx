import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../FireBase/AuthProvider'

function AllCamp() {
  const campaigns = useLoaderData()
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
  
    </tr>
  </thead>
  <tbody>
    {
      campaigns.map((camp,index) => <tr key={camp?._id}>
        <th>{index+1}</th>
        <td>{camp?.campignsName}</td>
        <td>{camp?.campignsType}</td>
        <td>{camp?.minDonation}</td>
        <td>{camp?.deadline}</td>
        <td>{camp?.userEmail}</td>
 
      </tr>)
    }

 </tbody>
</table>
</div>
  </div>
  )
}

export default AllCamp
