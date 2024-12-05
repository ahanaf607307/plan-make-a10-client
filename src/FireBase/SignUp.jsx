import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const { registerUserNew , setUsers ,updateProfileUser , setErrorInvalid,errorInvalid} = useContext(AuthContext);
  const navigate = useNavigate()



  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const registerUser = { name, photoUrl, email, password };
    console.log(registerUser);

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(password.length < 6){
      setErrorInvalid('Password at least 6 carecter')
      return
 }

 if(!validPassword.test(password)) {
     setErrorInvalid('Password at least one Upparcase Letter , one LowerCase Letter ')
     return;
 }
 


    registerUserNew( email, password)
      .then((result) => {
        console.log(result.user)
        setErrorInvalid('')
        updateProfileUser({displayName:name , photoURL:photoUrl})
        .then(() => {
            console.log('updated')
            setUsers({
              ...result.user,
            })
        })
        .catch(err => console.log("error is here" , err))
        setUsers({
          ...result.user,
        })
        loginSuccessAlert()
        navigate('/')
      })
      .catch(error => {
        console.log('Err from Register/SignUp->' , error)
        setErrorInvalid(error.message)
      })

      const loginSuccessAlert = () => {
        Swal.fire({
          title: "Register Successfully",
          text: "Click Ok to Continue",
          icon: "success"
        });
      }
    
     
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Photo Url</span>
          </div>
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo Url"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
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
        <input
          type="submit"
          value="Register"
          className="btn w-full bg-red-500"
        />
      </form>
      <h1 className='my-2 text-red-600 mx-auto text-lg'>{errorInvalid} </h1>
      <h1 className="my-10">
        Already Have an account  ?{" "}
        <Link className="text-red-600 underline" to="/login">
          Login
        </Link>{" "}
      </h1>
    </div>
  );
}

export default SignUp;
