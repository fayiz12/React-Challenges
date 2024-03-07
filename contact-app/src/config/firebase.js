// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCoYHQqzsOfFT9LnnUvQITMra6BspNyAZA",
  authDomain: "contact-app-57602.firebaseapp.com",
  projectId: "contact-app-57602",
  storageBucket: "contact-app-57602.appspot.com",
  messagingSenderId: "1015476089924",
  appId: "1:1015476089924:web:9183ad2d38727df764f811",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
