import React, { useRef, useState } from 'react';

export default function Controlled() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);
    const nameRef = useRef();

    const handleForm = (event) => {
        event.preventDefault();
        let obj = { name, subject, city };
        setData([...data, obj]);
        setName('');
        setSubject('');
        setCity('');
        nameRef.current.focus();
    };

    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#f8f9fa]'>
            <div className='w-full flex flex-col md:flex-row justify-evenly relative'>
                
                {/* Input Form */}
                <form 
                    onSubmit={(event) => handleForm(event)} 
                    className='bg-white shadow-xl rounded-lg w-full md:w-[45%] p-8 flex flex-col gap-6 border border-gray-200 h-[450px]'
                >
                    <h2 className='text-2xl font-serif text-gray-800 font-bold mb-4'>Submit Info</h2>
                    <input 
                        type="text" 
                        placeholder='Enter Name ...' 
                        value={name} 
                        ref={nameRef} 
                        onChange={(event) => setName(event.target.value)} 
                        className='p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 placeholder-gray-400 text-lg'
                    />
                    <input 
                        type="text" 
                        placeholder='Enter Subject ...' 
                        value={subject} 
                        onChange={(event) => setSubject(event.target.value)} 
                        className='p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 placeholder-gray-400 text-lg'
                    />
                    <input 
                        type="text" 
                        placeholder='Enter City ...' 
                        value={city} 
                        onChange={(event) => setCity(event.target.value)} 
                        className='p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 placeholder-gray-400 text-lg'
                    />
                    <button 
                        type='submit' 
                        className='p-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 transition-all duration-300 font-semibold shadow-md text-lg w-full'
                    >
                        Add
                    </button>
                </form>

        
                {/* Data Table */}
                {data.length > 0 && (
                    <div className='w-full md:w-[45%] h-[450px]'>
                        <div className='overflow-y-auto h-full no-scrollbar rounded-lg shadow-xl'>
                            <table className='table-auto w-full text-left bg-white rounded-lg overflow-hidden'>
                                <thead>
                                    <tr className='bg-gray-800 text-white text-center'>
                                        <th className='py-4 px-6 text-lg font-serif'>Name</th>
                                        <th className='py-4 px-6 text-lg font-serif'>Subject</th>
                                        <th className='py-4 px-6 text-lg font-serif'>City</th>
                                        <th className='py-4 px-6 text-lg font-serif'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} text-center`}>
                                            <td className='py-4 px-6 text-gray-700 font-medium'>{item.name}</td>
                                            <td className='py-4 px-6 text-gray-700 font-medium'>{item.subject}</td>
                                            <td className='py-4 px-6 text-gray-700 font-medium'>{item.city}</td>
                                            <td className='py-4 px-6 flex gap-4'>
                                                <button className='p-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-700 transition-all duration-300 w-full'>
                                                    Edit
                                                </button>
                                                <button className='p-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-700 transition-all duration-300 w-full'>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
