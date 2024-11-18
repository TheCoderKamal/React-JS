import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigation = useNavigate();
    const handleClick = () => {
        navigation("/", {replace: true});    
    }   
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleClick}>Go to Home</button>
        </div>
    )
}
