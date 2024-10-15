import React, { useRef } from 'react';
import '../../App.css'

export default function UseRef() {
    const input = useRef(null); // Initially null hoga

    return (
        <div className='container'>
            <input type='text' ref={input} className='input'/>
            <button className='btn' onClick={() => {
                console.log(input.current.value);
            }}>Alert</button>
        </div>
    )
}
