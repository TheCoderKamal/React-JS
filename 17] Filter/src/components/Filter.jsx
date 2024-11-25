import React, { useState } from "react";

export default function Filter() {
    const [filtered, setFiltered] = useState("all");
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const data = [
        { id: 1, name: "Apple", category: "fruit", price: 2 },
        { id: 2, name: "Carrot", category: "vegetable", price: 1 },
        { id: 3, name: "Banana", category: "fruit", price: 1.5 },
        { id: 4, name: "Broccoli", category: "vegetable", price: 2.5 },
        { id: 5, name: "Mango", category: "fruit", price: 3 },
        { id: 6, name: "Cucumber", category: "vegetable", price: 4 },
    ];

    const filteredData =
        filtered === "all"
        ? data
        : data.filter((item) => item.category === filtered);

    const searchedData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedData = [...searchedData].sort((a, b) => {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Filter & Search</h1>

            <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Category</label>
            <select
                onChange={(e) => setFiltered(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="all">All</option>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
            </select>
            </div>

            <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Search</label>
            <input
                type="text"
                placeholder="Enter name..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Sort by Price</label>
            <div className="flex space-x-4">
                <button
                onClick={() => setSortOrder("asc")}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                Ascending
                </button>
                <button
                onClick={() => setSortOrder("desc")}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                Descending
                </button>
            </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            {sortedData.length ? (
                sortedData.map((element) => (
                <div
                    key={element.id}
                    className="flex justify-between border-b py-2 text-lg"
                >
                    <span>{element.name}</span>
                    <span className="text-gray-600">{element.category}</span>
                    <span className="font-medium">${element.price.toFixed(2)}</span>
                </div>
                ))
            ) : (
                <p className="text-gray-500">No results found</p>
            )}
            </div>
        </div>
        </div>
    );
}
