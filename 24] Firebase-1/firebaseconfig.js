// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBuqaO9-eMDqMfXju2zK1SMyA8ZyvPE-U",
    authDomain: "react-firebaseproject-97e70.firebaseapp.com",
    projectId: "react-firebaseproject-97e70",
    storageBucket: "react-firebaseproject-97e70.firebasestorage.app",
    messagingSenderId: "181974928631",
    appId: "1:181974928631:web:f4fa2b1ef1229cbc3cd7f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};