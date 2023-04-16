import React from 'react'
import imgcom from '../public/likes/avatar1-sm.webp'
import friend25 from '../public/likes/friend-harmonic11.webp'
import friend22 from '../public/likes/friend-harmonic9.webp'
import img2 from '../public/likes/avatar42-sm.webp'
import friend5 from '../public/likes/friend-harmonic2.webp'
import friend4 from '../public/likes/friend-harmonic8.webp'
import friend3 from '../public/likes/friend-harmonic7.webp'
import friend2 from '../public/likes/friend-harmonic10.webp'
import friend1 from '../public/likes/friend-harmonic5.webp'
import img1 from '../public/author-page.webp'
import img3 from '../public/likes/avatar47-sm.webp'
import food1 from '../public/likes/post-photo2.webp'
import food2 from '../public/likes/post-photo3.webp'
import food3 from '../public/likes/post-photo4.webp'
import food4 from '../public/likes/post-photo5.webp'
import food5 from '../public/likes/post-photo7.webp'
import img4 from '../public/likes/avatar5-sm.webp'
import post from '../public/likes/post__thumb1.webp'
const Posts = [
    {
        id: "1",
        video:'/static/videos/post_video.mp4',
        name: " James Spiege",
        time: "7 hours ago",
        caption: "Check out the GIF of our photoshoot from the other day:",
        src:img1,
        loves: 15,
        totalLike: [
            {
                id: "1",
                name: "Dina",
                img: friend1,
                
            },
            {
                id: "2",
                name: "Nichol",
                img:friend2
            },
            {
                id: "3",
                name: "Diana",
                img: friend3,
                
            },
            {
                id: "4",
                name: "Nasem",
                img:friend4
            },
            {
                id: "5",
                name: "ssss",
                img:friend5
            },
        ],
        message: 16,
        share: 0,
        likes:47,
    },
    {
        id: "2",
        src: img2,
        name: "  Tapronus Rock",
        time: " 54 mins ago",
        caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.",
        //media: '',
        loves: 24,
        totalLike: [
            {
                id: "1",
                name: "You",
                img: friend3,
                
            },
            {
                id: "2",
                name: "Elina",
                img:friend22
            },
            {
                id: "3",
                name: "Diana",
                img: friend4,
                
            },
            {
                id: "4",
                name: "Nasem",
                img:friend2
            },
            {
                id: "5",
                name: "ssss",
                img:friend25
            },
        ],
        comments: [
            {
                id: "1",
                imgSrc: img1,
                name: "James Spiegel",
                time: "38 mins ago",
                comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.",
                likeC: 3,
            },
            {
                id: "2",
                imgSrc: imgcom,
                name: " Mathilda Brinker",
                time: "1 hour ago",
                comment: "Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
                likeC: 8,
            },
        ],

        message: 17,
        share: 24,
        likes:34,
    },{
        id: "3",
        src: img3,
        name: "Blue Whale Pizzas",
        time: " 7 hours ago",
        caption: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia erunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        imgs: [
            {
                id: 1,
                src:food1,
            },
            {
                id: 2,
                src:food2,
            },
            {
                id: 3,
                src:food3,
            },
            {
                id: 4,
                src:food4,
            },
            {
                id: 5,
                src:food5,
            },
        ],
        loves: 0,
        totalLike: [],

        message: 0,
        share: 16,
        likes:'',
    },
    {
        id: "4",
        src: img4,
        name: " Green Goo Rock",
        time: "March 8 at 6:42pm ",
        caption: "Hey guys! We are gona be playing this Saturday of The Marina Bar for their new Mystic Deer Party. If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!",
        media: post,
        loves: 49,
        totalLike: [
            {
                id: "1",
                name: "jummy",
                img: friend1,
                
            },
            {
                id: "2",
                name: "Andrea",
                img:friend2
            },
            {
                id: "3",
                name: "Diana",
                img: friend3,
                
            },
            {
                id: "4",
                name: "Nasem",
                img:friend5
            },
            {
                id: "5",
                name: "ssss",
                img:friend4
            },
        ],
        message: 246,
        share: 37,
        likes:49,
    },
    
]


export default Posts