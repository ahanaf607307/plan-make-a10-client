import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { registerUserNew , setUsers ,updateProfileUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const registerUser = { name, photoUrl, email, password };
    console.log(registerUser);
    registerUserNew( email, password)
      .then((result) => {
        console.log(result.user)
        
        updateProfileUser({displayName:name , photoURL:photoUrl})
        .then(() => {
            console.log('updated')
        })
        .catch(err => console.log("error is here" , err))
        setUsers(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log('Err from Register/SignUp->' , error)
      })
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
    </div>
  );
}

export default SignUp;
