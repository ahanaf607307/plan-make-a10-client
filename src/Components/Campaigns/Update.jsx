import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../FireBase/AuthProvider";

function Update() {
  const { users } = useContext(AuthContext);
  const campaigns = useLoaderData();
  const { _id } = campaigns;


  const handleAddCamp = (e) => {
    e.preventDefault();
    const imageUrl = e.target.imageUrl.value;
    const campignsName = e.target.campignsName.value;
    const campignsType = e.target.campignsType.value;
    const description = e.target.description.value;
    const minDonation = e.target.minDonation.value;
    const deadline = e.target.deadline.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    const addCampDetails = {
      imageUrl,
      campignsName,
      campignsType,
      description,
      minDonation,
      deadline,
      userEmail,
      userName,
    };
  
    fetch(`https://server-croud-funding.vercel.app/campaigns/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCampDetails),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully Updated!",
            text: "Do you want to continue",
            icon: "success",
          });
        }
      });

      
  };
  return (
    <div  className='md:w-10/12 border-2 rounded-xl p-10 md:my-20 mx-auto shadow-xl'>
      <h1 className="text-center font-semibold my-5 text-2xl">Update Campaign : <span className="text-blue-500">{campaigns.campignsName}</span></h1>
      <form onSubmit={handleAddCamp} >
        <div className='grid md:grid-cols-2 text-gray-600 font-semibold'>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Image Url</span>
              </div>
              <input
                type="text"
                name="imageUrl"
                defaultValue={campaigns.imageUrl}
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
                defaultValue={campaigns.campignsName}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Select Campaign Type</span>
              </div>
              <select
                name="campignsType"
                defaultValue={campaigns.campignsType}
                className="input input-bordered w-full max-w-xs"
              >
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
              <textarea
                name="description"
                defaultValue={campaigns.description}
                maxlength="340"
                
                className="input input-bordered w-full max-w-xs  "
              ></textarea>
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Minimum Donation Amount "1000 $"
                </span>
              </div>
              <input
                type="text"
                name="minDonation"
                defaultValue={campaigns.minDonation}
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
                defaultValue={campaigns.deadline}
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
          value="Update Campaign"
          className="btn w-full bg-blue-500 my-5 text-white"
        />
      </form>
    </div>
  );
}

export default Update;
