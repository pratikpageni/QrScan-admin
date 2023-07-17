import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const AddItemCard = () => {
  return (
    <div className='bg-brandcolor rounded-md p-2 border'>
      <img
        src='/img/momo.jpg'
        alt='photo'
        className='h-[6rem] object-cover rounded-md w-full'
      />
      <div className='bg-black opacity-60 text-sm font-bold text-white rounded-b-md -mt-5 text-center '>
        <p>Veg-Momo</p>
      </div>
      <div className=' flex justify-between mt-1 items-center text-white -mb-1 px-4'>
        <button className=''>
          <AiOutlinePlusCircle size={22} />
        </button>

        <p className='font-bold'>1</p>
        <button>
          <AiOutlineMinusCircle size={22} />
        </button>
      </div>
    </div>
  );
};

export default AddItemCard;
