import RecentOrderCard from '@/components/orders/RecentOrderCard';
import { GetServerSideProps } from 'next';
import React from 'react';

const orders = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {[0, 0, 0, 0, 0, 0].map((data, index) => {
        return <RecentOrderCard />;
      })}
    </div>
  );
};

export default orders;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'order',
      navDescription: 'Welcome to Restro Admin, Pratik !',
    },
  };
};
