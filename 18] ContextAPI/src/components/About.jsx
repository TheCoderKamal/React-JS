import React from 'react'
import { useContext } from 'react'
import { myContext } from './ContextAPI';

export default function About() {
    const data = useContext(myContext);
    return (
        <>
            <div>About</div>
            <h1>{data}</h1>
        </>
    )
}
