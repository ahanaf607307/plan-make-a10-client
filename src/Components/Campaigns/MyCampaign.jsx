import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../../FireBase/AuthProvider'

function MyCampaign() {
  const campaigns = useLoaderData()
  const [deleteUser, setDeleteUser] = useState(campaigns)
  const {users} = useContext(AuthContext)

  const handleDeleteCampaign = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(`http://localhost:8000/campaign/${_id}`,{
              method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log('delete one' , data)
              if(data.deletedCount){
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    const remainingUsers = deleteUser.filter(user => user._id !== _id)
                     setDeleteUser(remainingUsers)
              }
             
          })
        
      }
    });
  }
  return (
    <div>
      <h1 className='text-center text-3xl'>{users.displayName}-Campaigns</h1>
      {
        campaigns.length
      }

<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Campaign Name</th>
        <th>Campaign Type</th>
        <th>Minimum donation amount</th>
        <th>Deadline </th>
        <th>Update</th>
        <th>Delete </th>
      </tr>
    </thead>
    <tbody>
      {
        deleteUser.map((camp,index) => <tr key={camp?._id}>
          <th>{index+1}</th>
          <td>{camp.campignsName}</td>
          <td>{camp.campignsType}</td>
          <td>{camp.minDonation}</td>
          <td>{camp.deadline}</td>
          <td><button className='btn'>へ</button></td>
          <td><button onClick={()=>handleDeleteCampaign(camp?._id)} className='btn bg-red-300'>x</button></td>
        </tr>)
      }

   </tbody>
  </table>
</div>
    </div>
  )
}

export default MyCampaign
