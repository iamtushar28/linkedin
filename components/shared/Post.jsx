import React from 'react'
import Image from 'next/image'
import Tushar from '@/public/images/tushar.png'
import { SlOptionsVertical } from "react-icons/sl"; //option btn
import { BiLike } from "react-icons/bi"; //like icon
import { FaRegComment } from "react-icons/fa"; //comment icon
import { RiShareForwardLine } from "react-icons/ri"; //share icon
import { CiBookmark } from "react-icons/ci"; //bookmark icon
import { IoIosSend } from "react-icons/io"; //send icon
import PostImage from '@/public/images/postImage.png'

const Post = () => {
  return (
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
  )
}

export default Post