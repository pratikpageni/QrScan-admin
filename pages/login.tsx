import Head from 'next/head';
import React from 'react';

const login = () => {
  return (
    <>
      <Head>
        <title>{'login'}</title>
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
      <div className='flex font-saira bg-[#faf9f5]'>
        <div className=' text-black  w-[40%] text-center p-6 pl-10'>
          <div className='text-5xl font-bold '>Company Logo</div>

          <form className='grid grid-cols-1 gap-y-3 text-left mt-10 '>
            <p className='text-2xl mt-10 text-center font-bold '>Sign In </p>
            <div className='grid grid-cols-1 gap-y-2'>
              <p>Email</p>
              <input className='w-full rounded-2xl px-3 p-1 border-gray-200 border' />
            </div>
            <div className='grid grid-cols-1 gap-y-2'>
              <p>Password</p>
              <input
                type='password'
                className='w-full rounded-2xl px-3 p-1 border-gray-200 border'
              />
            </div>
            <div className='flex justify-between'>
              <div>
                <input type='checkbox' className='' />
                <label>Remember Me</label>
              </div>
              <a href='/' className='text-brandcolor hover:opacity-75'>
                Forget Password?
              </a>
            </div>
            <button className='bg-brandcolor px-2 py-1 rounded-md hover:opacity-75  text-white '>
              Sign In
            </button>
          </form>
        </div>
        <div className='bg-brandcolor bg-opacity-40  h-screen w-screen rounded-bl-full  -ml-28'>
          <img
            className='z-[999] w-[50rem] mt-10 ml-40'
            src='/img/login.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default login;
