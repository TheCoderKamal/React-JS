import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth, db } from '../../firebaseconfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();

        let user = await createUserWithEmailAndPassword(auth, email, pass)
        .then((data) => {
            setDoc(doc(db, "users", data.user.uid), {
                name, age, city, email,
            })
            navigate("/dashboard", {replace: true});
        })
    }
    return (
        <>
            <form onSubmit={(event) => handleSignUp(event)}>
                <input type="text" placeholder='Enter name...' onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Enter age...' onChange={e => setAge(e.target.value)}  />
                <input type="text" placeholder='Enter city...' onChange={e => setCity(e.target.value)}  />
                <input type="text" placeholder='Enter email...' onChange={e => setEmail(e.target.value)}  />
                <input type="text" placeholder='Enter password...' onChange={e => setPass(e.target.value)}  />
                <button type="submit">Submit</button>

                <div>
                    <Link to={"/login"}>LogIn?</Link>
                </div>
            </form>
        </>
    )
}
