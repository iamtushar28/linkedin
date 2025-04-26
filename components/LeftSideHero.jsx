import React from 'react'
import Image from 'next/image'
import Ajinkya from '@/public/images/ajinkya.png'
import Promotion from './shared/Promotion'

const LeftSideHero = () => {
    return (
        <section className='w-[24%] hidden lg:flex flex-col gap-5'>

            <Promotion />

            {/* people you may know sidebar */}
            <div className='w-full h-fit px-4 py-6 bg-white rounded-3xl flex flex-col gap-6'>

                {/* title */}
                <h2 className='text-lg font-semibold'>Peoples you may know:</h2>

                {/* people section */}
                <div className='flex flex-col gap-6'>

                    {/* card 1 */}
                    <div className='flex gap-3'>

                        {/* profile image */}
                        <Image src={Ajinkya} alt='Ajinkya' className='h-10 w-10 rounded-full' />

                        <div>
                            {/* name */}
                            <h4 className='font-semibold capitalize text-sm'>Ajinkya Survase</h4>

                            {/* profession */}
                            <h6 className='text-xs text-zinc-400 capitalize'>Web developer</h6>
                        </div>

                        {/* connect button */}
                        <button name='connect button' className='px-2 py-1 text-sm text-[#00ACFF] font-semibold border border-[#00ACFF] rounded-lg cursor-pointer'>
                            Connect
                        </button>

                    </div>
                    <div className='flex gap-3'>

                        {/* profile image */}
                        <Image src={Ajinkya} alt='Ajinkya' className='h-10 w-10 rounded-full' />

                        <div>
                            {/* name */}
                            <h4 className='font-semibold capitalize text-sm'>Ajinkya Survase</h4>

                            {/* profession */}
                            <h6 className='text-xs text-zinc-400 capitalize'>Web developer</h6>
                        </div>

                        {/* connect button */}
                        <button name='connect button' className='px-2 py-1 text-sm text-[#00ACFF] font-semibold border border-[#00ACFF] rounded-lg cursor-pointer'>
                            Connect
                        </button>

                    </div>
                    <div className='flex gap-3'>

                        {/* profile image */}
                        <Image src={Ajinkya} alt='Ajinkya' className='h-10 w-10 rounded-full' />

                        <div>
                            {/* name */}
                            <h4 className='font-semibold capitalize text-sm'>Ajinkya Survase</h4>

                            {/* profession */}
                            <h6 className='text-xs text-zinc-400 capitalize'>Web developer</h6>
                        </div>

                        {/* connect button */}
                        <button name='connect button' className='px-2 py-1 text-sm text-[#00ACFF] font-semibold border border-[#00ACFF] rounded-lg cursor-pointer'>
                            Connect
                        </button>

                    </div>

                    {/* see all btn */}
                    <button name='see all button' className='pt-2 text-blue-500 font-semibold border-t border-zinc-200 cursor-pointer'>
                        See all
                    </button>

                </div>

            </div>

        </section>
    )
}

export default LeftSideHero