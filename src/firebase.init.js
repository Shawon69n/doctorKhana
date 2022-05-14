// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBbl-KCBYIapuAEy1_4bDzHIiOh5WG6G64",
  authDomain: "doctor-khana-a1f20.firebaseapp.com",
  projectId: "doctor-khana-a1f20",
  storageBucket: "doctor-khana-a1f20.appspot.com",
  messagingSenderId: "533395092032",
  appId: "1:533395092032:web:d6101ee0f31b0a373165a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;