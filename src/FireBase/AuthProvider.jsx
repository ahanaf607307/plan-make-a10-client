
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";
import Swal from "sweetalert2";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const name = "ahanaf";

  const [users , setUsers] = useState(null)
  const [loader , setLoader] = useState(true)
  const [errorInvalid, setErrorInvalid] = useState("");

// Register new user
  const registerUserNew = ( email , password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateProfileUser = (updatedData) => {
  return  updateProfile(auth.currentUser, updatedData)
  }

// Login User 
const loginExUser = (email ,password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
// google sign in 
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
}
// logout user / sign out user 

const signOutUser = () => {
   return signOut(auth).then(() => {
    Swal.fire({
      title: "SignOut Successfully",
      text: "Do you want to continue",
      icon: "success",
    });
      }).catch((error) => {
        console.log('Error From ' , error)
      });
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUsers(currentUser)
        setLoader(false)

    })
    return()=> {
        unSubscribe()
    }
  })

  const userInfo = {
    name,
    registerUserNew,
    setUsers,
    users,
    updateProfileUser,
    loginExUser,
    signOutUser,
    loader,
    googleSignIn,
    errorInvalid,
    setErrorInvalid
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
