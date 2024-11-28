import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../features/studentSlice';

export default function StudentCrudByRedux() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [editID, setEditID] = useState(null);
    const nameRef = useRef();

    const dispatch = useDispatch();
    const data = useSelector(state => state.studentKey.data);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(editID){
            const updatedObject = {
                id: editID,
                name,
                subject,
            }

            dispatch(updateData(updatedObject));

            setEditID(null);
        }else{
            const object = {
                id : Date.now(),
                name,
                subject
            };
    
            dispatch(addData(object));
        }

        setName("");
        setSubject("");
        nameRef.current.focus();
    }

    const handleEdit = (elememt) => {
        setEditID(elememt.id);
        setName(elememt.name);
        setSubject(elememt.subject);
        nameRef.current.focus();
    }
    return (
        <>
            <h1>StudentCrudByRedux</h1>

            <form onSubmit={() => handleSubmit(event)}>
                <input type="text" placeholder='Enter name...' onChange={e => setName(e.target.value)} value={name} ref={nameRef} />
                <input type="text" placeholder='Enter subject...' onChange={e => setSubject(e.target.value)} value={subject} />
                <button type='submit'>{editID ? "Update" : "Submit"}</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ? 
                        data.map((element, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.name}</td>
                                <td>{element.subject}</td>
                                <td><button onClick={() => handleEdit(element)}>Edit</button></td>
                                <td><button onClick={() => dispatch(deleteData(element.id))}>Delete</button></td>
                            </tr>
                        })
                        : <tr><td colSpan={5}>No data found</td></tr>
                    }
                </tbody>
            </table>

        </>
    )
}
