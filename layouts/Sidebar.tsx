import navbar from '@/constraints/navbar.data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='shadow-md fixed bg-white z-50 px-5 min-h-screen'>
      <div className='px-8 py-8'>
        <h1 className='text-3xl'>Loreamsear</h1>
      </div>
      <div className='mt-6 grid gap-y-3 '>
        {navbar.map((data, index) => {
          return (
            <Link
              href={`${data.link}`}
              className={`flex p-3  ${
                router.asPath == data?.link
                  ? 'bg-brandcolor text-white'
                  : 'text-brandcolor'
              } rounded-2xl gap-x-3 items-center `}
              key={index}
            >
              <div>{data.logo}</div>
              <h1 className='text-base font-semibold'>{data.title}</h1>
            </Link>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
