import React from 'react'
import { useState } from 'react';

export default function UseState() {
    
    const [count, setCount] = useState(0);
    
    return (
        <div className='container'>
            <div className="card">
                <h1>Counter</h1>
                <h1>{count}</h1>
                <div className="buttons">
                    <button onClick={() => {setCount(count + 1)}}>
                        <i className="ri-add-line"></i>    
                    </button>        
                    <button onClick={() => {setCount(count - 1)}}>
                        <i className="ri-subtract-line"></i>    
                    </button>        
                    <button onClick={() => {setCount(0)}}>
                        <i className="ri-refresh-line"></i>    
                    </button>       
                </div>    
            </div>
        </div>
    )
}
