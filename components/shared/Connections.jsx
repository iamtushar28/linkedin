import React from 'react'
import { LiaUserFriendsSolid } from "react-icons/lia"; //people icon

const Connections = () => {
    return (
        <div className='w-full h-fit p-5 bg-white rounded-3xl overflow-hidden'>

            <div className='flex justify-between'>
                {/* title */}
                <h2 className='text-lg font-semibold flex gap-2 items-center'>
                    <LiaUserFriendsSolid className='text-2xl text-blue-400' />
                    Connections
                </h2>

                {/* count */}
                <h4 className='text-lg font-semibold'>
                    28
                </h4>
            </div>

            <h4 className='text-zinc-600 cursor-pointer hover:underline'>Connect with alumni</h4>

        </div>
    )
}

export default Connections