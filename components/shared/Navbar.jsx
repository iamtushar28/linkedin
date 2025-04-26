import React from 'react'
import Image from 'next/image'
import Tushar from '@/public/images/tushar.png'
import Logo from '@/public/images/logo.png'
import { GoHomeFill } from "react-icons/go"; //home icon
import { PiUsersThreeLight, PiSuitcaseSimple, PiBellRinging } from "react-icons/pi"; //user, bag, bell icon
import { LuMessageCircleMore, LuSearch } from "react-icons/lu"; //message, search icon
import { FaLinkedin } from "react-icons/fa"; //linkedin icon

const Navbar = () => {
    return (
        <nav className='h-16 py-2 w-full px-2 md:px-8 lg:px-16 bg-white flex gap-4 justify-between items-center fixed top-0 left-0 right-0 z-50'>

            {/* logo - hidden at mobile screen */}
            <Image src={Logo} alt='linkedin logo' className='h-7 w-fit hidden md:block' />

            {/* logo - hidden at desktop */}
            <button name='logo button' className='block md:hidden text-blue-400 text-4xl'>
                <FaLinkedin />
            </button>

            {/* desktop links */}
            <div className='hidden lg:flex gap-12'>

                {/* home */}
                <button name='home button' className='text-2xl text-blue-400 cursor-pointer'>
                    <GoHomeFill />
                </button>

                {/* peoples */}
                <button name='peoples button' className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200'>
                    <PiUsersThreeLight />
                </button>

                {/* jobs */}
                <button name='jobs button' className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200'>
                    <PiSuitcaseSimple />
                </button>

                {/* notification */}
                <button name='notification button' className='text-2xl text-zinc-500 cursor-pointer relative hover:text-blue-400 transition-all duration-200'>
                    <PiBellRinging />
                    {/* notification count */}
                    <div className='h-6 w-6 text-xs text-white bg-blue-400 rounded-full flex justify-center items-center absolute -top-2 -right-3'>30</div>
                </button>

                {/* message */}
                <button name='message button' className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200 relative'>
                    <LuMessageCircleMore />
                    {/* message count */}
                    <div className='h-6 w-6 text-xs text-white bg-blue-400 rounded-full flex justify-center items-center absolute -top-2 -right-3'>28</div>
                </button>

                {/* user profile */}
                <Image
                    src={Tushar}
                    alt='tushar'
                    className='h-8 w-8 bg-zinc-200 rounded-full hidden md:block cursor-pointer'
                />

            </div>

            {/* search input */}
            <div className='relative w-full lg:w-fit'>

                <input type="text" className='h-10 w-full lg:w-64 pl-3 md:pr-10 text-sm bg-[#F6F6F6] outline-none rounded-lg lg:rounded-2xl placeholder:text-sm' placeholder='Search for anything (Jobs)' />

                <button name='search button' className='h-10 w-10 pr-1 rounded-r-lg lg:rounded-r-2xl text-white bg-blue-400 absolute right-0 top-0 bottom-0 flex justify-center items-center'>
                    <LuSearch />
                </button>

            </div>

            {/* user profile */}
            <Image
                src={Tushar}
                alt='tushar'
                className='h-10 w-10 bg-zinc-200 rounded-full block lg:hidden cursor-pointer'
            />

        </nav>
    )
}

export default Navbar