import React, { useState } from 'react';

export default function DynamicForm() {
    const [sellerID, setSellerID] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [select, setSelect] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(sellerID)) {
            setError("Invalid email id");
            return; 
        } else {
            setError(""); 
        }

        setSellerID("");
        setCompanyName("");
        setProductName("");
        setProductPrice("");
        setSelect("");
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-5">
            <div className="bg-gray-800 shadow-2xl rounded-xl p-10 w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Dynamic Form</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter seller email id..."
                            value={sellerID} 
                            onChange={(event) => setSellerID(event.target.value)}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                    </div>

                    <input
                        type="text"
                        placeholder="Enter company's name..."
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Product name..."
                        value={productName}
                        onChange={(event) => setProductName(event.target.value)}
                        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Product price..."
                        value={productPrice}
                        onChange={(event) => setProductPrice(event.target.value)}
                        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <select
                        value={select}
                        onChange={(event) => setSelect(event.target.value)}
                        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 appearance-none"
                        required
                    >
                        <option hidden>Select option</option>
                        <option value="clothes" className="bg-gray-800">Clothes</option>
                        <option value="electronics" className="bg-gray-800">Electronics</option>
                        <option value="books" className="bg-gray-800">Books</option>
                        <option value="watches" className="bg-gray-800">Watches</option>
                    </select>

                    {select === "clothes" && (
                        <>
                            <input type="text" placeholder="Enter color..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter size..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter brand..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                        </>
                    )}

                    {select === "electronics" && (
                        <>
                            <input type="text" placeholder="Enter brand..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter model..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter warranty(years)..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                        </>
                    )}

                    {select === "books" && (
                        <>
                            <input type="text" placeholder="Enter title..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter author..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter publisher..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                        </>
                    )}

                    {select === "watches" && (
                        <>
                            <input type="text" placeholder="Enter brand..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter type..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                            <input type="text" placeholder="Enter material..." className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                        </>
                    )}

                    <button type="submit" className="w-full py-3 mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 hover:shadow-lg focus:ring-4 focus:ring-purple-500 transition-all duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
