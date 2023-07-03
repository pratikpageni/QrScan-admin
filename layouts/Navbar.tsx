import Link from 'next/link';
import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

interface NavbarInterface {
  NavbarTitle?: string;
  NavDescription?: string;
}

const Navbar = ({ NavbarTitle, NavDescription }: NavbarInterface) => {
  return (
    <div className='flex  bg-white fixed   pl-[18rem] justify-between left-0 right-0 px-8 py-4 shadow-sm items-center '>
      <div className=''>
        <h1 className='font-bold text-2xl'>{NavbarTitle}</h1>
        <p className='text-[#B1B1B1] font-normal text-xl '>{NavDescription}</p>
      </div>
      <div className=' flex justify-end gap-x-5'>
        <button className='w-[40px] h-[40px] bg-gray-100 rounded-full flex justify-center items-center hover:bg-gray-200'>
          <FaRegBell size={21} color='#4f834b' />
          <h1 className='bg-brandcolor rounded-full w-[18px] h-[18px] text-white text-xs flex justify-center items-center absolute -mt-8 -mr-7'>
            5
          </h1>
        </button>
        <button className='w-[40px] h-[40px] bg-gray-100 rounded-full flex justify-center items-center hover:bg-gray-200 '>
          <HiOutlineChatBubbleOvalLeftEllipsis size={25} color='#4f834b' />
          <h1 className='bg-brandcolor rounded-full w-[18px] h-[18px] text-white text-xs flex justify-center items-center absolute -mt-8 -mr-7'>
            12
          </h1>
        </button>
        <img
          src='/img/profile.jpg'
          alt='profile'
          className='w-[40px] h-[40px] rounded-full'
        />
        <div className='-ml-2'>
          <span className='font-bold text-base'>Pratik Pageni</span>
          <p className='text-sm -mt-1'>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
