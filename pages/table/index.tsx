import { ClientTable } from '@/components';
import { GetServerSideProps } from 'next';
import React from 'react';

const index = () => {
  return <ClientTable />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Billing',
      navDescription: 'Print out the Bill',
    },
  };
};
