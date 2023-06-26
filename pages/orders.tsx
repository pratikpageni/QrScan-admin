import RecentOrderCard from '@/components/orders/RecentOrderCard';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const orders = () => {
  return (
    <MainLayout
      NavbarTitle='Orders'
      NavDescription='Recently Added Order Are Here'
    >
      <div className='grid grid-cols-3 gap-5'>
        {[0, 0, 0, 0, 0, 0].map((data, index) => {
          return <RecentOrderCard />;
        })}
      </div>
    </MainLayout>
  );
};

export default orders;
