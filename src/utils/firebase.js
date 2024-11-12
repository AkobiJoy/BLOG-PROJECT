// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "newblog-17358.firebaseapp.com",
  projectId: "newblog-17358",
  storageBucket: "newblog-17358.firebasestorage.app",
  messagingSenderId: "1040821802845",
  appId: "1:1040821802845:web:cd2e493d5eb147af863ab4",
  measurementId: "G-1LG9WMX945"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);