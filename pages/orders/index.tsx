import Order from '@/components/orders/Order';
import { GetServerSideProps } from 'next';
import React from 'react';

const orders = () => {
  return <Order />;
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
