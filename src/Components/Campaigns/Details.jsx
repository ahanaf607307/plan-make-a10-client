import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../FireBase/AuthProvider";

function Details() {
  const detail = useLoaderData();
  const { users } = useContext(AuthContext);
  console.log(detail);
  const {
    _id,
    imageUrl,
    campignsName,
    campignsType,
    minDonation,
    deadline,
    userEmail,
    userName,
    description,
  } = detail;

  const handleDonate = (_id) => {
    console.log(_id);
    fetch("http://localhost:8000/campaignsDonation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ detail, donarEmail: users.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        SuccessAlert();
      })
      .catch((error) => {
        console.error("Error from details -> :", error);
      });
  };

  const SuccessAlert = () => {
    Swal.fire({
      title: "Donate Successfully",
      text: "Click Ok to Continue",
      icon: "success",
    });
  };

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 items-center border-2 my-20 rounded-md shadow-xl bg-blue-100 gap-5 p-5">
    <div className="img">
      <img src={imageUrl} className="w-full rounded-xl" />
    </div>
    <div>
      <h1 className="bg-blue-400 px-2 py-1 md:w-4/12 text-center rounded-md font-semibold text-white">{campignsType}</h1>
      <h1 className="text-3xl font-semibold my-5">{campignsName}</h1>
  <div className="flex gap-x-10 py-5">
<section className="bg-white/40  py-5 px-5 font-semibold rounded-xl text-center">  <h1>{minDonation} $ </h1><p>Minium Donation</p></section>
<section className="bg-white/40 text-center py-5 px-5 mr-20 font-semibold rounded-xl">  <h1>{deadline}</h1><p>Deadline </p></section>
  </div>
      <h1 className="text-sm text-gray-500">{description}</h1>
     <section className="my-5 text-gray-700">
     <h1>User Email : {userEmail}</h1>
     <h1>User Name : {userName}</h1>
     </section>
     <div className="flex justify-end px-5">
     <button className="btn bg-blue-400 text-white" onClick={()=>handleDonate(_id)}>Donate</button>
     </div>
    </div>
   </div>
  );
}

export default Details;
