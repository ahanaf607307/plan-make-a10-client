import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

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
    console.log(loginUser);
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
        console.log("Error from login", error);
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
        console.log("Error from ", error);
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
    <div>
      <form onSubmit={handleLogin}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <input type="submit" value="Login" className="btn w-full bg-red-500" />
      </form>
      <h1 className="my-2 text-red-600 mx-auto text-lg">{errorInvalid} </h1>
      <button className="btn" onClick={handleGoogle}>
        Login With Google{" "}
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
