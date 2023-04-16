import React from 'react'
import srchData from '@/Data/Search';
import { useState, useEffect } from 'react';
import avatar from '../author-page.webp';
import { BsEmojiSmile } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci'
import Image from 'next/image';
import Searching from './Search';
import { TfiBolt } from 'react-icons/tfi';
import star from "../SVG/SVG/Asset 2.svg"
import menu from "../SVG/Asset 1.svg"
import Notifications from './Notification';
import { BiLogOutCircle, BiMessageDetail } from 'react-icons/bi'
import Request from '@/Data/Request';
import Notification from '@/Data/Notification';
import Message from '@/Data/Message';
import { TiTick } from 'react-icons/ti'
import { RiArrowDownSLine } from 'react-icons/ri'
const Nav = () => {
    const [data, setData] = useState(Request);
    const [noteOn, setNote] = useState(false)
    const [dataType, setDataType] = useState('request');
    const [srchOn, setOn] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const handleMouseOver = () => {
        setShowPopUp(true);
    };
    const handleMouseOut = () => {
        setShowPopUp(false);
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const searchOn = () => {
        setOn(!srchOn)
    }
    const filteredResults = srchData.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.rel.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleButton1Hover = () => {
        setData(Request);
        setDataType('request')
        setNote(true)
    };
    const handleButton2Hover = () => {
        setData(Message);
        console.log(data)
        setDataType('message')
        setNote(true)

    };
    const handleButton3Hover = () => {
        setData(Notification);
        setDataType('notification')
        setNote(true)

    };
    const handleOver = () => {
        setNote(true)
    }
    const handelOut = () => {
        setNote(false)
    }
    
    return (

        <div>
            <nav className="fixed top-0 left-0 w-full bg-gray-700 md:justify-around shadow z-10 h-16 flex ">
                <div className="flex items-center space-x-5 text-white  ">
                    <h2 className="text-sm font-bold hidden lg:block fav">Fav Pages Feed</h2>
                    <div style={{ position: "relative" }}>
                        <input value={searchQuery}
                            
                            onClick={searchOn}
                            onChange={handleSearch}
                            type="text" placeholder="Search here people or pages" 
                            className=" inputsrch h-16 bg-gray-600 pl-3 text-xs py-6 " />
                        <CiSearch className='absolute search text-3xl font-bold text-gray-500' />
                        {srchOn && <Searching filteredResults={filteredResults} />}
                    </div>
                    <h4 className="text-xs text-center md:w-60 fav">Find Friends</h4>
                </div>
                <div className="flex items-center justify-start space-x-8 text-white ">
                    {noteOn && <Notifications data={data} dataType={dataType} handleOver={handleOver} handelOut={handelOut} />}
                    <button className="border-0" onMouseOver={handleButton1Hover} onMouseOut={handelOut}>
                        <span className="span2 bg-blue-500">6</span>
                        <BsEmojiSmile className="text-xl" />
                    </button>
                    <button className="border-0" onMouseOver={handleButton2Hover} onMouseOut={handelOut}>
                        <span className="span2 bg-purple-700">2</span>
                        <BiMessageDetail className="text-xl" />
                    </button>
                    <button className="border-0" onMouseOver={handleButton3Hover} onMouseOut={handelOut}>
                        <span className="span2 bg-orange-500">8</span>
                        <TfiBolt className="text-2xl" />
                    </button>

                </div>
                <div className="flex items-center text-white profile" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div className="justify-self-start">
                        <div className="position-relative">
                            <Image src={avatar} alt="profile" width={35} height={35} className="rounded-full position-relative" />
                            <div className="online-dot"></div>
                        </div>
                        {showPopUp && (
                            <div className="absolute z-10 w-64 px-3 py-3 bg-white shadow-md text-gray-700 right-20 top-19">
                                <p className='border-t-2 border-b-2 text-xs py-2 pl-5 '>Your account</p>
                                <ul className='py-7 space-y-5 font-bold text-xs'>
                                    <li className='flex px-5 space-x-5 items-center'>
                                        <Image src={menu} width={23} height={23} alt='menu' />
                                        <h3 className='hover:text-orange-500'>Profile Setting</h3>
                                    </li>
                                    <li className='flex px-5 space-x-5 items-center' >
                                        <Image src={star} width={23} height={23} alt='menu' />
                                        <h3 className='hover:text-orange-500'>Create Fav Page</h3>
                                    </li>
                                    <li className='flex px-5 space-x-5 items-center' >
                                        <BiLogOutCircle className='text-2xl text-gray-400' />
                                        <h3 className='hover:text-orange-500'>Log out</h3>
                                    </li>
                                </ul>
                                <p className='border-t-2 border-b-2 text-xs py-2 pl-5 '>Chat Setting</p>
                                <ul className='py-7 space-y-5 font-bold text-xs text-gray-400'>
                                    <li className='flex px-5 space-x-5 items-center'>
                                        <div className='dots bg-green-400'></div>
                                        <p className='hover:text-black'>Online</p>
                                    </li>
                                    <li className='flex px-5 space-x-5 items-center'>
                                        <div className='dots bg-yellow-300'></div>
                                        <p className='hover:text-black'>Away</p>
                                    </li>
                                    <li className='flex px-5 space-x-5 items-center'>
                                        <div className='dots  bg-red-500'></div>
                                        <p className='hover:text-black'>Disconnected</p>
                                    </li>
                                    <li className='flex px-5 space-x-5 items-center'>
                                        <div className='dots  bg-gray-400'></div>
                                        <p className='hover:text-black'>Invisible</p>
                                    </li>
                                </ul>
                                <p className='border-t-2 border-b-2 text-xs py-2 pl-5 '>Commit status</p>
                                <ul className='pb-4'>
                                    <li className='pt-4 relative'>
                                        <input type="text" placeholder='space cowboy' className='relative ml-6 w-50 text-sm px-3 py-4 border h-8' />
                                        <TiTick className='absolute bottom-0 left-48  bg-purple-500 text-3xl h-8' />
                                    </li>
                                </ul>
                                <p className='border-t-2 border-b-2 text-xs py-2 pl-5 '>ABOUT OLYMPUS</p>
                                <ul className='flex flex-col bg-black-700 text-xs px-5 py-5 gap-3 font-bold'>
                                    <li>
                                        <h3 className='hover:text-orange-500'>Terms and Conditions</h3>
                                    </li>
                                    <li>
                                        <h3 className='hover:text-orange-500'>FAQs</h3>
                                    </li>
                                    <li>
                                        <h3 className='hover:text-orange-500'>Careers</h3>
                                    </li>
                                    <li>
                                        <h3 className='hover:text-orange-500'>Contact</h3>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex pl-2 space-x-2 text-white flex-col ">
                        <span className="text-xs font-semibold">
                            James Spegial
                        </span>
                        <span className="text-xxs text-gray-400">
                            Space cowboy
                        </span>
                    </div>
                    <span className='pl-2'><RiArrowDownSLine className='text-xl' /></span>
                </div>
            </nav >
        </div >
    )
}

export default Nav;
//not work
export async function getStaticProps() {
    const Message = await fetch('http://localhost:3000/api/Message').then(res => res.json());
    const Request = await fetch('http://localhost:3000/api/Request').then(res => res.json());

    return {
        props: {
            Message,
            Request,
        },
        revalidate: 60 
    };
}
