import Navbar from '@/components/utils/Navbar';
import Sidebar from '@/components/utils/Sidebar';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  NavbarTitle: string;
  NavDescription: string;
}

const MainLayout = ({
  title,
  children,
  NavDescription,
  NavbarTitle,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Scan'}</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' cross-origin />
        <link
          href='https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='font-saira'>
        <div className='flex '>
          <Sidebar />
          <div className='w-full'>
            <Navbar NavDescription={NavDescription} NavbarTitle={NavbarTitle} />
            <div className='px-8 p-5 bg-gray-100 min-h-screen'>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
