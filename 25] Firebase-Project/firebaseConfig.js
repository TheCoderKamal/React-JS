// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOWO-AaG57TZpwO2r4EaOQ72Pi0e4pWJE",
    authDomain: "fir-project-c7fab.firebaseapp.com",
    projectId: "fir-project-c7fab",
    storageBucket: "fir-project-c7fab.firebasestorage.app",
    messagingSenderId: "576613406152",
    appId: "1:576613406152:web:1d7ec9ee4b9c750c93dcfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};