// import React, { useEffect, useRef, useState } from 'react';

// export default function Create() {
//     const nameInput = useRef();

//     const [name, setName] = useState("");
//     const [subject, setSubject] = useState("");
//     const [city, setCity] = useState("");
//     const [record, setRecord] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         let data = JSON.parse(localStorage.getItem("Students"));
//         setRecord(data || []);
//     }, []);

//     const submit = (event) => {
//         event.preventDefault();

//         if (editIndex == null) {
//             let obj = {
//                 id: Date.now(),
//                 name,
//                 subject,
//                 city
//             }

//             let newRecords = [...record, obj];
//             setRecord(newRecords);
//             localStorage.setItem("Students", JSON.stringify(newRecords));
//         } else {
//             let updatedRecords = record.map(item =>
//                 item.id === editIndex ? { ...item, name, subject, city } : item
//             );

//             setRecord(updatedRecords);
//             localStorage.setItem("Students", JSON.stringify(updatedRecords));
//         }

//         setEditIndex(null);
//         setName("");
//         setSubject("");
//         setCity("");
//         nameInput.current.focus();
//     };

//     const deleteAction = (id) => {
//         let data = record.filter(item => item.id !== id);
//         setRecord(data);
//         localStorage.setItem("Students", JSON.stringify(data));
//     };

//     const editAction = (id) => {
//         let data = record.find(item => item.id === id);
//         setEditIndex(id);

//         setName(data.name);
//         setSubject(data.subject);
//         setCity(data.city);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
//             <div className="flex w-11/12 h-[80vh] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//                 {/* Form Section */}
//                 <div className="w-1/3 p-6 bg-gray-700 flex flex-col justify-center items-center">
//                     <h2 className="text-2xl font-bold text-center text-gray-100 mb-4">Student Form</h2>
//                     <form onSubmit={submit} className="space-y-4">
//                         <input
//                             type="text"
//                             placeholder="Enter your name..."
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             ref={nameInput}
//                             className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Enter your subject..."
//                             onChange={(e) => setSubject(e.target.value)}
//                             value={subject}
//                             className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Enter your city..."
//                             onChange={(e) => setCity(e.target.value)}
//                             value={city}
//                             className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                         />
//                         <button
//                             type="submit"
//                             className={`w-full p-3 rounded-md font-semibold 
//                                 ${editIndex == null ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-green-500 hover:bg-green-600'}
//                                 transition duration-150 text-gray-100`}
//                         >
//                             {editIndex == null ? "Submit" : "Update"}
//                         </button>
//                     </form>
//                 </div>

//                 {/* Details Section */}
//                 <div className="w-2/3 p-6 overflow-y-auto">
//                     <table className="w-full text-left bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
//                         <thead className="bg-gray-700 text-gray-400">
//                             <tr>
//                                 <th className="py-3 px-4 border-b border-gray-600">ID</th>
//                                 <th className="py-3 px-4 border-b border-gray-600">Name</th>
//                                 <th className="py-3 px-4 border-b border-gray-600">Subject</th>
//                                 <th className="py-3 px-4 border-b border-gray-600">City</th>
//                                 <th className="py-3 px-4 border-b border-gray-600 text-center" colSpan={2}>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 record && record.length > 0 ? record.map((data, index) => (
//                                     <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
//                                         <td className="py-3 px-4 border-r border-gray-600">{index + 1}</td>
//                                         <td className="py-3 px-4 border-r border-gray-600">{data.name}</td>
//                                         <td className="py-3 px-4 border-r border-gray-600">{data.subject}</td>
//                                         <td className="py-3 px-4 border-r border-gray-600">{data.city}</td>
//                                         <td className="py-3 text-center border-r border-gray-600">
//                                             <button
//                                                 onClick={() => editAction(data.id)}
//                                                 className="px-9 py-2 text-blue-400 border border-blue-400 hover:text-blue-500 rounded-lg focus:ring focus:ring-blue-500"
//                                             >
//                                                 Edit
//                                             </button>
//                                         </td>
//                                         <td className="text-center ">
//                                             <button
//                                                 onClick={() => deleteAction(data.id)}
//                                                 className="px-9 py-2 text-red-400 border border-red-400 hover:text-red-500 rounded-lg focus:ring focus:ring-red-500"
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 )) : (
//                                     <tr>
//                                         <td colSpan="6" className="py-3 px-4 text-center text-gray-500">
//                                             No records found.
//                                         </td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function Create() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const nameRef = useRef();

    const [record, setRecord] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data);
    }, [])

    const submit = (event) => {
        event.preventDefault();
        let object = {
            id: Date.now(),
            name,
            subject,
            city
        };

        let newData = [...record, object];
        setRecord(newData);
        localStorage.setItem("Students", JSON.stringify(newData));

        setName("");
        setSubject("");
        setCity("");
        nameRef.current.focus();

    };


    const deleteItem = (id) => {
        let newData = record.filter(element => element.id !== id);
        setRecord(newData);
        localStorage.setItem("Students", JSON.stringify(newData));
    }
    return (
        <>
            <form onSubmit={event => submit(event)}>
                <input type="text" placeholder='Enter your name...' value={name} onChange={element => setName(element.target.value)} ref={nameRef} />
                <input type="text" placeholder='Enter your subject...' value={subject} onChange={element => setSubject(element.target.value)} />
                <input type="text" placeholder='Enter your city...' value={city} onChange={element => setCity(element.target.value)} />
                <button type='submit'>Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && record.length > 0 ? record.map((element, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.name}</td>
                                <td>{element.subject}</td>
                                <td>{element.city}</td>
                                <td onClick={() => editItem(element.id)}>Edit</td>
                                <td onClick={() => deleteItem(element.id)}>Delete</td>
                            </tr>
                        }) : <h1>No data found</h1>
                    }
                </tbody>
            </table>
        </>
    )
}
