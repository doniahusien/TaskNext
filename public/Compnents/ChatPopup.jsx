import React from 'react'
import Image from 'next/image';
import img from '../chat/avatar62-sm.webp'
import img2 from '../chat/avatar67-sm.webp'
const ChatPopup = ({ isOpens, onClose }) => {
    return (
        <>
            {isOpens && (
                <div className='fixed right-32 top-20 w-72 flex justify-center items-center text-gray-800'>
                    <div className='relative bg-white w-72 rounded-lg overflow-y-auto h-64 '>
                        <div className=' fixed w-72 bg-purple-700 px-5 text-white flex h-10 flex-row justify-between items-center rounded-t '>
                            <h6 className='pt-1 '>Chat</h6>
                            <span>...
                                <button
                                    className='top-0 pl-5 right-0 hover:text-gray-900'
                                    onClick={onClose}
                                > x
                                </button>
                            </span>
                        </div>
                        <div className='flex flex-col pt-10'>
                            <div className='px-5 pt-2 flex flex-row justify-center items-center gap-1'>
                                <Image src={img} width='auto' height='auto' alt='chat' style={{ width: '25px', height: '25px', objectFit: 'cover' }} className='rounded-full' />
                                <p rounded-lg className='mt-2 p-4 text-xxxs text-light bg-gray-100 '>
                                    Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                </p>
                            </div>
                            <span className='ml-48 pr-5' style={{ fontSize: '8px' }}>Yesterday at 8:10pm</span>
                        </div>
                        <div className='flex flex-col py-5'>
                            <div className='px-5 pt-2 text-white flex flex-row justify-center items-end gap-10'>
                                <Image src={img2} width='auto' height='auto' alt='chat' style={{ width: '25px', height: '25px', objectFit: 'cover' }} className='rounded-full' />
                                <div>
                                    <p className=' rounded-lg mt-2 p-4 text-xxxs text-light bg-purple-700 '>
                                        Don’t worry Mathilda!
                                    </p>
                                    <p className='rounded-lg mt-2 p-4 text-xxxs text-light bg-purple-700 '>I already bought everything</p>
                                </div>

                            </div>
                            <span className='ml-48 pr-5' style={{ fontSize: '8px' }}>Yesterday at 8:10pm</span>
                        </div>
                        <div className='flex flex-col pb-5'>
                            <div className='px-5 pt-2 flex flex-row justify-center items-center gap-1'>
                                <Image src={img} width='auto' height='auto' alt='chat' style={{ width: '25px', height: '25px', objectFit: 'cover' }} className='rounded-full' />
                                <p rounded-lg className='mt-2 p-4 text-xxxs text-light bg-gray-100 '>
                                    Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                </p>
                            </div>
                            <span className='ml-48 pr-5' style={{ fontSize: '8px' }}>Yesterday at 8:10pm</span>
                        </div>
                        <input type="text" className='w-full p-5 border sticky bottom-0' />
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatPopup
