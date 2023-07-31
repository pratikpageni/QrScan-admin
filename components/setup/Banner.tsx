import { Tooltip } from 'antd';
import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdContact } from 'react-icons/io';

const Banner = () => {
  return (
    <div>
      <img
        src='/img/banner.jpg'
        alt='banner'
        className='w-full h-[18rem] object-cover z-0'
      />
      <div className='mx-10 '>
        <div className='-mt-24 z-10 flex justify-between'>
          <div className='flex'>
            <img
              src='/img/logo.png'
              alt='logo'
              className='w-[11rem] h-[11rem] rounded-full bg-white border-white border-4 object-cover shadow-lg  '
            />
            <div className='ml-5'>
              <p
                className='font-bold text-4xl text-white mt-14 '
                style={{ WebkitTextStroke: '2px #000' }}
              >
                Burger House And Crunchy Fried{' '}
              </p>
              <div className='text-lg '>
                <p className='flex items-center gap-2 '>
                  <FaLocationDot size={22} /> Lazimpat, Kathmandu
                </p>
              </div>
              <div className='text-lg '>
                <p className='flex items-center gap-2'>
                  <IoMdContact size={22} /> 9876543210
                </p>
              </div>
            </div>
          </div>
          <Tooltip title='Edit Your Profile'>
            <button className='bg-brandcolor hover:opacity-70 text-white w-12 h-12 rounded-full flex justify-center items-center self-end'>
              <FiEdit2 size={25} />
            </button>
          </Tooltip>
        </div>
        <div className='mt-3'></div>
      </div>
    </div>
  );
};

export default Banner;
