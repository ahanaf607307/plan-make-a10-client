// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd-gmMAbTsq3Y6SYLFbmlPRiJCl3xBoqg",
  authDomain: "croud-funding-2024.firebaseapp.com",
  projectId: "croud-funding-2024",
  storageBucket: "croud-funding-2024.firebasestorage.app",
  messagingSenderId: "243709700306",
  appId: "1:243709700306:web:27a7db072b38303632e50b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth