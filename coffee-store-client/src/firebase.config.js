// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoaTVt-cXi0NbeimA36kw3GvQ1L-yqOHU",
  authDomain: "coffee-store-9c76f.firebaseapp.com",
  projectId: "coffee-store-9c76f",
  storageBucket: "coffee-store-9c76f.appspot.com",
  messagingSenderId: "10207875056",
  appId: "1:10207875056:web:e929528e549e879d53d735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth