import React from 'react';
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const RecentOrderCard = () => {
  return (
    <div className='bg-white p-7 rounded-3xl shadow-sm '>
      <div className='text-center border-b pb-3'>
        <h1 className='font-bold text-xl'>Table N0.1</h1>
        <p className='text-[14px]'>Order #1 | 5 minutes ago</p>
      </div>
      <div>
        <div className='overflow-y-auto h-80 mt-3 -mx-2 -mb-5'>
          {[0, 0, 0, 0].map((data, index) => {
            return (
              <div className='flex gap-x-3 mt-3  '>
                <div className='w-[25%]'>
                  <img
                    src='/img/profile.jpg'
                    alt='food'
                    className='w-[50px] h-[50px] rounded-full border-brandcolor border-2'
                  />
                </div>

                <div className='w-full'>
                  <div className='text-xl font-bold'>
                    <h1>C Momo</h1>
                  </div>
                  <p className='text-sm text-gray-500'>
                    I need little bit more salt.
                  </p>
                  <div className='flex mt-1 justify-between items-center'>
                    <h1 className='font-bold'>Qty:1</h1>
                    <div className='flex gap-x-2'>
                      <button className='h-8 w-8 rounded-full border-brandcolor text-brandcolor border flex justify-center items-center hover:bg-brandcolor hover:text-white'>
                        <MdDone />
                        {/* <h1>Completed</h1> */}
                      </button>
                      <button className='h-8 w-8 rounded-full border-red-500 text-red-500 border flex justify-center items-center hover:bg-red-500 hover:text-white'>
                        <RxCross2 />
                        {/* <h1>Completed</h1> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentOrderCard;
