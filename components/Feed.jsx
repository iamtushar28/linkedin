import React from 'react'
import Image from 'next/image'
import Tushar from '@/public/images/tushar.png'
import RightSideHero from './RightSideHero'
import Post from './shared/Post'

import { CiImageOn, CiVideoOn, CiCalendar } from "react-icons/ci"; //image, video, Calendar icon
import { MdOutlineArticle } from "react-icons/md"; //article icon
import { IoIosSend } from "react-icons/io"; //send icon

const Feed = () => {
    return (
        <section className='px-2 md:px-8 lg:px-16 pt-4 pb-20 md:pb-24 md:py-8 w-full flex gap-4 justify-between'>

            {/* right side hero section component */}
            <RightSideHero />

            {/* linkedin post feed section */}
            <div className='w-full lg:w-[50%] flex flex-col gap-5'>

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
                            <span className='hidden md:block'>Photo</span>
                        </button>

                        {/* upload viedo btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <CiVideoOn className='text-xl' />
                            <span className='hidden md:block'>Video</span>
                        </button>

                        {/* event btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <CiCalendar className='text-xl' />
                            <span className='hidden md:block'>Event</span>
                        </button>

                        {/* article btn */}
                        <button className='h-16 text-[#666666] hover:text-blue-500 capitalize cursor-pointer flex items-center gap-1 transition-all duration-300'>
                            <MdOutlineArticle className='text-xl' />
                            <span className='hidden md:block'>Article</span>
                        </button>

                        {/* send btn */}
                        <button className='h-16 pr-6 pl-4 text-[#666666] hover:bg-[#A1E1FF] hover:text-black capitalize cursor-pointer flex justify-center items-center gap-1 transition-all duration-300'>
                            <IoIosSend className='text-xl' />
                            <span className='hidden md:block'>Publish</span>
                        </button>

                    </div>

                </div>

                {/* linkedin post */}
                <Post />
                <Post />

            </div>

            <RightSideHero />


        </section>
    )
}

export default Feed