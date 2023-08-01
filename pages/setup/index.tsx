import Banner from '@/components/setup/Banner';
import Information from '@/components/setup/Information';
import { GetServerSideProps } from 'next';
import React from 'react';

const setup = () => {
  return (
    <>
      <Banner />
      <Information />
    </>
  );
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
