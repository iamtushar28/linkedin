import React from 'react'
import { GoHomeFill } from "react-icons/go"; //home icon
import { PiUsersThreeLight, PiSuitcaseSimple, PiBellRinging } from "react-icons/pi"; //user, bag, bell icon
import { LuMessageCircleMore } from "react-icons/lu"; //message, search icon

const MobileNavbar = () => {
    return (
        <nav className='z-50 h-14 w-full bg-white border-t border-zinc-200 flex lg:hidden justify-center items-center fixed bottom-0 right-0 left-0'>

            <div className='w-full flex justify-around'>

                {/* home */}
                <button name='home button' className='text-2xl text-blue-400 cursor-pointer'>
                    <GoHomeFill />
                </button>

                {/* peoples */}
                <button name='people button' className='text-2xl text-zinc-500 cursor-pointer hover:text-blue-400 transition-all duration-200'>
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

            </div>
        </nav>
    )
}

export default MobileNavbar