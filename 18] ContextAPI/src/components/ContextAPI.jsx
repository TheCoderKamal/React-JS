import React, { createContext } from 'react'
import About from './About';
import Contact from './Contact';

export const myContext = createContext();

export default function ContextAPI() {

    const data = "Kamal";

    return (
        <div>
            <h1>Home Page :</h1>

            <myContext.Provider value={data}>
                <About />
                <Contact />
            </myContext.Provider>
        </div>
    )
}
