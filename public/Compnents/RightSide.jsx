import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from "react";
import Image from 'next/image';
import menu from "../SVG/Asset 1.svg"
import { BiMessageDetail } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { VscSettings } from 'react-icons/vsc'
import ChatPopup from './ChatPopup';

const RightSide = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(48);
    function toggleMenu() {
        setIsOpen(!isOpen);
        setSidebarWidth(isOpen ? 95 : 48);
    }
    const [chatData, setChatData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/Chat')
            .then(response => response.json())
            .then(data => {
                setChatData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const [popupVisible, setPopupVisible] = useState(false);



    return (
        <div>
            <div className="flex h-screen  ">
                <div className={` overflow-y-auto z-5  fixed right-0 top-0 h-full bg-white w-${sidebarWidth} flex-shrink-0 ${!isOpen? 'right':''}`} >
                    <div className="text-white mt-20 ">
                        <ul>
                            {isOpen && <li className='flex flex-row text-xxs justify-between pb-5 px-5 shadow'>
                                <span className=' text-orange-600  ' >Close Setting</span>
                                <span className='text-black'>Settings</span>
                            </li>
                            }
                            {
                                chatData.map((item, index) => (
                                    <li className={`mt-8 position-relative  px-8 ${!isOpen? 'none':''}`} key={item.id} >
                                        <div className={`dot bg-${item.c} left-10`}></div>
                                        <Link href="/" className=" text-gray-400 font-semibold  flex items-center justify-center ">
                                            <Image src={item.src} width={35} height={35} className="rounded-full" alt='chat' onClick={() => setPopupVisible(!popupVisible)} />
                                            < ChatPopup isOpens={popupVisible} onClose={() => setPopupVisible(false)} />
                                            {isOpen && 
                                                <div className='flex flex-row gap-4 '>
                                                    <div className='flex flex-col w-40'>
                                                        <span className="px-4 text-xs text-black">{item.name}</span>
                                                        <span className="px-4  text-xxs">{item.status}</span>
                                                    </div>
                                                    <div className='font-bold text-lg'>
                                                        <button>...</button>
                                                    </div>
                                                </div>
                                            }
                                        </Link>
                                        {index === 4 && isOpen &&
                                            <li className='flex flex-row text-xxs justify-between py-5 shadow '>
                                                <span className=' text-orange-600' >My Family</span>
                                                <span className='text-black'>Settings</span>
                                            </li>}
                                        {index === 5 && isOpen &&
                                            <li className='flex flex-row text-xxs justify-between py-5 shadow '>
                                                <span className=' text-orange-600' >UNCATEGORIZED</span>
                                                <span className='text-black'>Settings</span>
                                            </li>}
                                    </li>
                                ))
                            }
                            {!isOpen && <li className={`pl-10 py-10 sticky bottom-16 bg-white ${!isOpen? 'none':''}`} onClick={toggleMenu}>
                                <Link href="/" className="text-gray-400 font-bold text-xs flex items-center">
                                    <Image src={menu} width={24} height={24} alt='menu' onClick={() => setPopupVisible(!popupVisible)} />
                                </Link>
                            </li>}
                            {isOpen && <div className='flex flex-row text-gray-500 text-2xl pl-5 pt-7 pb-3 gap-7 sticky bottom-16 bg-white'>
                                <input type="search" className='w-30 text-xs h-8 pl-2 rounded-md border border-orange-400' placeholder='Search Friends' />
                                <Link href='/'>
                                    <VscSettings />
                                </Link>
                                <AiOutlineClose onClick={toggleMenu} />
                            </div>}
                            <li className="py-4 px-10 bg-purple-500  sticky bottom-0">
                                <div href="/" className="hover:text-white flex items-center justify-between">
                                    {isOpen && <span className="pl-3 font-bold" >Olymps Chat</span>}
                                    <BiMessageDetail style={{ "fontSize": "2rem" }} onClick={toggleMenu}  />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide