import React from 'react'
import Image from 'next/image'
import Tushar from '@/public/images/tushar.png'
import RightSideHero from './RightSideHero'

import { CiImageOn, CiVideoOn, CiCalendar } from "react-icons/ci"; //image, video, Calendar icon
import { MdOutlineArticle } from "react-icons/md"; //article icon
import { IoIosSend } from "react-icons/io"; //send icon

import { SlOptionsVertical } from "react-icons/sl"; //option btn
import { BiLike } from "react-icons/bi"; //like icon
import { FaRegComment } from "react-icons/fa"; //comment icon
import { RiShareForwardLine } from "react-icons/ri"; //share icon
import { CiBookmark } from "react-icons/ci"; //bookmark icon
import PostImage from '@/public/images/postImage.png'

const Feed = () => {
    return (
        <section className='px-16 py-8 w-full flex gap-4 justify-between'>

            {/* right side hero section component */}
            <RightSideHero />

            {/* linkedin post feed section */}
            <div className='w-[50%] flex flex-col gap-5'>

                {/* quick post writting */}
                <div className='w-full h-44 pt-6 bg-white rounded-3xl flex flex-col relative overflow-hidden'>

                    <div className='px-6 flex items-center gap-3'>

                        {/* user profile */}
                        <Image
                            src={Tushar}
                            alt='tushar'
                            className='h-10 w-10 bg-zinc-200 rounded-full'
                        />

                        {/* post input */}
                        <input type="text" placeholder='Write something...' className='w-full outline-none' />

                    </div>

                    {/* action buttons section */}
                    <div className='h-16 w-full pl-6 bg-[#D2F0FF] absolute bottom-0 right-0 left-0 flex justify-between items-center'>

                        {/* upload photo btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <CiImageOn className='text-xl' />
                            Photo
                        </button>

                        {/* upload viedo btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <CiVideoOn className='text-xl' />
                            Video
                        </button>

                        {/* event btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <CiCalendar className='text-xl' />
                            Event
                        </button>

                        {/* article btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <MdOutlineArticle className='text-xl' />
                            Article
                        </button>

                        {/* send btn */}
                        <button className='h-16 pr-6 pl-4 text-[#666666] hover:bg-[#A1E1FF] hover:text-black capitalize cursor-pointer flex justify-center items-center gap-1 transition-all duration-300'>
                            <IoIosSend className='text-xl' />
                            Publish
                        </button>

                    </div>

                </div>

                {/* linkedin post */}
                <div className='w-full h-fit p-5 bg-white rounded-3xl'>

                    {/* post creator */}
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center gap-3'>

                            {/* creator profile */}
                            <Image
                                src={Tushar}
                                alt='tushar'
                                className='h-10 w-10 bg-zinc-200 rounded-2xl'
                            />

                            <div className='flex flex-col'>
                                {/* creator name */}
                                <h2 className='font-semibold capitalize'>Tushar Suryawanshi</h2>

                                {/* creator bio */}
                                <p className='text-xs text-zinc-400'>Software Engineer</p>
                            </div>

                        </div>

                        {/* option btn */}
                        <button className='h-10 w-10 rounded-full hover:bg-zinc-100 flex justify-center items-center cursor-pointer transition-all duration-200'>
                            <SlOptionsVertical />
                        </button>

                    </div>

                    {/* post discreption */}
                    <p className='mt-4 mb-1'>Designed a clean, calming meditation app focused on ease of use and mindful experience.</p>

                    {/* hashtags */}
                    <p className='mb-4 text-blue-500'>#UI/UX #frontend #app-developement</p>

                    {/* post covar image */}
                    <Image src={PostImage} alt='post image' className='w-full h-fit rounded-2xl' />

                    {/* post actions */}
                    <div className='mt-5 flex justify-between'>

                        <div className='flex items-center gap-8'>

                            {/* like btn */}
                            <button name='like btn' className='text-2xl cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                <BiLike />
                            </button>

                            {/* comment btn */}
                            <button name='comment btn' className='text-2xl cursor-pointer hover:text-blue-500 transition-all duration-200 relative'>
                                <FaRegComment />

                                {/* comments count */}
                                <div className='h-6 w-6 text-xs text-white bg-blue-500 rounded-full flex justify-center items-center absolute -top-2 -right-4'>28</div>

                            </button>

                            {/* share btn */}
                            <button name='share btn' className='text-2xl cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                <RiShareForwardLine />
                            </button>

                        </div>

                        {/* bookmark btn */}
                        <button name='bookmark btn' className='text-2xl cursor-pointer hover:text-blue-500 transition-all duration-200'>
                            <CiBookmark />
                        </button>

                    </div>

                    {/* write comment */}
                    <div className='h-12 w-full px-2 bg-[#F6F6F6] mt-4 flex justify-between items-center rounded-3xl'>

                        <div className='flex gap-3 items-center w-[90%]'>

                            {/* user profile */}
                            <Image
                                src={Tushar}
                                alt='tushar'
                                className='h-9 w-9 bg-zinc-200 rounded-full'
                            />

                            {/* comment input */}
                            <input type="text" placeholder='Write a comment' className='h-12 w-full outline-none bg-transparent' />

                        </div>

                        {/* post comment btn */}
                        <button className='h-9 w-9 text-xl text-white bg-blue-500 hover:bg-blue-400 rounded-full cursor-pointer flex justify-center items-center transition-all duration-200'>
                            <IoIosSend />
                        </button>

                    </div>

                </div>

            </div>



            <RightSideHero />


        </section>
    )
}

export default Feed