import Navbar from '@/layouts/Navbar';
import Sidebar from '@/layouts/Sidebar';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  navbarTitle: string;
  navDescription: string;
}

const MainLayout = ({
  title,
  children,
  navDescription,
  navbarTitle,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Scan'}</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='font-saira z-[999999999]'>
        <Sidebar />
        <Navbar NavDescription={navDescription} NavbarTitle={navbarTitle} />
        <div className='pl-[18rem] pt-[7rem] px-8 py-80 bg-gray-100  '>
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
