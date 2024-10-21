import React, { useState } from 'react';

export default function DynamicFormComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            setError("Invalid email address");
        } else {
            setError("");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-light mb-10 tracking-wide text-gray-800">Welcome Back</h1>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 w-full max-w-md transform transition-all hover:scale-105 duration-300">
                <div className="mb-5">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" 
                        onChange={(event) => setName(event.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <input 
                        type="text" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" 
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                </div>
                <div className="mb-5">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" 
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" 
                        onChange={(event) => setConfirmPassword(event.target.value)} 
                    />
                </div>

                <div className="mb-5">
                    <select 
                        onChange={(event) => setSelect(event.target.value)} 
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300"
                    >
                        <option hidden>Select Category</option>
                        <option value="cricket">Cricket</option>
                        <option value="football">Football</option>
                        <option value="chess">Chess</option>
                        <option value="basketball">Basketball</option>
                    </select>
                </div>

                {select === "chess" && (
                    <div className="mb-5">
                        <input 
                            type="text" 
                            placeholder="Enter time..." 
                            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-300" 
                        />
                    </div>
                )}

                <button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
