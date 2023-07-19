import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const AddItemCard = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleDecrement = () => {
    // Prevent decrementing below zero
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const cardBgColor = number > 0 ? 'bg-brandcolor text-white' : 'bg-white ';

  return (
    <div className={` ${cardBgColor} rounded-md p-2 border`}>
      {/* <img
        src='/img/momo.jpg'
        alt='photo'
        className='h-[6rem] object-cover rounded-md w-full'
      /> */}
      <div className=' text-sm font-bold text-white rounded-md bg-[url("/img/momo.jpg")] h-[6rem] top-0 text-center '>
        <button
          onClick={handleIncrement}
          className='bg-black opacity-60 w-full h-full items-center grid rounded-md  '
        >
          <div>
            <p>Veg-Momo</p>
            <p className='font-normal'>Rs150</p>
          </div>
        </button>
      </div>
      <div className=' flex justify-between mt-1 items-center -mb-1 px-4'>
        <button className='' onClick={handleDecrement} disabled={number === 0}>
          <AiOutlineMinusCircle size={22} />
        </button>

        <p className='font-bold'>{number}</p>
        <button onClick={handleIncrement}>
          <AiOutlinePlusCircle size={22} />
        </button>
      </div>
    </div>
  );
};

export default AddItemCard;
