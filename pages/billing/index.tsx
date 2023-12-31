import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { BiDollar } from 'react-icons/bi';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

const billing = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {[0, 0, 0, 0, 0, 0].map((data, index) => {
        return (
          <Link
            key={index}
            href={'/billing/managebill'}
            className='p-3 rounded-md bg-white group  hover:bg-brandcolor  hover:text-white'
          >
            <h1 className='font-bold text-2xl'>Table {index + 1}</h1>
            <div className=' text-gray-500  text-sm flex items-center group-hover:text-white'>
              <div className='text-xl font-bold text-brandcolor group-hover:text-white w-[10%] '>
                <BiDollar />
              </div>
              <p className='w-[90%]'>Total purchase: Rs 200</p>
            </div>
            <div className=' group-hover:text-white text-gray-500  text-sm flex items-center'>
              <div className=' group-hover:text-white text-xl font-bold text-brandcolor w-[10%] '>
                <GoDotFill />
              </div>
              <p className='w-[90%] group-hover:text-white'>
                Active from 2:00pm
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default billing;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Billing',
      navDescription: 'Print out the Bill',
    },
  };
};
