import React, { useRef, useState } from 'react';

export default function Uncontrolled() {
    const [data, setData] = useState([]);
    const idRef = useRef();
    const nameRef = useRef();
    const standardRef = useRef();

    const addData = (event) => {
        event.preventDefault();

        const id = idRef.current.value;
        const name = nameRef.current.value;
        const standard = standardRef.current.value;

        if(id.trim() === "" || name.trim() === "" || standard.trim() === ""){
            alert("Input fields cannot be empty!");
            return;
        }

        setData([...data, { id, name, standard }]);

        idRef.current.value = "";
        nameRef.current.value = "";
        standardRef.current.value = "";
    };

    return (
        <>
            <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center bg-[#f5f7fa] gap-4">
                <form onSubmit={addData} className="w-[50%] h-[50px] flex gap-4 text-white font-medium">
                    <input type="text" ref={idRef} placeholder='Enter the id ...' className='h-full rounded-xl bg-[#010131] flex-[3] px-5 placeholder:font-medium' />
                    <input type="text" ref={nameRef} placeholder='Enter the name ...' className='h-full rounded-xl bg-[#010131] flex-[3] px-5 placeholder:font-medium' />
                    <input type="text" ref={standardRef} placeholder='Enter the subject ...' className='h-full rounded-xl bg-[#010131] flex-[3] px-5 placeholder:font-medium' />
                    <button type='submit' className='border border-[#010131] text-[#010131] flex-[1] rounded-xl text-[18px]'>Add</button>
                </form>
                <div className="w-[50%] h-[60%] bg-[#010131] rounded-xl text-white p-5 text-[18px] font-bold flex flex-col gap-4 overflow-y-scroll no-scrollbar">
                    {data.map((item, index) => (
                        <div key={index}>
                            ID: {item.id}, Name: {item.name}, Standard: {item.standard}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
