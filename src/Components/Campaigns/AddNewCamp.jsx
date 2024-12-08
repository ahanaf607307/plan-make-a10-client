import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'
import { AuthContext } from '../../FireBase/AuthProvider'


function AddNewCamp() {
  const {users} = useContext(AuthContext)
 
  const handleAddCamp = (e) => {
    e.preventDefault();
    const addCampDetails = {
      imageUrl: e.target.imageUrl.value,
      campignsName: e.target.campignsName.value,
      campignsType: e.target.campignsType.value,
      description: e.target.description.value,
      minDonation: Number(e.target.minDonation.value),
      deadline: new Date(e.target.deadline.value).toISOString(),
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };
  
    fetch('https://server-croud-funding.vercel.app/campaigns', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(addCampDetails),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        Swal.fire({
          title: 'Added Campaign',
          text: 'Your Campaign has been added successfully.',
          icon: 'success',
        });
      })
     
  };
  
  return (
    <div className='md:w-10/12 border-2 rounded-xl p-10 md:my-20 mx-auto'>
      <Helmet>
        <title>Add New Campaign | PlanMake</title>
      </Helmet>
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
            className="input input-bordered w-full max-w-xs" required
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
            className="input input-bordered w-full max-w-xs" required
          />
        </label>
     </div>
        <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Campaign Type</span>
          </div>
        <select name="campignsType" className='input input-bordered w-full max-w-xs' >
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
          <textarea  maxLength="340" name="description" placeholder='Description' className='input input-bordered w-full max-w-xs' required></textarea>
        </label>
        </div>
      <div>
      <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Minimum Donation Amount </span>
          </div>
          <input
            type="number"
            name="minDonation"
           placeholder='Minimum Donation Amount'
            className="input input-bordered w-full max-w-xs" required
            min='1'
          />
        </label>
        <label className="form-control w-full max-w-xs cursor-pointer">
          <div className="label">
            <span className="label-text">Deadline</span>
          </div>
          <input
            type="date"
            name="deadline"
            placeholder="Deadline"
            className="input input-bordered w-full max-w-xs cursor-pointer" required
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
            className="input input-bordered w-full max-w-xs" required
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
            className="input input-bordered w-full max-w-xs read-only" required
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
