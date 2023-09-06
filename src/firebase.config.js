// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMgwsQkz36kgoLRfk-p70T_z9I20sQ_EI",
  authDomain: "shivas-server.firebaseapp.com",
  projectId: "shivas-server",
  storageBucket: "shivas-server.appspot.com",
  messagingSenderId: "176714369209",
  appId: "1:176714369209:web:34e1d9579de28047fcb368",
  measurementId: "G-4RBR5TT5S1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
