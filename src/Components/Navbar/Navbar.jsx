import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../FireBase/AuthProvider";
import logo from "/public/logo.png";

function Navbar() {
  const {users , signOutUser} = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl">
          <img className="w-12 rounded-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allCamp">All Campaign</NavLink>
          </li>
         {
          users? <div className="flex gap-x-2"><li>
          <NavLink to="/addNewCamp">Add New Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/myCamp">My Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/myDonation">My Donations</NavLink>
        </li></div>:''
         }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex gap-x-2 ">
      
      
              {users? '' : <div className="flex gap-x-2"><NavLink to="/login" className="btn">
                LogIn
              </NavLink> <NavLink to="/register" className="btn">
              Register
              </NavLink></div> }


        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 border-2 rounded-full">
              {
                users?<img
                alt="Profile Picture"
                src={users?.photoURL}
                className="rounded-full"
              />:<img
             
                src="/src/assets/noUser.png"
              />
              }
              
              
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           <li><div className="grid grid-cols-2 items-center">
            <h1>Name</h1>
            <h1>{users?.displayName}</h1>
            </div></li>
            <li>
              {users? <button onClick={()=>signOutUser()} className="btn"> Logout</button> : <div className="flex gap-x-2"><NavLink to="/login" className="btn">
                LogIn
              </NavLink> <NavLink to="/register" className="btn">
              Register
              </NavLink></div> }
            </li>
          </ul>
        </div>
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu absolute right-0 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allCamp">All Campaign</NavLink>
          </li>
          {
          users? <div className="flex flex-col gap-y-2"><li>
          <NavLink to="/addNewCamp">Add New Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/myCamp">My Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/myDonation">My Donations</NavLink>
        </li></div>:''
         }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
