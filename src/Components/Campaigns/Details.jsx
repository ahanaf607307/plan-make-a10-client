import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../FireBase/AuthProvider'
import Swal from 'sweetalert2'

function Details() {
    const detail = useLoaderData()
    const {users} = useContext(AuthContext)
    console.log(detail)
    const {_id,imageUrl,campignsName,campignsType,minDonation,deadline,userEmail,userName , description} = detail

    const handleDonate = (_id) => {
      console.log(_id)
      fetch('http://localhost:8000/campaignsDonation', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({detail,donarEmail:users.email}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Response from server:", data);
          SuccessAlert()
        })
        .catch((error) => {
          console.error("Error from details -> :", error);
        });
      
    }

    const SuccessAlert = () => {
      Swal.fire({
        title: "Donate Successfully",
        text: "Click Ok to Continue",
        icon: "success",
      });
    };

    
  return (
    <div className="card lg:card-side bg-base-100 border-2 shadow-xl grid grid-cols-1 md:grid-cols-12 mt-10">
    <figure className='h-96 col-span-5'>
      <img
        src={imageUrl}
        alt="Album" />
    </figure>
    <div className="card-body col-span-7">
      <h2 className="card-title">{campignsName}</h2>
      <p>{campignsType}</p>
      <p>{description}</p>
      <p>Minium Donation Amount : {minDonation}</p>
      <p>{deadline}</p>
      <p>User Email : {userEmail}</p>
      <p>User Name : {userName}</p>
      <div className="card-actions justify-end">
        <button onClick={()=>handleDonate(_id)} className="btn bg-orange-500">Donate</button>
      </div>
    </div>
  </div>
  )
}

export default Details
