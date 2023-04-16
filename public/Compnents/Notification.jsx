import React from 'react'
import { useState, useEffect } from 'react'
import { VscReactions } from 'react-icons/vsc'
import Image from 'next/image'
import { BiMessageDetail } from 'react-icons/bi'
import { SlHeart } from 'react-icons/sl'
const Notifications = ({ data, dataType,handleOver, handelOut }) => {
    const [myData, setMyData] = useState(data);

    useEffect(() => {
        setMyData(data);
    }, [data]);

    return (
        <>
            <div className='bg-white absolute top-10 mt-5 right-70 pt-4 rounded-5' style={{ width: '350px', height: '400px', overflowY: 'scroll' }} onMouseLeave={handelOut} onMouseOver={handleOver}>
                <div className='flex flex-row justify-between font-bold text-xxxs text-gray-600 pb-2 px-5'>
                    <h6>{dataType === 'request' ? 'FRIEND REQUEST' :
                        dataType === 'message' ? 'NEW MESSAGE' :
                            dataType === 'notification' ? 'NOTIFICATION' : ''}</h6>
                    <ul className='flex flex-row gap-2'>
                        <li>SETTING</li>
                        <li>{dataType === 'request' ? 'FIND FRIENDS' : 'MARK ALL AS READ'}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {myData ? (
                            data.map((item) => (
                                <div className='flex flex-col justify-center items-center' key={item.id}>
                                    <div className={`flex flex-row py-6 pl-3 border-t-2 ${item.nam ? 'gap-5' : 'justify-center'}`}>
                                        <Image
                                            alt='page'
                                            src={item.src}
                                            width='auto'
                                            height='auto'
                                            className='rounded-full cover'
                                            style={{ objectFit: 'cover', width: '40px', height: '40px' }}
                                        />
                                        {dataType === 'notification' ? (
                                            <>
                                                <div>
                                                    <h6 className='font-bold text-gray-800 hover:text-orange-500 text-sm pl-4' style={{ display: "inline-block" }}>
                                                        {item.n}
                                                        <span className='text-gray-500 text-xxs'>{item.note} </span>
                                                        <span className='text-orange-500 text-xxs'>{item.spa}</span>
                                                    </h6>
                                                    <p className='text-gray-400 text-xxs pt-2 pl-5'>{item.time}</p>
                                                    {
                                                        item.post ? (
                                                            <div className='flex flex-row border-2 items-center '>
                                                                <Image src={item.post} alt='page'
                                                                    width='auto'
                                                                    height='auto'
                                                                    className='cover'
                                                                    style={{ objectFit: 'cover', width: '40px', height: '50px' }} />
                                                                <p className=' text-xxxs px-1 text-gray-400'>{item.caption}</p>
                                                            </div>
                                                        ) : null
                                                    }
                                                </div>
                                                {item.icon === 'rec' ? (
                                                    <VscReactions className='font-bold rounded-6 text-2xl mr-8 text-gray-400' style={{ fontSize: "40px" }} />
                                                ) : item.icon === 'mes' ? (
                                                    <BiMessageDetail className='font-bold rounded-6 ml-14 text-gray-400 mr-8' style={{ fontSize: "40px" }} />
                                                ) : item.icon === 'love' ? (
                                                    <SlHeart className='font-bold rounded-6 ml-14 text-gray-400 mr-8' style={{ fontSize: "40px" }} />
                                                ) : null}
                                            </>
                                        ) : null}

                                        {item.common || dataType === 'message' ? (
                                            <>
                                                <div className='flex flex-col w-full text-left pl-5' style={{ width: "170px" }}>
                                                    <h6 className='font-bold text-gray-600 hover:text-orange-500 text-sm' style={{ width: '152px' }}>
                                                        {item.name}
                                                    </h6>
                                                    <p className='text-gray-400 text-xxs pt-1' style={{ width: "180px" }}>{item.common || item.mess} </p>
                                                    {dataType === 'message' ? (<p className='text-gray-400 text-xxs pt-2'>{item.time}</p>) : null}
                                                
                                                </div>
                                                {dataType === 'request' ? (
                                                    <VscReactions className='font-bold rounded-6 ml-14 mt-2 text-white bg-blue-500 mr-1' style={{ "width": "50px", fontSize: "25px" }} />
                                                ) : dataType === 'message' ? (
                                                    <BiMessageDetail className='font-bold rounded-6 ml-14 mt-2 text-gray-600  mr-1' style={{ "width": "50px", fontSize: "25px" }} />
                                                ) : null}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                        {item.nam ? (
                                            <>
                                                <p className='text-gray-600 hover:text-orange-500 text-xs text-left pl-4' style={{ width: '200px' }}>
                                                    You and <span className='font-bold text-xs'>{item.nam}</span> Stark just became friends. Write on{' '}
                                                    <span className='text-blue-500'>her wall</span>.
                                                </p>
                                                <VscReactions className='font-bold rounded-6 text-2xl mt-2 text-gray-400' style={{ fontSize: "27px" }} />
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <></>
                        )}
                        <li className={`w-full h-16 ${dataType === 'request' ? 'bg-blue-500' : dataType === 'message' ? 'bg-purple-500' : 'bg-orange-500'}`} style={{ position: 'sticky', bottom: '0' }}>
                            <div className='text-center'>
                                <button className='text-center pt-4 text-sm'>Check all events</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Notifications