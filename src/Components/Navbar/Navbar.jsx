
import React, { useContext, useEffect, useState } from "react";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../FireBase/AuthProvider";

function Navbar() {
  const { users, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl text-blue-500">
          <FaFirefoxBrowser className="text-blue-500 text-2xl" /> PlanMake
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex" id="navbar">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allCamp">All Campaign</NavLink>
          </li>
          {users ? (
            <div className="flex gap-x-2">
              <li>
                <NavLink to="/addNewCamp">Add New Campaign</NavLink>
              </li>
              <li>
                <NavLink to={`/myCamp/${users?.email}`}>My Campaign</NavLink>
              </li>
              <li>
                <NavLink to={`/myDonation/${users?.email}`}>
                  My Donations
                </NavLink>
              </li>
            </div>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="navbar-end mr-1  ">
        
        <div className="hidden lg:flex gap-x-2">
          {users ? (
            ""
          ) : (
            <div className="flex gap-x-2">
              <NavLink to="/login" className="btn">
                LogIn
              </NavLink>
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
            </div>
          )}
        </div>
        <button onClick={changeTheme} className="  hidden md:block ml-2 bg-transparent border-none shadow-none mx-2">
          {theme === "light" ?   <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>   :  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg> }
        </button>
        <div className="dropdown dropdown-end">
        <div className="tooltip tooltip-left" data-tip={users?.displayName}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 border-2 rounded-full">
              {users ? (
                <img
                  alt="Profile Picture"
                  src={users?.photoURL}
                  className="rounded-full"
                />
              ) : (
                <img src="/src/assets/noUser.png" />
              )}
            </div>
          </div>
         </div>
              <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-200 rounded-box z-[1] mt-3  w-52 p-2 shadow"
          >
            <li>
              <div className="grid grid-cols-2 items-center">
                <h1>Name</h1>
                <h1>{users?.displayName}</h1>
              </div>
            </li>
            <li>
              {users ? (
                <button onClick={() => signOutUser()} className="btn">
                  Logout
                </button>
              ) : (
                <div className="flex gap-x-2">
                  <NavLink to="/login" className="btn">
                    LogIn
                  </NavLink>
                  <NavLink to="/register" className="btn">
                    Register
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
           
        </div>
        <div className="dropdown relative" id="navbar">
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
            className="menu absolute right-5 menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allCamp">All Campaign</NavLink>
            </li>
            {users ? (
              <div className="flex flex-col gap-x-2">
                <li>
                  <NavLink to="/addNewCamp">Add New Campaign</NavLink>
                </li>
                <li>
                  <NavLink to={`/myCamp/${users?.email}`}>My Campaign</NavLink>
                </li>
                <li>
                  <NavLink to={`/myDonation/${users?.email}`}>
                    My Donations
                  </NavLink>
                </li>
                
              </div>
            ) : (
              ""
              
            )}
            
            <li>
            <button onClick={changeTheme} className="   ml-2 bg-transparent border-none shadow-none mx-2">
          {theme === "light" ?   <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>   :  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg> }
        </button>
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

