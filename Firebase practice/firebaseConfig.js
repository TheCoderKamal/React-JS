// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzt9i2lmkuG3VP298KqdbWSFpygvm85ps",
    authDomain: "fir-understand-76af2.firebaseapp.com",
    projectId: "fir-understand-76af2",
    storageBucket: "fir-understand-76af2.firebasestorage.app",
    messagingSenderId: "235514539273",
    appId: "1:235514539273:web:42a066cd8f6ac947c877d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = Firestore(app);

export{ auth, db };