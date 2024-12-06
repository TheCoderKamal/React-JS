import axios from "axios";
import React, { useEffect, useState } from "react";

export default function JsonCRUD() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [rate, setRate] = useState("");
    const [count, setCount] = useState("");
    const [editId, setEditId] = useState(null);
    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        let data = await axios.get("http://localhost:5000/products");
        setRecord(data.data);
    };

    const addData = async () => {
        const rating = {
            rate: parseFloat(rate),
            count: parseInt(count)
        };

        if (editId) {
            const updatedObject = {
                id: editId,
                title,
                price,
                description,
                category,
                image,
                rating
            };
            await axios.put(`http://localhost:5000/products/${editId}`, updatedObject);
            fetchAPI();
            setEditId(null);
        } else {
            const object = {
                id: String(Date.now()),
                title,
                price,
                description,
                category,
                image,
                rating
            };
            await axios.post("http://localhost:5000/products", object);
            fetchAPI();
        }

        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
        setRate("");
        setCount("");
    };

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        fetchAPI();
    };

    const editData = (element) => {
        setEditId(element.id);
        setTitle(element.title);
        setPrice(element.price);
        setDescription(element.description);
        setCategory(element.category);
        setImage(element.image);
        setRate(element.rating.rate);
        setCount(element.rating.count);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
            <div className="flex">
                {/* Left Side: Fixed Form */}
                <div className="bg-gray-800 w-[40%] p-5 rounded-lg shadow-md sticky top-10 h-[91vh]">
                    <h2 className="text-xl font-bold mb-5">
                        {editId ? "Edit Product" : "Add Product"}
                    </h2>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            addData();
                        }}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Enter title of product..."
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        />
                        <input
                            type="text"
                            placeholder="Enter price of product..."
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        />
                        <textarea
                            placeholder="Enter description of product..."
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        ></textarea>
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        >
                            <option value="">--select category--</option>
                            <option value="men's clothing">Men&apos;s clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                            <option value="women's clothing">Women&apos;s clothing</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Enter the URL of product..."
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        />
                        <input
                            type="number"
                            step="0.1"
                            placeholder="Enter rating (0 to 5)..."
                            onChange={(e) => setRate(e.target.value)}
                            value={rate}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        />
                        <input
                            type="number"
                            placeholder="Enter count of reviews..."
                            onChange={(e) => setCount(e.target.value)}
                            value={count}
                            className="w-full p-3 border border-gray-700 rounded-lg focus:ring focus:ring-blue-300 bg-gray-700 text-white"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                        >
                            {editId ? "Update" : "Add"}
                        </button>
                    </form>
                </div>

                {/* Right Side: Data Display */}
                <div className="lg:col-span-3 w-[60%] space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-6 ms-10">
                    {record && record.length > 0 ? (
                        record.map((element, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                            >
                                <img
                                    src={element.image}
                                    alt={element.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{element.title}</h3>
                                    <p className="text-gray-400">Price: ${element.price}</p>
                                    <p className="text-gray-400 text-sm mt-2">
                                        {element.description}
                                    </p>
                                    <p className="text-blue-500 text-sm mt-2">
                                        Category: {element.category}
                                    </p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-yellow-500 font-bold">
                                            ⭐ {element.rating?.rate}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {element.rating?.count} reviews
                                        </span>
                                    </div>
                                    <div className="mt-4 flex gap-3">
                                        <button
                                            onClick={() => editData(element)}
                                            className="flex-1 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteData(element.id)}
                                            className="flex-1 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center">No records found...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
