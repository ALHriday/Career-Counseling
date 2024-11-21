// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD45ERUFNfDzjFQ7DbI_aS0vtCyPXlXCRs",
  authDomain: "fir-practice-10622.firebaseapp.com",
  projectId: "fir-practice-10622",
  storageBucket: "fir-practice-10622.firebasestorage.app",
  messagingSenderId: "1071534573223",
  appId: "1:1071534573223:web:c58166dc5e176856cefd82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
