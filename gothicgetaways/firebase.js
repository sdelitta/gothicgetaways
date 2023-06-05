// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${FIREBASE_APP_KEY}`,
  authDomain: "gothicgetaways.firebaseapp.com",
  projectId: "gothicgetaways",
  storageBucket: "gothicgetaways.appspot.com",
  messagingSenderId: "382987624596",
  appId: `${FIREBASE_APP_ID}`,
  measurementId: "G-MBH8Z5LJNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);