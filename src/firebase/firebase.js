// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSni91jSYdqYI4BbjkCLGhJirAxTHnmNc",
  authDomain: "ryzen-project.firebaseapp.com",
  projectId: "ryzen-project",
  storageBucket: "ryzen-project.appspot.com",
  messagingSenderId: "1015999517042",
  appId: "1:1015999517042:web:c4139e53af2ce3e4934deb",
  measurementId: "G-T7GY9E6QV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)