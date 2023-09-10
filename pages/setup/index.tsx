import Setup from '@/components/setup/Setup';
import { GetServerSideProps } from 'next';
import React from 'react';

const setup = () => {
  return <Setup />;
};

export default setup;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Setup',
      navDescription: 'Setup Your Account',
    },
  };
};
