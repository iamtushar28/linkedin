import React from 'react'
import Image from 'next/image'
import PromotionVisual from '@/public/images/promotion.png'

const Promotion = () => {
    return (
        <div className='w-full h-fit p-4 bg-gradient-to-r from-[#d4f1ff92] to-white rounded-3xl overflow-hidden relative flex justify-start items-center'>

            {/* title */}
            <div className='flex flex-col items-center'>
                <h2 className='text-2xl text-center'>Try premium <br /> for free</h2>
                <p className='text-xs text-zinc-400'>One month free</p>
                <button name='try free button' className='px-8 py-2 mt-2 text-sm font-semibold bg-gradient-to-t from-[#bb00ffb7] to-[#00aaffc2] rounded-xl cursor-pointer'>
                    Try free
                </button>
            </div>

            {/* Promotion Visual image */}
            <Image src={PromotionVisual} alt='PromotionVisual' className='w-40 h-fit absolute bottom-0 right-0' />

        </div>
    )
}

export default Promotion