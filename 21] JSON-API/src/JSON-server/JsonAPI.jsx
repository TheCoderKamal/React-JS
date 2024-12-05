import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function JsonAPI() {
    const [record, setRecord] = useState([]);
    const [title, setTitle] = useState("");
    const [views, setViews] = useState("");
    const [editID, setEditID] = useState(null);
    useEffect(() => {
        fetchAPI()
    }, [])
    const fetchAPI = async () => {
        let data = await axios.get("http://localhost:5000/posts");
        setRecord(data.data);
    }

    const addData = async (event) => {
        event.preventDefault();
        if (editID) {
            const updatedObj = {
                id: editID,
                title,
                views
            }

            await axios.put(`http://localhost:5000/posts/${editID}`, updatedObj);
            fetchAPI();
            setEditID(null);
        }else{
            const object = {
                id: String(Date.now()),
                title,
                views,
            }
            let sendData = await axios.post("http://localhost:5000/posts", object);
            setRecord([...record, object]);
        }
    }

    const deleteData = async (id) => {
        if (confirm("Are you sure you want to delete this post?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/posts/${id}`);
                console.error(`Deleted ID: ${id}`, response.data);
                fetchAPI();
            } catch (error) {
                alert(`Failed to delete ID: ${id}`, error);
            }
        }
    }

    const editData = (element) => {
        setEditID(element.id);
        setTitle(element.title);
        setViews(element.views);
    }
    
    return (
        <>
            <form onSubmit={(event) => addData(event)}>
                <input type="text" placeholder='Enter title....' onChange={e => setTitle(e.target.value)} value={title} />
                <input type="text" placeholder='Enter views....' onChange={e => setViews(e.target.value)} value={views} />
                <button type='submit'>{editID ? "update" : "Add"}</button>
            </form>

            <div className="">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Views</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    { 
                        record && record.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.id} </td>
                                    <td>{element.title} </td>
                                    <td>{element.views} </td>
                                    <td><button onClick={() => editData(element)}>Edit</button></td>
                                    <td><button onClick={() => deleteData(element.id)}>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
