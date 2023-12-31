import { Modal, Tooltip } from 'antd';
import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdContact } from 'react-icons/io';
import ProfileForm from './ProfileForm';

interface layoutProps{
  Enable:boolean;
}

const Banner = (Enable:layoutProps) => {
  
  return (
    <div>
      <img
        src='/img/banner.jpg'
        alt='banner'
        className='w-full h-[18rem] object-cover z-0'
      />
      <div className='mx-10 '>
        <div className='-mt-24 z-10 flex justify-between'>
          <div className='flex items-center '>
            <img
              src='/img/logo.png'
              alt='logo'
              className='z-10 -mr-6 w-[11rem] h-[11rem] rounded-full bg-white border-white border-4 object-cover shadow-lg  '
            />
            <div className=' bg-white p-2 px-10 shadow-lg rounded-r-[50px]'>
              <p
                className='font-bold text-4xl text-white'
                style={{ WebkitTextStroke: '2px #000' }}
              >
                Burger House And Crunchy Fried{' '}
              </p>
              <div className='text-lg '>
                <p className='flex items-center gap-2 '>
                  <FaLocationDot size={22} /> Lazimpat, Kathmandu
                </p>
              </div>
              <div className='text-lg '>
                <p className='flex items-center gap-2'>
                  <IoMdContact size={22} /> 9876543210
                </p>
              </div>
            </div>
          </div>
          <div>
            {Enable && <EditButton/> };
          </div>
        </div>
      </div>
    </div>
  );
};

const EditButton=()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return(
    <div>
      <Tooltip title='Edit Your Profile'>
            <button
              onClick={showModal}
              className='bg-brandcolor hover:opacity-70 text-white w-12 h-12 rounded-full flex justify-center items-center self-end'
            >
              <FiEdit2 size={25} />
            </button>
          </Tooltip>
              <Modal
            title='Edit Profile'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
          >
            <ProfileForm />
          </Modal>
    </div>
  )
}

export default Banner;
