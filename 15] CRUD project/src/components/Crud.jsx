import React, { useEffect, useState } from 'react'

export default function Crud() {

    // UseStates :
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [hobbies, setHobbies] = useState([]);
    const [city, setCity] = useState("");
    const [record, setRecord] = useState([]);
    const [editID, setEditID] = useState(null);

    // useEffect :
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("students")) || [];
        setRecord(data);
        console.log(data);
    }, []);

    // Handle Hobbies :
    let handleHobby = (event) => {
        let { checked, value } = event.target;
        if (checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter(hobby => hobby !== value));
        }
    }

    // Handle City :
    let handleCity = (event) => {
        setCity(event.target.value);
    }

    // Submit Action :
    const submitAction = (event) => {
        event.preventDefault();

        if (editID == null) {
            let object = { id: Date.now(), name, age, gender, hobbies, city };
            let newData = [...record, object];
            setRecord(newData);
            localStorage.setItem("students", JSON.stringify(newData));
        } else {
            let singleData = record.find(item => item.id == editID);
            singleData.name = name;
            singleData.age = age;
            singleData.gender = gender;
            singleData.hobbies = hobbies;
            singleData.city = city;
        }

        setName("");
        setAge("");
        setGender("");
        setHobbies([]);
        setCity("");
        setEditID(null);

    }

    // Delete Action :
    const deleteAction = (id) => {
        let data = record.filter(item => item.id !== id);
        setRecord(data);
        localStorage.setItem("students", JSON.stringify(data));
    };

    // Edit Action :
    const editAction = (id) => {
        let data = record.find(item => item.id == id);
        setName(data.name);
        setAge(data.age);
        setGender(data.gender);
        setHobbies(data.hobbies);
        setCity(data.city);
        setEditID(data.id);
    };


    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <form onSubmit={submitAction} className="bg-gray-800 p-6 rounded-lg w-3/4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your name ..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your age ..."
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={e => setGender(e.target.value)}
                            checked={gender === "Male"}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={e => setGender(e.target.value)}
                            checked={gender === "Female"}
                        />
                        Female
                    </label>
                </div>
                <div className="mb-4">
                    {["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "AI"].map((hobby) => (
                        <label key={hobby} className="mr-4">
                            <input
                                type="checkbox"
                                value={hobby}
                                onChange={handleHobby}
                                checked={hobbies.includes(hobby)}
                            />
                            {hobby}
                        </label>
                    ))}
                </div>
                <div className="mb-4">
                    <select
                        value={city}
                        onChange={handleCity}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    >
                        <option value="" disabled>--Select City--</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Jamnagar">Jamnagar</option>
                        <option value="Bhuj">Bhuj</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {editID == null ? "Submit" : "Update"}
                </button>
            </form>

            <table className="table-auto bg-gray-800 text-white w-3/4 mt-6 rounded-lg">
                <thead>
                    <tr>
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Age</th>
                        <th className="p-2 border">Gender</th>
                        <th className="p-2 border">Hobbies</th>
                        <th className="p-2 border">City</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record && record.length > 0 ? (
                        record.map((data, index) => (
                            <tr key={index} className="text-center">
                                <td className="p-2 border">{index + 1}</td>
                                <td className="p-2 border">{data.name}</td>
                                <td className="p-2 border">{data.age}</td>
                                <td className="p-2 border">{data.gender}</td>
                                <td className="p-2 border">
                                    <ul>
                                        {data.hobbies.map((hobby, idx) => (
                                            <li key={idx}>{hobby}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="p-2 border">{data.city}</td>
                                <td className="p-2 border">
                                    <button
                                        onClick={() => editAction(data.id)}
                                        className="bg-yellow-600 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteAction(data.id)}
                                        className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded ml-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center p-4">
                                No data found...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
