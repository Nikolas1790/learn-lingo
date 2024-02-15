// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANQdHZQoSank5qU1Gvm2aXNzyTPjVq94k",
  authDomain: "lingo-2cb9e.firebaseapp.com",
  projectId: "lingo-2cb9e",
  storageBucket: "lingo-2cb9e.appspot.com",
  messagingSenderId: "78659414357",
  appId: "1:78659414357:web:2b221930e648ceac7de7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);