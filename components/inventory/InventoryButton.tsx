import Link from 'next/link';
import React from 'react';
import { AiFillFolderAdd } from 'react-icons/ai';

interface layoutProps {
  icon: React.ReactNode;
  name: string;
  link: string;
}

const InventoryButton = ({
  data,
}: {
  data: { icon: React.ReactNode; name: string; link: string };
}) => {
  return (
    <Link href={`${data.link}`} className='flex items-center '>
      <div className='h-20 w-20 z-10 px-6 rounded-full bg-white flex items-center shadow-md justify-center text-brandcolor'>
        {data.icon}
      </div>
      <div className='px-14 py-5 rounded-[2.5rem] bg-brandcolor font-bold w-full shadow-md text-white -ml-10 hover:opacity-50'>
        {data.name}
      </div>
    </Link>
  );
};

export default InventoryButton;
