import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsCamera,BsStar } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { TbArrowsExchange } from 'react-icons/tb'
import { SlHeart } from 'react-icons/sl'
import img from '../public/chat/avatar62-sm.webp'
import { useState, useEffect ,useRef } from "react";
import { VscReactions } from 'react-icons/vsc'
export default function index({ AllPage, Posts, Pages, Friends }) {
  const handleUpload = () => {
    //upload image 
  }
  const [selectedObject, setObject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  function openImage(index, i) {
    setObject(i)
    setSelectedImage(index);
  }
  function closeImage() {
    setSelectedImage(null);
  }
  function previousImage() {
    setSelectedImage((prev) => (prev === 1 ? 4 : prev - 1));
  }
  function nextImage() {
    setSelectedImage((prev) => (prev === 4 ? 1 : prev + 1));
  }
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      setPosts(Posts);
    }
    fetchPosts();
  }, []);

  const handleLoadMore = async () => {
    const response = await fetch('http://localhost:3000/api/Posts/More');
    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
  };
  const videoRef = useRef(null);
  
  function handleVideo(e) {
    const video = videoRef.current;
    const isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  }
  return (
    <>
      <div className="grid-container ">
        <div className="grid-item item-1">
          <div className='flex flex-col ml-8 gap-5 px-5' >
            <div className='flex flex-col bg-white py-5 ' style={{ "width": "320px" }}>
              <div className='flex flex-row justify-center space-x-20 item-center pb-4'>
                <h5 className='font-bold pt-2 text-gray-600' style={{ "fontSize": "14px" }}>Friend Suggestions</h5>
                <span className='font-bold text-2xl text-gray-400'>...</span>
              </div>
              {Friends.map((item, index) => (
                <div className='flex flex-row justify-center items-center' key={index}>
                  <div className='flex flex-row py-5 border-t-2'>
                    <Image
                      alt='cover'
                      src={item.url}
                      width='auto' height='auto'
                      className='rounded-full'
                      style={{ objectFit: 'cover', width: '35px', height: '35px' }}
                    />
                    <div className='flex flex-col justify-start pl-1 flex-1'>
                      <h6 className='font-bold text-gray-600 text-xs hover:text-orange-500'>
                        {item.name}
                      </h6>
                      <p className='text-gray-400 text-xs pl-2 flex'>
                        {item.num}
                      </p>
                    </div>
                    <VscReactions className='rounded-6 bg-blue-500 text-white ml-14 text-xxs' style={{ width: '25px', height: '25px' }} />
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-col bg-white py-5' style={{ "width": "320px" }}>
              <div className='flex flex-row justify-center space-x-20 item-center pb-3'>
                <h5 className='font-bold pt-2 text-gray-600' style={{ "fontSize": "14px" }}>Pages You May Like</h5>
                <span className='font-bold text-2xl text-gray-400'>...</span>
              </div>
              {Pages.map((item, index) => (
                <div className='flex flex-row pl-9' key={index}>
                  <div className='flex flex-row py-6  border-t-2  '>
                    <Image alt='page' src={item.url} width='auto' height='auto' className='rounded-full cover' style={{ objectFit: 'cover', width: '35px', height: '35px' }} />
                    <div className='flex flex-col w-32 space-x-5'>
                      <h6 className='font-bold text-gray-600 hover:text-orange-500 text-xs' style={{ "width": "152px" }}>{item.name}</h6>
                      <p className='text-gray-400 text-xs '>{item.desc}</p>
                    </div>
                    <BsStar className='font-bold rounded-6 ml-14 text-xl mt-2' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 grid-item item-2'>
          <div className='relative text-gray-800 flex flex-row py-5 '>
            <div className='flex items-center bg-gray-700 text-center pl-5' style={{ width: '65px' }}>
              <BsStar className='text-white bg-gray-600 text-xl absolute ' />
            </div>
            <div className=' w-full'>
              <input className='rounded-5 w-full px-4 py-4 text-xs ' type="text" placeholder='Here you’ll see the recent updates of your Fav Pages' />
            </div>
          </div>
          {posts.map((item, index) => (
            <div key={index} className=' relative bg-white max-w-[40rem] mx-auto h-100 text-gray-500 flex flex-col px-10 pt-10 pb-5'>

              <div className=" font bold p-4 absolute " style={{ "left": "37.5rem" }}>
                <div className="flex flex-col gap-2 items-end justify-end">
                  <Link href="#" className="text-white bg-gray-400 p-2 rounded-full hover:text-gray-700 mx-2">
                    <SlHeart />
                  </Link>
                  <Link href="#" className="text-white bg-gray-400 p-2 rounded-full hover:text-gray-700 mx-2">
                    <BiMessageDetail />
                  </Link>
                  <Link href="#" className="text-white bg-gray-400 p-2 rounded-full hover:text-gray-700 mx-2">
                    <TbArrowsExchange />
                  </Link>
                </div>
              </div>

              {/*name and image*/}
              <div className='flex flex-row justify-between items-center text-left' key={index}>
                <div className='flex flex-row gap-4'>
                  <Image src={item.src} width={40} height={35} alt='james' className='rounded-full' />
                  <div className='flex flex-col'>
                    <h3 className='text-black font-semibold '>{item.name}</h3>
                    <p className='text-xs '>{item.time}</p>
                  </div>
                </div>
                <div className='pr-5 font-bold text-xl'>
                  <p>....</p>
                </div>
              </div>
              {/*image and caption */}
              <div className='flex flex-col gap-3 py-8'>
                <p className='text-sm py-2 text-left'>{item.caption}</p>
                {item.media ? (
                  <div className=' '>
                    <Image width={600} height={100} alt='sun' src={item.media} className='rounded-lg overflow-hidden' />
                  </div>
                ) : (
                  <></>
                )}
                {item.totalShare ? (
                  <div className='  flex '>
                    {item.totalShare.map((i) =>
                    (
                      <div key={i.id} className=' px-5 pb-5 flex flex-col gap-5 text-left border-l-2 border-b-2'>
                        <div className='flex flex-row items-center gap-3'>
                          <Image src={i.img} width='auto' height='auto' className='rounded-full' style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                          <div className='flex flex-col text-left '>
                            <h4 className='text-gray-800 text-xs font-bold'>{i.name}</h4>
                            <p className='text-gray-400 text-xxs'>{i.time}</p>
                          </div>
                        </div>
                        <div>
                          {i.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
                {
                  item.link ? (
                    <div className='flex flex-row border-2 text-left hover:cursor-pointer' >
                      <div>
                        <Image src={item.link} width='auto' height='auto' alt='link' />
                      </div>
                      <div className='flex flex-col gap-5 p-5'>
                        <Link href={item.linkSrc} >
                          <h1 className='text-xl hover:text-orange-500 font-light pl-5 '>{item.linktext}</h1>
                          <p className='text-xxs pl-5'>{item.desc}</p>
                          <span className='text-xxxs font-light pl-5 pt-5 '>{item.url}</span>
                        </Link>

                      </div>

                    </div>

                  ) : (<></>)
                }
                {item.video ? (
                  <div className=' '>
                    <video ref={videoRef} autoPlay loop onClick={handleVideo} >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <></>
                )}
                {item.imgs ? (
                  <div className=''>
                    <div className='flex flex-wrap gap-5'>
                      {posts.map((item, index) => {
                        return item.imgs ? (
                          <div key={index} className='flex flex-wrap'>
                            {item.imgs.slice(0, 2).map((i, index) => (
                              <div key={index} className='w-1/2 p-2'>
                                <Image src={i.src} alt='img' width={400} height={200} className='rounded-lg cover cursor-pointer' onClick={() => openImage(i.id, item.id)} />
                              </div>
                            ))}
                            {item.imgs.slice(2).map((i, index) => (
                              <div key={index} className='w-1/3 p-2'>
                                <Image src={i.src} alt='img' width={400} height={200} className='rounded-lg cover cursor-pointer' onClick={() => openImage(index + 2, item.id)} />
                              </div>
                            ))}
                          </div>
                        ) : null;
                      })}
                    </div>
                    {selectedImage !== null && (
                      <div className='fixed inset-0 z-50 flex justify-center items-center'>
                        <div className='absolute inset-0 bg-black opacity-50 cursor-pointer' onClick={closeImage}></div>
                        <div className='relative'>
                          <button className='absolute top-1/2 left-0 m-4 text-3xl text-white hover:text-gray-300 focus:outline-none' onClick={previousImage}>
                            &#10094;
                          </button>
                          <button className='absolute top-1/2 right-0 m-4 text-3xl text-white hover:text-gray-300 focus:outline-none' onClick={nextImage}>
                            &#10095;
                          </button>
                          <div className='max-w-lg max-h-full overflow-y-auto'>
                            <Image width='auto' height='auto' src={Posts[selectedObject - 1].imgs[selectedImage].src} alt='imgOpen' className='rounded-lg cursor-pointer' onClick={() => closeImage()} />
                          </div>
                          <button
                            className="absolute top-0 right-0 m-4 text-3xl text-white hover:text-gray-300 focus:outline-none"
                            onClick={closeImage}
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                    )}
                  </div>) : null}
              </div>
              <div className='flex flex-row gap-7 pt-4 border-t-2 py-5'>
                <div className='flex flex-row gap-2 '>
                  <SlHeart className='text-xl ' />
                  <span className='text-xs'>{item.loves}</span>
                </div>
                <div className="image-container">
                  {item.totalLike && item.totalLike.map((i, index) =>
                  (
                    <Image key={index} src={i.img} alt="img" width={25} height={25} className="overlay" />
                  ))}
                </div>
                <div>
                  <div className='w-24 text-xs'>
                    {item.totalLike?.slice(0, 2).map((i, index) => (
                      <span className="font-bold" key={index} >
                        {i.name},
                      </span>
                    ))}
                    {
                      item.likes ? (<span>and {item.likes} more like this</span>) : null
                    }
                  </div>
                </div>
                <div className='flex flex-row gap-5 ml-40 '>
                  <div className='flex flex-row ml-50 '>
                    <BiMessageDetail className='text-3xl' />
                    <span>{item.message}</span>
                  </div>
                  <div className='flex flex-row'>
                    <TbArrowsExchange className='text-3xl' />
                    <span>{item.share}</span>
                  </div>
                </div>
              </div>
              <div >
                {item.comments ? item.comments.map((i, index) => (
                  <div className='flex flex-col border-t-2 pb-5 bg-gray-10 text-left' >
                    <div className='flex flex-row justify-between pb-2 pt-10' key={index}>
                      <div className='flex flex-row gap-4'>
                        <Image src={i.imgSrc} width="auto" height='auto' alt='james' className='rounded-full' style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                        <div className='flex flex-col text-left'>
                          <h3 className='text-black font-semibold'>{i.name}</h3>
                          <p className='text-xs'>{i.time}</p>
                        </div>
                      </div>
                      <div>
                        <p>....</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 py-2'>
                      <p className='text-sm py-1'>{i.comment}</p>
                    </div>
                    <div className='flex flex-row gap-6 pt-3'>
                      <div className='flex flex-row gap-2 pt-1'>
                        <SlHeart className='text-xl ' />
                        <span className='text-xs'>{i.likeC}</span>
                      </div>
                      <p className=''>Reply</p>
                    </div>

                  </div>
                )) : null}
                {item.comments ?
                  <div className='flex flex-col gap-2'>
                    < div className='w-full py-4 text-black font-bold flex justify-center border-t-2 border-b-2 '>
                      <Link href='/'>
                        <h3>view more comment +</h3>
                      </Link>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <div className='flex flex-row gap-5'>
                        <Image src={img} width='auto' height='auto' alt='comment' className='rounded-full' style={{ objectFit: 'cover', width: '30px', height: '30px' }} />
                        <div className='flex flex-row relative'>
                          <input type="text" className='border-2 h-16 focus:h-32 focus:border-orange-500 outline-none' style={{ "width": "30rem" }} />
                          <BsCamera className='absolute text-2xl' style={{ "left": "28.3rem", "top": "1rem" }} onClick={handleUpload} />
                        </div>
                      </div>
                      <div className='flex flex-row gap-4 justify-end text-sm font-semibold mr-7 pb-2'>
                        <button className="border border-gray-500 text-gray-500 rounded-md w-28 py-2 transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:border-orange-500">
                          cancel
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white w-40 py-3 px-4 rounded">
                          post comment
                        </button>
                      </div>
                    </div>
                  </div> : <></>}
              </div>
            </div>
          ))}


          <button className="py-2 px-4 bg-gray-600 text-white rounded-full mx-auto  block" onClick={handleLoadMore}>
            ...
          </button>
        </div>

        <div className="grid-item item-3">
          <div className='flex flex-col gap-5 ml-3'>
            <div className='w-64 h-68 bg-orange-600 p-5 text-white flex flex-col gap-20'>
              <div className='text-xl flex flex-row justify-between items-center '>
                <div className='pt-4'>
                  <BsStar />
                </div>
                <Link href='/'>
                  <span className='text-2xl'>...</span>
                </Link>
              </div>
              <div className='flex flex-col justify-start items-start'>
                <p className='text-xxs'>Be like them and</p>
                <h1 className='text-2xl text-left pb-3 '>Create Your Own Favourite Page!</h1>
                <Link href='/' className="bg-gray-700 hover:bg-gray-500 text-white font-bold text-xxs py-2 px-8 rounded">
                  Start Now
                </Link>

              </div>

            </div>
            <div className='bg-white w-64 p-5'>
              <ul className='font-bold flex flex-row justify-between pb-5 border-b-2 items-center'>
                <li><h5 className='text-md pt-3'>Your Fav Pages (54)</h5></li>
                <li className='text-gray-400 text-2xl'>...</li>
              </ul>
              <div className='flex flex-row flex-wrap gap-1 py-4'>
                {
                  AllPage.map((item) => (
                    <div className='w-10 pb-4' key={item.id}>
                      <Image src={item.url} width={30} height={30} alt='img' className='rounded-full' />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const AllPage = await fetch('http://localhost:3000/api/Page').then(res => res.json());
  const Friends = await fetch('http://localhost:3000/api/Friend').then(res => res.json());
  const Posts = await fetch('http://localhost:3000/api/Posts').then(res => res.json());
  const Pages = await fetch('http://localhost:3000/api/Page')
    .then(res => res.json())
    .then(data => data.slice(0, 6));
  return {
    props: {
      Posts,
      Pages,
      Friends,
      AllPage,
    },
    revalidate: 60 // Revalidate the data every 60 seconds
  };
}
