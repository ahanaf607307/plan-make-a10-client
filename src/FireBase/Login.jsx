import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

function Login() {
    const { loginExUser , setUsers , googleSignIn } = useContext(AuthContext);
const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginUser = { email, password };
        console.log(loginUser);
        loginExUser(email, password)
        .then(result => {
            setUsers(result.user)
            navigate('/')
        })
        .catch(error=> console.log('Error from login' , error))
    }

    const handleGoogle = () =>{
      googleSignIn()
      .then(result => {
        setUsers(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log('Error from ' , error)
      })
    }
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
        <input
          type="submit"
          value="Login"
          className="btn w-full bg-red-500"
        />
      </form>
      <button className='btn' onClick={handleGoogle}>Login With Google </button>
    </div>

  )
}

export default Login
