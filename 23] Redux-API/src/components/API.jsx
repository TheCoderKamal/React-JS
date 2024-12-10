/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, fetchAPI, updateData } from '../slices/Slice';

export default function API() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.key);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [result, setResult] = useState("");
    const [pic, setPic] = useState("");
    const [editID, setEditID] = useState(null);

    useEffect(()=>{
        dispatch(fetchAPI())
    },[])

    const addRecord = (event) => {
        event.preventDefault();

        if(editID){
            const updatedObject = {id: editID, name, age, result, pic};
            dispatch(updateData(updatedObject));
            setEditID(null);
        }else{
            const object = {id: String(Date.now()), name, age, result, pic};
            dispatch(addData(object));
        }
        setName("");
        setAge("");
        setResult("");
        setPic("");
    }

    const editData = (element) => {
        setEditID(element.id);
        setName(element.name);
        setAge(element.age);
        setPic(element.pic);
        setResult(element.result);
    }

    return (
        <>
            <div className="flex h-screen bg-gray-900 relative overflow-scroll flex">
                {/* Input Section */}
                <div className="w-1/3 bg-gray-800 p-6 fixed shadow-lg top-[22%] left-[3%] rounded-xl ">
                    <h2 className="text-white text-xl font-bold mb-6">Input Data</h2>
                    <form
                    onSubmit={(event) => addRecord(event)}
                    className="space-y-4"
                    >
                    <input
                        type="text"
                        onChange={(e) => setPic(e.target.value)}
                        placeholder="Enter your image url..."
                        value={pic}
                        className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name..."
                        value={name}
                        className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age..."
                        value={age}
                        className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        onChange={(e) => setResult(e.target.value)}
                        placeholder="Enter your result..."
                        value={result}
                        className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                        {editID ? "Update" : "Submit"}
                    </button>
                    </form>
                </div>

                {/* View Section */}
                <div className="ml-2/3 flex-1 overflow-y-auto p-6 absolute left-[40%]">
                    <h2 className="text-white text-xl font-bold mb-6">View Data</h2>
                    {data.record && data.record.length > 0 ? (
                    <div className="grid grid-cols-2 gap-6">
                        {data.record.map((e, i) => (
                        <ul
                            key={i}
                            className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
                        >
                            <li>
                            <img
                                src={e.pic}
                                alt=""
                                className="w-full h-48 object-cover rounded-tl-[80px] rounded-br-[80px]"
                            />
                            </li>
                            <li className="text-white text-lg font-semibold">{e.name}</li>
                            <li className="text-gray-400">Age: {e.age}</li>
                            <li className="text-gray-400">Result: {e.result}</li>
                            <div className="flex justify-between mt-4">
                            <button
                                onClick={() => editData(e)}
                                className="h-[40px] w-[130px] border border-green-600 text-green-600 hover:border-green-700 hover:text-green-700 text-white font-bold rounded-tl-[20px] rounded-br-[20px] transition duration-300"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(deleteData(e.id))}
                                className="h-[40px] w-[130px] border border-red-600 text-red-600 hover:text-red-700 hover:border-red-700 bg-transparent font-bold py-2 px-4 rounded-tl-[20px] rounded-br-[20px] transition duration-300"
                            >
                                Delete
                            </button>
                            </div>
                        </ul>
                        ))}
                    </div>
                    ) : (
                    <h1 className="text-white text-xl font-semibold">Loading...</h1>
                    )}
                </div>
            </div>
        </>
    )
}
