import { Button, QRCode } from 'antd';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const PrintQr = () => {
  return (
    // #Print from here
    <div className='p-5 text-center  '>
      {/* <img
        src='/img/food.png'
        alt='photo'
        className='absolute w-[250px]  mt-48'
      /> */}
      <div>
        <p>Online Menu</p>
        <p className='text-brandcolor font-extrabold text-5xl'>SCAN IT</p>
        <p className='font-extrabold text-[40px] -my-4'>ORDER</p>
        <p className='font-extrabold text-[30px] -mt-5'>ENJOY IT</p>
        <div className='  '>
          <div className='justify-center relative'>
            <QRCode
              errorLevel='H'
              value='https://ant.design/'
              icon='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            />
          </div>
          <div className='font-extrabold text-2xl'>
            <p>Table Name</p>
          </div>
          <div className='border-t-2 border-brandcolor mt-4'>
            <p className='text-brandcolor font-bold text-3xl mt-2'>
              JOIN OUR WIFI
            </p>
            <div className='text-xl mt-2'>
              <p>SSID:WifiName</p>
              <p>SSID:Password</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <button
          className='bg-brandcolor text-white px-5 py-1 text-right rounded-md'
          
        >
          Print
        </button> */}
      </div>
    </div>
  );
};

export default PrintQr;
