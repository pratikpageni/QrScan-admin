import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi';
import AddItemCard from '@/components/managebill/AddItemCard';

const managebill = () => {
  return (
    <div>
      <Breadcrumb
        className='mb-2 -mt-2'
        items={[
          {
            title: (
              <Link href={'/billing'} className='hover:text-brandcolor'>
                Billing
              </Link>
            ),
          },
          {
            title: <p className='text-brandcolor'>Table 1</p>,
          },
        ]}
      />
      <div className='flex gap-x-6'>
        <div className=' order-2 bg-white rounded-lg  overflow-y-scroll h-[31rem] fixed right-4 p-4  w-[31rem]'>
          <div className='font-semibold text-center text-lg '>
            <p className='pb-2 border-b'>Add Item</p>
          </div>
          <div className='grid grid-cols-3 gap-2 p-4'>
            {[0, 0, 0, 0].map((data, index) => {
              return <AddItemCard />;
            })}
          </div>
        </div>
        <div className='w-[33rem] order-1 rounded-lg text-center p-4 text-lg font-semibold right-0 '>
          <h1 className=' border-dashed border-b pb-2'>Table 1</h1>
          <div className='p-4  border-b'>
            {[0, 0, 0, 0, 0, 0, 0].map((data, index) => {
              return (
                <div
                  key={index}
                  className='flex   w-full justify-between py-2 '
                >
                  <div className='flex gap-x-3 items-center'>
                    <img
                      src='/img/profile.jpg'
                      alt='food'
                      className='h-[40px] w-[40px] rounded-full object-cover border border-brandcolor'
                    />
                    <div className='text-gray-800'>
                      <h5 className='font-normal  text-start'>
                        Burger with French Fries
                      </h5>
                      <p className='text-sm -mt-1 text-left'>x1</p>
                    </div>
                  </div>
                  <h5 className='text-brandcolor font-semibold text-right text-base'>
                    Rs 500/-
                  </h5>
                </div>
              );
            })}
            <div className='flex gap-x-3 text-sm items-center'>
              <input
                type='text'
                placeholder='Item Name'
                className='w-full p-2 outline-none bg-gray-200 rounded-md'
              />
              <input
                type='number'
                placeholder='Qty'
                className='w-[3rem] p-2  bg-gray-200 rounded-md'
              />
              <input
                type='text'
                placeholder='Rate'
                className='w-[3.5rem] p-2 outline-none bg-gray-200 rounded-md'
              />
              <input
                type='text'
                placeholder='Price'
                className='w-[3.5rem] p-2 outline-none bg-gray-200 rounded-md'
              />
              <button>
                <BiSave color='green' size={25} />
              </button>
            </div>
          </div>
          <div className='flex p-2'>
            <div className='w-1/2'></div>
            <div className='w-1/2 text-base text-right'>
              <div className='flex text-gray-800'>
                <p className='w-[70%] '>SubTotal:</p>
                <p className='w-[30%]'>Rs 500</p>
              </div>
              <div className='flex text-gray-800'>
                <p className='w-[70%]'>Discount:</p>
                <p className='w-[30%]'>Rs 50</p>
              </div>
              <div className='flex font-bold'>
                <p className='w-[70%] '>Grand Total:</p>
                <p className='w-[30%] text-brandcolor'>Rs 450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default managebill;
