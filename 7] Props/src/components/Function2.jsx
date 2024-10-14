import React, { useState } from 'react'
import '../index.css'

export default function Function2(props) {
    const [data, setData] = useState(null);

    setTimeout(() => {
        setData(props.data);
    }, 3000)
    
    return (
        <>
            <h1 style={{textAlign:"center"}}>Function - 2</h1>

            <div className='container'>
                {
                    data ? data.map((obj, index) => (
                        <div key={index} className='card'>
                            <h2>{obj.name}</h2>
                            <p>{obj.address}</p>
                        </div>
                    )) : <h4>Loading...</h4>
                }
            </div>
        </>
    )
}
