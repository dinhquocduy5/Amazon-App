// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjYPpKTTQgunVPBvuVZ90zzzo-nQjamC8",
  authDomain: "auth-afa84.firebaseapp.com",
  projectId: "auth-afa84",
  storageBucket: "auth-afa84.appspot.com",
  messagingSenderId: "994963282448",
  appId: "1:994963282448:web:70104a3fb3c913b554c895",
  measurementId: "G-05GPJPFQFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {app,db};