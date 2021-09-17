
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5ab7GSA0CCeXorVvNvwYs16SwWaixZQQ",
    authDomain: "clone-6fd1d.firebaseapp.com",
    projectId: "clone-6fd1d",
    storageBucket: "clone-6fd1d.appspot.com",
    messagingSenderId: "512013547641",
    appId: "1:512013547641:web:51066acd88c14103dfbca8",
    measurementId: "G-LYJFQ0JKFS"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};