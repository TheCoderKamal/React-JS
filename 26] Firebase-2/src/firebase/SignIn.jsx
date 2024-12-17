import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, pass)
    .then(data => {
      navigate("/dashboard", {replace: true});
    })
    .catch(err => {
      console.error("Sign In Error:", err);
    })
  }

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
            <form onSubmit={handleSignIn} className="space-y-4">
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
              Don't have an account? <Link to={"/"} className="text-red-500 hover:underline">Sign Up</Link>
            </p>
        </div>
    </div>
  )
}
