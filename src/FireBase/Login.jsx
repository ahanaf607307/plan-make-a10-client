import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { IoLogoGoogleplus } from "react-icons/io";

function Login() {
  const { loginExUser, setUsers, googleSignIn, errorInvalid, setErrorInvalid } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginUser = { email, password };

    setErrorInvalid("");
    if (password.length < 6) {
      setErrorInvalid("Password at least 6 carecter");
      return;
    }

    loginExUser(email, password)
      .then((result) => {
        setUsers({
          ...result.user,
        });
        Swal.fire({
          title: "Login Successfully",
          text: "Click Ok to Continue",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        
        setErrorInvalid(error.message);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        setUsers({
          ...result.user,
        });
        loginSuccessAlert();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
 
        setErrorInvalid(error.message);
        faildLoginAlert();
      });

    const loginSuccessAlert = () => {
      Swal.fire({
        title: "Login Successfully",
        text: "Click Ok to Continue",
        icon: "success",
      });
    };

    const faildLoginAlert = () => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Check Your Email And Password",
        showConfirmButton: false,
        timer: 1500,
      });
    };
  };
  return (
    <div className="border-2 rounded-xl shadow-2xl md:w-[500px] my-10 md:my-32 mx-auto p-4 m-2 md:p-10">
      <h1 className="text-center font-semibold my-5 text-3xl">Login Your Account</h1>
      <form onSubmit={handleLogin} className="font-semibold text-gray-600">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full "
            required
          />
        </label>
        <input type="submit" value="Login" className="btn text-white w-full bg-blue-500 mt-8" />
      </form>
      <h1 className="my-3 text-red-600 mx-auto text-lg">{errorInvalid} </h1>
      <button className="btn mt-5 bg-blue-200" onClick={handleGoogle}>
        Login With Google{" "} <IoLogoGoogleplus className="text-emerald-600 text-xl" />
      </button>
      <h1 className="my-10">
        New User ?{" "}
        <Link className="text-red-600 underline" to="/register">
          Register
        </Link>{" "}
      </h1>
    </div>
  );
}

export default Login;
