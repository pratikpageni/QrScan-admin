import React from 'react';

interface CardProps {
  Amount: string;
  CardTitle: String;
  icon: React.ReactNode;
}

const Infocard = ({ Amount, CardTitle, icon }: CardProps) => {
  return (
    <div className='flex justify-between bg-gradient-to-r from-brandcolor  to-[#00a9d33a] p-7 rounded-3xl text-white'>
      <div className='text-left'>
        <h1 className='font-bold text-[40px]'>{Amount}</h1>
        <p>{CardTitle}</p>
      </div>
      <div className='h-20 w-20 rounded-full bg-white flex items-center justify-center text-brandcolor'>
        {icon}
      </div>
    </div>
  );
};

export default Infocard;
