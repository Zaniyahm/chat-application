// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mjKjWCnLaL7W-qnUrCjMKQgFWt7kQh4",
  authDomain: "chatappv2-b3891.firebaseapp.com",
  projectId: "chatappv2-b3891",
  storageBucket: "chatappv2-b3891.appspot.com",
  messagingSenderId: "648972250334",
  appId: "1:648972250334:web:30aa471e010b395638664f"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
