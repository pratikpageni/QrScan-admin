import navbar from '@/constraints/navbar.data';
import Link from 'next/link';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='shadow-md px-5 min-h-screen'>
      <div className='px-8 py-8'>
        <h1 className='text-3xl'>Loreamsear</h1>
      </div>
      <div className='mt-6 grid gap-y-3 '>
        {navbar.map((data, index) => {
          return (
            <Link
              href={`${data.link}`}
              className={`flex p-3 px-5 bg-brandcolor rounded-2xl gap-x-3 items-center text-white`}
              key={index}
            >
              <div>{data.logo}</div>
              <h1 className='text-base font-semibold'>{data.title}</h1>
            </Link>
          );
        })}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Sidebar;
