import React from 'react'
import UserProfile from './shared/UserProfile' //user profile component

import { LuCirclePlay } from "react-icons/lu"; //play icon
import { HiOutlineChartSquareBar } from "react-icons/hi"; //graph icon
import { RiUserAddLine, RiGamepadLine } from "react-icons/ri"; //user, game icon
import { CiBookmark } from "react-icons/ci"; //bookmark icon
import { IoSettingsOutline } from "react-icons/io5"; //setting icon

const RightSideHero = () => {
    return (
        <section className='w-[24%] hidden lg:flex flex-col gap-5'>

            {/* user profile component */}
            <UserProfile />

            {/* links sidebar */}
            <div className='w-full h-fit py-8 px-6 bg-white rounded-3xl flex flex-col gap-6'>

                {/* learning btn */}
                <button className='capitalize text-[#666666] cursor-pointer flex justify-start items-center gap-4 hover:text-blue-400 transition-all duration-200'>
                    <LuCirclePlay className='text-2xl' />
                    Learning
                </button>

                {/* insights btn */}
                <button className='capitalize text-[#666666] cursor-pointer flex justify-start items-center gap-4 hover:text-blue-400 transition-all duration-200'>
                    <HiOutlineChartSquareBar className='text-2xl' />
                    Insights
                </button>

                {/* find colleagues btn */}
                <button className='capitalize text-[#666666] cursor-pointer flex justify-start items-center gap-4 hover:text-blue-400 transition-all duration-200'>
                    <RiUserAddLine className='text-2xl' />
                    find colleagues
                </button>

                {/* bookmarks btn */}
                <button className='capitalize text-[#666666] cursor-pointer flex justify-start items-center gap-4 hover:text-blue-400 transition-all duration-200'>
                    <CiBookmark className='text-2xl' />
                    Bookmarks
                </button>

                {/* gamming btn */}
                <button className='capitalize text-[#666666] cursor-pointer flex justify-between items-center hover:text-blue-400 transition-all duration-200'>
                    <div className='flex gap-4'>
                        <RiGamepadLine className='text-2xl' />
                        Gamming
                    </div>
                    <span className='px-2 py-1 bg-blue-400 text-white text-xs rounded-2xl'>New</span>
                </button>

                {/* settings btn */}
                <button className='capitalize text-[#666666] cursor-pointer flex justify-start items-center gap-4 hover:text-blue-400 transition-all duration-200'>
                    <IoSettingsOutline className='text-2xl' />
                    Settings
                </button>

            </div>

            {/* followed tags */}
            <div className='w-full h-fit py-8 px-6 bg-white rounded-3xl flex flex-col gap-4'>

                {/* title */}
                <h2 className='uppercase text-[#666666] font-semibold'>Followed Hashtags</h2>

                <div className='flex flex-wrap gap-2'>
                    <button className='w-fit py-1 px-3 text-black bg-blue-100 cursor-pointer rounded'>
                        #software engineer
                    </button>

                    <button className='w-fit py-1 px-3 text-black bg-blue-100 cursor-pointer rounded'>
                        #job
                    </button>

                    <button className='w-fit py-1 px-3 text-black bg-blue-100 cursor-pointer rounded'>
                        #intern
                    </button>

                    <button className='w-fit py-1 px-3 text-black bg-blue-100 cursor-pointer rounded'>
                        #frontend
                    </button>

                    <button className='w-fit py-1 px-3 text-black bg-blue-100 cursor-pointer rounded'>
                        #React.js
                    </button>

                    <button className='w-fit py-1 px-3 text-black bg-blue-100 cursor-pointer rounded'>
                        #Next.js
                    </button>

                </div>

            </div>

        </section>
    )
}

export default RightSideHero