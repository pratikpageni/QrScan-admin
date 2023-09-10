import React from 'react';
import RecentOrderCard from './RecentOrderCard';

const Order = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {[0, 0, 0, 0, 0, 0].map((data, index) => {
        return <RecentOrderCard />;
      })}
    </div>
  );
};

export default Order;
