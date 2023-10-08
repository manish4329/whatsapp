// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJA-GKKFMvM6nsQKUGb1udNzKqdK0sPgA",
  authDomain: "nextjs-whatapp-62f96.firebaseapp.com",
  projectId: "nextjs-whatapp-62f96",
  storageBucket: "nextjs-whatapp-62f96.appspot.com",
  messagingSenderId: "793213149168",
  appId: "1:793213149168:web:9c8b6d5a8daa3f29cc4735",
  measurementId: "G-N8LXTDXWWJ"
};

// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export { firestoreApp, googleProvider, auth };