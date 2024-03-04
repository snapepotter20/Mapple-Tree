"use client"
import React from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Header = () => {
  return (
    <div className='h-16 w-full bg-white flex justify-center items-center gap-48'>
      <div className='flex justify-center items-center gap-6'>
      <div className='border border-gray-300 p-2 rounded-lg w-[300px] relative'>
        <input type='text' placeholder='Search...' className='text-center'/>
        <img src='/Images/Header/search.svg' className='absolute right-0 top-[20%] mr-2 cursor-pointer'/>
      </div>
      <div className='text-sm'><span>Buy service</span></div>
      <div className='text-sm'><span>Help</span></div>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <div className='border border-blue-500 bg-[#F3F8FF] p-2 rounded-lg flex items-center justify-center gap-2'>
          <span className='text-[#5B5C5D] text-xs'>Wallet Balance</span>
          <span className='black font-semibold'>1,00,000</span>
        </div>
        <div>
          <img src='/Images/Header/notification.svg' alt='notification'/>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <div className='rounded-full bg-[#D9D9D9] p-2'><img src="/Images/Header/notification.svg" alt='profile'/></div>
          <div><span>Name of client</span></div>
          <div className='cursor-pointer'><FaCaretDown/></div>
        </div>
      </div>
    </div>
  )
}

export default Header
