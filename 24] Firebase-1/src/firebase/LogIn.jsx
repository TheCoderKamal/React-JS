import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseconfig';

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const handleSignIn = async(event) => {
        event.preventDefault();

        let signIn = signInWithEmailAndPassword(auth, email, pass)
        .then(data => {
            console.log(data);
            navigate("/dashboard", {replace: true});
        })
    }
  return (
    <div>
        <form onSubmit={(event) => handleSignIn(event)}>
                <input type="text" placeholder='Enter email...' onChange={e => setEmail(e.target.value)}  />
                <input type="text" placeholder='Enter password...' onChange={e => setPass(e.target.value)}  />
                <button type="submit">Submit</button>

                <div>
                    <Link to={"/"}>SignUp?</Link>
                </div>
            </form>
    </div>
  )
}
