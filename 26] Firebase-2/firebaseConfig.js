// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwojJmWgiBpFpKYXN7fxNnrw7YVdXQ-Ms",
  authDomain: "fir-2-c78ac.firebaseapp.com",
  projectId: "fir-2-c78ac",
  storageBucket: "fir-2-c78ac.firebasestorage.app",
  messagingSenderId: "571012300046",
  appId: "1:571012300046:web:a43f5f7557bd0a9099eb5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const google = new GoogleAuthProvider

export {auth, db, google};