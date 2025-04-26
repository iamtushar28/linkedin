import React from 'react'
import Image from 'next/image'
import ProfileBanner from '@/public/images/banner.png'
import Tushar from '@/public/images/tushar.png'
import { CiLocationOn } from "react-icons/ci"; //location icon

const UserProfile = () => {
    return (
        <div className='w-full h-fit pb-4 bg-white rounded-3xl overflow-hidden'>

            {/* user profile banner */}
            <Image src={ProfileBanner} alt='ProfileBanner' className='w-full h-16 object-center' />

            <div className='px-2'>

                {/* user profile */}
                <Image
                    src={Tushar}
                    alt='tushar'
                    className='h-10 w-10 -mt-5 absolute bg-zinc-200 rounded-xl'
                />

                {/* user name */}
                <h2 className='text-sm ml-12 mt-1 capitalize font-semibold'>Tushar Suryawanshi</h2>

                {/* profession */}
                <h2 className='text-xs mt-1 ml-12 capitalize text-zinc-800'>Software Engineer | Frontend Developer</h2>

                {/* location */}
                <h2 className='text-xs ml-12 mt-2 capitalize text-zinc-500 flex gap-1 items-center'>
                    <CiLocationOn className='text-blue-500'/>
                    Satara, Maharashtra
                </h2>

            </div>

        </div>
    )
}

export default UserProfile