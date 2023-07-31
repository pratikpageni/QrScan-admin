import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  address: string;
  contact: number;
  about: string;
  ssid: string;
  password: string;
}

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className='w-full grid gap-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <label htmlFor='Name'>Name*</label>
          <input
            className='w-full border p-2 rounded-md border-gray-600 '
            type='text'
            id='name'
            {...register('name', {
              required: 'Name is required',
              maxLength: {
                value: 30,
                message: 'Name should be less then 30 character',
              },
            })}
          />
          {errors.name && (
            <p className='text-xs text-red-500'>{errors.name.message}</p>
          )}
        </div>
        <div className=''>
          <label htmlFor='address'>Address*</label>
          <input
            className='w-full border p-2 rounded-md border-gray-600 '
            type='text'
            id='address'
            {...register('address', {
              required: 'Address is required',
              maxLength: {
                value: 30,
                message: 'Address should be less then 30 character',
              },
            })}
          />
          {errors.address && (
            <p className='text-xs text-red-500'>{errors.address.message}</p>
          )}
        </div>
        <div className=''>
          <label htmlFor='address'>Contact*</label>
          <input
            className='w-full border p-2 rounded-md border-gray-600 '
            type='number'
            id='contact'
            {...register('contact', {
              required: 'Contact is required',
              maxLength: {
                value: 10,
                message: 'Contact Number should be 10 number',
              },
            })}
          />
          {errors.contact && (
            <p className='text-xs text-red-500'>{errors.contact.message}</p>
          )}
        </div>
        <div className=''>
          <label htmlFor='about'>About Us</label>
          <textarea
            className='w-full h-[6rem] border p-2 rounded-md border-gray-600 '
            id='about'
            {...register('about', {
              maxLength: {
                value: 250,
                message: 'About  should be less than 250  character',
              },
            })}
          />
          {errors.about && (
            <p className='text-xs text-red-500'>{errors.about.message}</p>
          )}
        </div>
        <div>
          <p>Wifi Details</p>
          <div className='flex gap-x-2'>
            <div className=''>
              <label htmlFor='ssid'>SSID*</label>
              <input
                className='w-full border p-2 rounded-md border-gray-600 '
                type='text'
                id='ssid'
                {...register('ssid', {
                  required: 'SSID is required',
                  maxLength: {
                    value: 10,
                    message: 'SSID Number should be 10 number',
                  },
                })}
              />
              {errors.ssid && (
                <p className='text-xs text-red-500'>{errors.ssid.message}</p>
              )}
            </div>
            <div className=''>
              <label htmlFor='password'>Password*</label>
              <input
                className='w-full border p-2 rounded-md border-gray-600 '
                type='text'
                id='password'
                {...register('password', {
                  required: 'password is required',
                  maxLength: {
                    value: 10,
                    message: 'password Number should be 10 number',
                  },
                })}
              />
              {errors.password && (
                <p className='text-xs text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='text-white bg-brandcolor px-3 py-1 rounded-lg font-bold text-lg'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
