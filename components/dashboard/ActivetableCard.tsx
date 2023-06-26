import activetable from '@/constraints/activetable.data';
import React from 'react';

const ActivetableCard = () => {
  return (
    <div className='bg-white rounded-3xl p-7 h-96'>
      <div className='flex justify-between font-bold text-xl '>
        <h1 className=' '>Active Tables</h1>
        <h1 className='text-brandcolor'>15</h1>
      </div>
      {activetable.map((data, index) => {
        return (
          <div key={index} className='flex border-b gap-2 mt-4'>
            <h1 className='w-[10%]'>{index + 1}.</h1>
            <div className='w-[30%]'>
              <h1>{data.tableName}</h1>
            </div>
            <div className='w-[30%]'>
              <p>Since {data.time}</p>
            </div>
            <div className='w-[30%]'>
              <p>Total Order: {data.noOfOrder}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivetableCard;
