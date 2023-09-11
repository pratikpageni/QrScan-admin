import Inventory from '@/components/inventory/Inventory';
import { GetServerSideProps } from 'next';
import React from 'react';

const index = () => {
  return <Inventory />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Inventory',
      navDescription: 'Manage your Purchase and Stock',
    },
  };
};
