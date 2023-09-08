import React from 'react';
import { Form as AntForm, Input, message } from 'antd';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { postTable } from '@/service';
const Form = ({ fetch }: { fetch: () => void }) => {
  const [form] = AntForm.useForm();
  const onFinish = (value: any) => {
    postTable(value)
      .then((da) => {
        message.success('Item added successfully');
        fetch();
        form.resetFields();
      })
      .catch(() => {
        alert('error');
      });
  };
  return (
    <AntForm
      form={form}
      onFinish={onFinish}
      className=' bg-white p-2 pt-4 rounded-lg  '
    >
      <h1 className='font-bold text-center border-b border-dashed pb-4'>
        Add Table pratik h
      </h1>
      <div className='p-4 grid grid-cols-1 gap-y-4'>
        <div>
          <p>Name</p>
          <AntForm.Item
            name={'name'}
            rules={[{ required: true, message: 'Please input Table Name!' }]}
          >
            <Input type='text' placeholder='Table Name' />
          </AntForm.Item>
        </div>
        <div>
          <p>Section</p>
          <AntForm.Item name={'section'}>
            <Input type='text' placeholder='Section' />
          </AntForm.Item>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-brandcolor hover:bg-blue-500 text-white font-bold px-4 py-1 flex gap-x-2 items-center rounded-md self-center '
          >
            <TbLayoutGridAdd />
            <p>Add</p>
          </button>
        </div>
      </div>
    </AntForm>
  );
};

export default Form;
