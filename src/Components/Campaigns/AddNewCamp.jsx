import React, { useContext } from 'react'
import { AuthContext } from '../../FireBase/AuthProvider'
import Swal from 'sweetalert2'
import { CampApi } from './CampProvider'

function AddNewCamp() {
  const {users} = useContext(AuthContext)
  const {setUpdateCamp} = useContext(CampApi)

  const handleAddCamp = (e) => {
    e.preventDefault()
    const imageUrl = e.target.imageUrl.value;
    const campignsName = e.target.campignsName.value;
    const campignsType = e.target.campignsType.value;
    const description = e.target.description.value;
    const minDonation = e.target.minDonation.value;
    const deadline = e.target.deadline.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    const addCampDetails = {imageUrl,campignsName,campignsType,description,minDonation,deadline,userEmail,userName}
    console.log(addCampDetails)
    fetch('http://localhost:8000/campaigns' , {
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(addCampDetails)
    })
    .then(result => result.json())
    .then(data => {
      Swal.fire({
        title: "Added Campaign",
        text: "Your Campaign has been Added.",
        icon: "success"
      });
      console.log(data)
      // setUpdateCamp(data)
    })

    
  }
  return (
    <div className='md:w-10/12 border-2 rounded-xl p-10 md:my-20 mx-auto'>
      <h1 className='text-center font-semibold text-3xl my-6'>Add New Campaign</h1>
     <form onSubmit={handleAddCamp}>
    <div className='grid md:grid-cols-2 text-gray-600 font-semibold'>
    <div>
     <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image Url</span>
          </div>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image Url"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
     <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Campigns Name</span>
          </div>
          <input
            type="text"
            name="campignsName"
            placeholder="Campigns Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
     </div>
        <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Campaign Type</span>
          </div>
        <select name="campignsType" className='input input-bordered w-full max-w-xs'>
          <option value="">Select Campaign Type</option>
          <option value="Personal Issue">Personal Issue</option>
          <option value="Startup">Startup</option>
          <option value="Business">Business</option>
          <option value="Creative Ideas">Creative Ideas</option>
        </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea  maxlength="340" name="description" placeholder='Description' className='input input-bordered w-full max-w-xs'></textarea>
        </label>
        </div>
      <div>
      <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Minimum Donation Amount "1000 $"</span>
          </div>
          <input
            type="text"
            name="minDonation"
            defaultValue="1000"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Deadline</span>
          </div>
          <input
            type="date"
            name="deadline"
            placeholder="Deadline"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
       
       <div>
       <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">User Email</span>
          </div>
          <input
            type="email"
            name="userEmail"
            value={users?.email}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">User Name</span>
          </div>
          <input
            type="text"
            name="userName"
            value={users?.displayName}
            className="input input-bordered w-full max-w-xs read-only"
          />
        </label>
       </div>
    </div>
        <input
          type="submit"
          value="Add Campaign"
          className="btn w-full bg-blue-500 text-white font-semibold mt-5"
        />
     </form>
    </div>
  )
}

export default AddNewCamp
