// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-mk.firebaseapp.com",
  projectId: "mern-estate-mk",
  storageBucket: "mern-estate-mk.appspot.com",
  messagingSenderId: "380321354563",
  appId: "1:380321354563:web:d1892bdb09263d9b59d5f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
