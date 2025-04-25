import React from 'react'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { GoHomeFill } from "react-icons/go"; //home icon
import { PiUsersThreeLight, PiSuitcaseSimple, PiBellRinging } from "react-icons/pi"; //user, bag, bell icon
import { LuMessageCircleMore, LuSearch } from "react-icons/lu"; //message, search icon
import { FaRegUserCircle } from "react-icons/fa"; //user icon

const Navbar = () => {
    return (
        <nav className='h-16 py-2 w-full px-16 bg-white flex justify-between items-center'>

            {/* logo */}
            <Image src={Logo} alt='linkedin logo' className='h-7 w-fit' />

            {/* links */}
            <div className='flex gap-12'>

                {/* home */}
                <button className='text-2xl text-blue-400 cursor-pointer'>
                    <GoHomeFill />
                </button>

                {/* peoples */}
                <button className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200'>
                    <PiUsersThreeLight />
                </button>

                {/* jobs */}
                <button className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200'>
                    <PiSuitcaseSimple />
                </button>

                {/* notification */}
                <button className='text-2xl text-zinc-500 cursor-pointer relative hover:text-blue-400 transition-all duration-200'>
                    <PiBellRinging />
                    {/* notification count */}
                    <div className='h-6 w-6 text-xs text-white bg-blue-400 rounded-full flex justify-center items-center absolute -top-2 -right-3'>30</div>
                </button>

                {/* message */}
                <button className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200 relative'>
                    <LuMessageCircleMore />
                    {/* message count */}
                    <div className='h-6 w-6 text-xs text-white bg-blue-400 rounded-full flex justify-center items-center absolute -top-2 -right-3'>28</div>
                </button>

                {/* user */}
                <button className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200'>
                    <FaRegUserCircle />
                </button>

            </div>

            {/* search input */}
            <div className='relative'>

                <input type="text" className='h-10 w-64 pl-3 pr-10 text-sm bg-[#F6F6F6] outline-none rounded-2xl placeholder:text-sm' placeholder='Search for anything (Jobs)' />

                <button className='h-10 w-10 pr-1 rounded-r-2xl text-white bg-blue-400 absolute right-0 top-0 bottom-0 flex justify-center items-center'>
                    <LuSearch />
                </button>

            </div>

        </nav>
    )
}

export default Navbar