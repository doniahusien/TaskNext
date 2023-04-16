import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import Image from 'next/image';
const Searching = ({ filteredResults }) => {
  return (
    <>
      <div className=' absolute top-15 left-0 bg-white text-black px-8 w-86 py-5 overflow-y-auto shadow-lg' >
        {
          filteredResults.map((item) => (
            <ul key={item.id} className='flex items-center shadow py-5'>
              <li>
                <Image src={item.src} width={40} height={40} alt='img' className='rounded-full' />
              </li>
              <li className='pl-2 w-40'>
                <h3 className=' font-bold text-sm'>{item.name}</h3>
                <p className='text-xxxs text-gray-800 pt-1'>{item.rel}</p>
              </li>
              <li className='pl-20'>
                <BsEmojiSmile className='mb-1 text-2xl text-gray-400 ' />
              </li>
            </ul>
          ))}

      </div>
    </>
  )
}

export default Searching