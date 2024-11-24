// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function ProductList() {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    // Data - 1
    useEffect(() => {
        setData1(
            [
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
                    name : "Amul Gold Full Cream Fresh Milk",
                    qty : "500 ml",
                    price : "₹33"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
                    name : "Amul Taaza Toned Fresh Milk",
                    qty : "500 ml",
                    price : "₹27"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
                    name : "Amul Masti Curd",
                    qty : "400 g",
                    price : "₹35"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
                    name : "Amul Masti Curd",
                    qty : "200 g",
                    price : "₹23"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
                    name : "Amul Salted Butter",
                    qty : "100 g",
                    price : "₹60"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/503609a.jpg",
                    name : "Super Crustless White Bread",
                    qty : "300 g",
                    price : "₹50"
                },
            ]
        ); 
    },[])


    // Data - 2
    useEffect(() => {
        setData2([
            {
                url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
                name : "Cheetos cheez puffs",
                qty : "28 g",
                price : "₹10"
            },
            {
                url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3281415d-c53c-456c-8618-649f8e931c42.jpg?ts=1723099134",
                name : "Kattle Studio Wafers - Lime & Chilli",
                qty : "150 g",
                price : "₹80"
            },
            {
                url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b798ce6c-b936-4fc3-a5a5-48d125fbe978.jpg?ts=1724850816",
                name : "Kattle Studio Homestyle Potato Chips",
                qty : "113 g",
                price : "₹99"
            },
            {
                url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c4d2e844-efaa-4cc1-aa27-2320f17013ce.jpg?ts=1723100978",
                name : "Cheetos Cheddar Popcorn",
                qty : "17.7 g",
                price : "₹170"
            },
            {
                url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859",
                name : "Kettle Studio Potato Chips",
                qty : "56 g",
                price : "₹47"
            },
            {
                url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5fe78691-f9b7-497c-a111-b4fb2514aa02.jpg?ts=1723098455",
                name : "Nongshim Onion Ring Puffs",
                qty : "50 g",
                price : "₹129"
            },
        ]);
    }, [])


        // Data - 3
        useEffect(() => {
            setData3([
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
                    name : "Center Fresh Sugar Free Candy",
                    qty : "350 g",
                    price : "₹10"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9ed549e7-ba15-43a2-b703-77ea993076e7.jpg?ts=1710233982",
                    name : "Chandan Rajwadi Mouth Freshener",
                    qty : "140 g",
                    price : "₹139"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/206540a.jpg?ts=1687437714",
                    name : "Pass Pass Sweet Magic Mix Mouth Freshener",
                    qty : "105 g",
                    price : "₹64"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363212a.jpg?ts=1690814160",
                    name : "Impact Sugar Free Mint Candy (Ice Mints)",
                    qty : "14 g",
                    price : "₹150"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b06b8269-b0f2-4887-8106-f49d5695fc12.jpg?ts=1720016904",
                    name : "GODESi Meetha Paan Desi Mints",
                    qty : "1 piece",
                    price : "₹80"
                },
                {
                    url : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498",
                    name : "Chandan Jeera Goli Dijestive Tablets",
                    qty : "100 g",
                    price : "₹49"
                },
            ]);
        }, [])
    

    return (


        // Data - 1
        <div>
            <h1 className='text-[25px] font-bold'>Dairy, Bread & Eggs</h1>
        
            <div className="grid grid-cols-6 gap-4 my-[25px] mt-[15px]">
                {
                    data1 &&
                    data1.map((element, index) => {
                        return (
                            <div className="border rounded-xl overflow-hidden px-3 pb-[20px] shadow-sm " key={index}>
                                <div className=" flex justify-center">
                                    <img src={element.url} alt={element.name} className='h-[140px]' />
                                </div>
                                <div className="text-[10px] bg-[#F8F8F8] w-[60px] text-center rounded-[4px] font-semibold"><i className="ri-timer-line"></i>14 MINS</div>
                                <div className="my-[5px] text-[15px] font-semibold leading-5 h-[50px] ">{element.name}</div>
                                <div className="text-[13px] mb-[5px] ">{element.qty}</div>
                                <div className="flex justify-between items-center mt-[10px] ">
                                    <b className='text-[12px] '>{element.price}</b>
                                    <button className='border border-[#318616] text-[#318616] bg-[#F7FFF9] text-[15px] font-semibold py-1 px-5 rounded-lg '>ADD</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            
            {/* Data - 2 */}
            <h1 className='text-[25px] font-bold'>Snacks & Manchies</h1>
        
            <div className="grid grid-cols-6 gap-4 mb-[25px] mt-[15px]">
                {
                    data2 &&
                    data2.map((element, index) => {
                        return (
                            <div className="border rounded-xl overflow-hidden px-3 pb-[20px] shadow-sm " key={index}>
                                <div className=" flex justify-center">
                                    <img src={element.url} alt={element.name} className='h-[140px]' />
                                </div>
                                <div className="text-[10px] bg-[#F8F8F8] w-[60px] text-center rounded-[4px] font-semibold"><i className="ri-timer-line"></i>12 MINS</div>
                                <div className="my-[5px] text-[15px] font-semibold leading-5 h-[50px] ">{element.name}</div>
                                <div className="text-[13px] mb-[5px] ">{element.qty}</div>
                                <div className="flex justify-between items-center mt-[10px] ">
                                    <b className='text-[12px] '>{element.price}</b>
                                    <button className='border border-[#318616] text-[#318616] bg-[#F7FFF9] text-[15px] font-semibold py-1 px-5 rounded-lg '>ADD</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>


            {/* Data - 3 */}
            <h1 className='text-[25px] font-bold'>Mouth fresheners</h1>
        
            <div className="grid grid-cols-6 gap-4 mb-[25px] mt-[15px]">
                {
                    data3 &&
                    data3.map((element, index) => {
                        return (
                            <div className="border rounded-xl overflow-hidden px-3 pb-[20px] shadow-sm " key={index}>
                                <div className=" flex justify-center">
                                    <img src={element.url} alt={element.name} className='h-[140px]' />
                                </div>
                                <div className="text-[10px] bg-[#F8F8F8] w-[60px] text-center rounded-[4px] font-semibold"><i className="ri-timer-line"></i>15 MINS</div>
                                <div className="my-[5px] text-[15px] font-semibold leading-5 h-[50px] ">{element.name}</div>
                                <div className="text-[13px] mb-[5px] ">{element.qty}</div>
                                <div className="flex justify-between items-center mt-[10px] ">
                                    <b className='text-[12px] '>{element.price}</b>
                                    <button className='border border-[#318616] text-[#318616] bg-[#F7FFF9] text-[15px] font-semibold py-1 px-5 rounded-lg '>ADD</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
