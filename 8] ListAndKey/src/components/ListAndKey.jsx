import React from 'react'
import { useState } from 'react'

export default function ListAndKey() {
    const [item, setItem] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
    ]);
    return (
        <>
            <h1>List and Key</h1>
            {
                item.map((item, index) => (
                    <div key={index}>
                        <h2>{item.id} - {item.name}</h2>
                    </div>
                ))
            }
        </>
    )
}
