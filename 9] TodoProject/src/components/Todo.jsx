import React, { useRef, useState } from 'react'

export default function Todo() {
    const [data, setData] = useState([]);
    const inputRef = useRef();

    const addData = () => {
        if((inputRef.current.value).trim() === ""){
            alert("Input field cannot be empty!");
            inputRef.current.value = "";  
            return;
        }
        setData([...data, inputRef.current.value]);   
        inputRef.current.value = "";     
    }
    return (
        <>
            <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center bg-[#f5f7fa] gap-4">
                <div className="w-[50%] h-[50px] flex gap-4 text-white font-medium">
                    <input type="text" ref={inputRef} placeholder='Enter the task ...' className='h-full rounded-xl bg-[#010131] flex-[8] px-5 placeholder:font-medium' />
                    <button onClick={addData} className='border border-[#010131] text-[#010131] flex-[2] rounded-xl text-[18px]'>Add</button>
                </div>
                <div className="border w-[50%] h-[60%] bg-[#010131] rounded-xl text-white p-5 text-[18px] font-bold flex flex-col gap-4 overflow-y-scroll no-scrollbar">
                    {data.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        </>
    )
}
