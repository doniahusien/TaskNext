import React from 'react'
import { useState } from "react";
import Image from 'next/image';
import { TfiBolt } from 'react-icons/tfi';
import Dash from '../../Data/dash.jsx'
import Link from "next/link";
import menu from '../SVG/Asset 1.svg'
import {IoCloseSharp} from 'react-icons/io5' 
const LeftSide = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(50);
    function toggleMenu() {
        setIsOpen(!isOpen);
        setSidebarWidth(isOpen ? 95 : 50);
    }
    return (
        <div>
            <div className="flex h-screen ">
                <div className={` overflow-y-auto z-20 fixed top-0 left-0 h-full bg-white  w-${sidebarWidth} flex-shrink-0 ${!isOpen? 'left':''} `}>
                    <div className="text-white">
                        <ul>
                            <li className="mb-9 py-1 px-2 bg-orange-500 sticky top-0 " onClick={toggleMenu}>
                                <Link href="/" className=" hover:text-white flex items-center">
                                    <TfiBolt style={{ "fontSize": "3.5rem" }} />
                                    {isOpen && <span className="pl-3 font-bold" >Olymps</span>}
                                </Link>
                            </li>
                            < div >
                            <li className={`mb-8 pl-6 ${!isOpen? 'none':''}`} onClick={toggleMenu}>
                                <Link href="/" className={`text-gray-400 font-bold text-xs flex items-center ` }>
                                    {!isOpen && <Image src={menu} width={24} height={24} alt='menu' />}
                                    {isOpen &&
                                        <>
                                        <IoCloseSharp className='text-3xl  hover:text-orange-700' />
                                    <span className="px-6 hover:text-black text-xs">Collapse menu</span>
                                        </> }
                                </Link>
                            </li>
                            {
                                Dash.map((item) => (
                                    <li className={`mb-8 pl-6  ${!isOpen? 'none':''}`} key={item.id}>
                                        <Link href={item.src} className="text-gray-400  hover:text-orange-700 font-bold text-2xl flex items-center">
                                            {item.icon}
                                            {isOpen && <span className="px-6 hover:text-black text-xs">{item.title}</span>}
                                        </Link>
                                    </li>
                                ))
                                }
                                </div >
                        </ul>
                    </div>
                    {isOpen && <div>
                        <div class="flex justify-between items-center text-gray-700 text-sm ml-5 pb-3 ">
                            <ul class="flex gap-12">
                                <li><p>profile completion</p></li>
                                <li><p>76%</p></li>
                            </ul>
                        </div>
                        <div className="relative h-2 rounded-full overflow-hidden bg-gray-300 ml-4" style={{ "width": "75%" }}>
                            <div className="absolute top-0 left-0 h-2 rounded-full bg-orange-500" style={{ "width": "70%" }}></div>
                        </div>
                        <div className='p-5 '>
                            <p className="max-w-[250px] text-gray-400 line-height-3 rounded-lg" >complete <span className="text-orange-500 ">your profile</span> so people can know more about you!</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default LeftSide