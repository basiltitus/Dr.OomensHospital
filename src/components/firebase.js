// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1CAmkUK8Dx13kAGxULV9A7h4sZ_JBW8o",
  authDomain: "droommens.firebaseapp.com",
  databaseURL: "https://droommens-default-rtdb.firebaseio.com",
  projectId: "droommens",
  storageBucket: "droommens.appspot.com",
  messagingSenderId: "318788122541",
  appId: "1:318788122541:web:da7f6470d138fc6c749324",
  measurementId: "G-2395G6XRFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
