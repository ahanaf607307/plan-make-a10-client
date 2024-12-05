import React, { useContext } from "react";
import { AuthContext } from "../../FireBase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function Update() {
  const { users } = useContext(AuthContext);
  const campaigns = useLoaderData();
  const { _id } = campaigns;
  console.log(_id);
  console.log(campaigns);

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
    console.log(addCampDetails);
    fetch(`http://localhost:8000/campaigns/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCampDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully Updated!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okey",
          });
        }
      });

      
  };
  return (
    <div className="w-8/12 border-2 ">
      <form onSubmit={handleAddCamp}>
        <div className="grid grid-cols-2">
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
                defaultValue={campaigns.userName}
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
                className="input input-bordered w-full max-w-xs"
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
          value="Add Campaign"
          className="btn w-full bg-red-500 "
        />
      </form>
    </div>
  );
}

export default Update;
