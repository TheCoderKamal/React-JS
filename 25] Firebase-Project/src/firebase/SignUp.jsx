import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    // USESTATES :
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    // USENAVIGATE :
    const navigate = useNavigate();

    // HANDLE SIGNUP :
    const handleSignUp = async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                console.log(data);
                setDoc(doc(db, "users", data.user.uid), { name, age, city, email });
                navigate("/dashboard");
            })
            .catch(err => console.error("Signup Error:", err));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter name..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter age..."
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter city..."
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="email"
                        placeholder="Enter email..."
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="password"
                        placeholder="Enter password..."
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold shadow-md transition duration-300">
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-400 text-sm mt-4">
                    Already have an account? <Link to={"/signin"} className="text-red-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}
