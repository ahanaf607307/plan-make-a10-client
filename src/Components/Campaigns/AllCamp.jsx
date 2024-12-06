import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../FireBase/AuthProvider';

function AllCamp() {
  const campaign = useLoaderData();

  const [sorded, setSorted] = useState(campaign);
  const handleSort = () => {
    const sortData = [...sorded].sort((a, b) => b.minDonation - a.minDonation);
    setSorted(sortData);
  };

  return (
    <div>
      <h1 className="text-center text-3xl mt-10 mb-7 font-semibold">All Campaigns</h1>

      <div className="text-center my-5 flex gap-2 items-center justify-center">
        <h1 className='font-semibold text-gray-500'>Sort Data by Highest Donation to Lowest  Donation : </h1><button 
          onClick={handleSort} 
          className="py-2 hover:bg-blue-800 hover:scale-105 transition duration-100 rounded-md font-semibold bg-blue-500 px-5 text-white"
        >
          Sort 
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Campaign Name</th>
              <th>Campaign Type</th>
              <th>Donation Amount</th>
              <th>Deadline</th>
              <th>User Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sorded.map((camp, index) => (
              <tr key={camp?._id}>
                <th>{index + 1}</th>
                <td>{camp?.campignsName}</td>
                <td>{camp?.campignsType}</td>
                <td>{camp?.minDonation}</td>
                <td>{camp?.deadline}</td>
                <td>{camp?.userEmail}</td>
                <td>
                  <Link to={`/details/${camp?._id}`} className="btn bg-blue-600 text-white">
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCamp;
