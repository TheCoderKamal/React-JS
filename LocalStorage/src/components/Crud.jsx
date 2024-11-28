import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [record, setRecord] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const object = {
            id: Date.now(),
            name,
            age
        };

        setRecord([...record, object]);
        localStorage.setItem("student", JSON.stringify([...record, object]));
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("student"));
        setRecord(data);
    }, [])
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder='Enter your name...' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Enter your age...' value={age} onChange={e => setAge(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && record.length > 0 ?
                        record.map(
                            (element, index) => {
                                return
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{element.name}</td>
                                        <td>{element.age}</td>
                                        <td><button>Edit</button></td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                
                            }
                        ) : <h1>No record found ...</h1>
                    }
                </tbody>
            </table>
        </div>
    )
}
