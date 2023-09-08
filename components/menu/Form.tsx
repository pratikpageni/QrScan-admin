import { postmenu } from '@/service';
import { Form as AntForm, Input, Select, message } from 'antd';
import React from 'react';
import { BsBuildingAdd } from 'react-icons/bs';

export const Form = ({ fetch }: { fetch: () => void }) => {
  const [form] = AntForm.useForm();
  const onFinish = (value: any) => {
    postmenu(value)
      .then((data) => {
        message.success('Item added successfully');
        fetch();
        // form.resetFields();
      })
      .catch(() => {
        alert('error');
      });
  };
  return (
    <div>
      <AntForm
        form={form}
        onFinish={onFinish}
        className=' bg-white p-2 pt-4 rounded-lg  '
      >
        <h1 className='font-bold text-center border-b border-dashed pb-4'>
          Add Menu
        </h1>
        <div className='p-4 grid grid-cols-1 gap-y-4'>
          <div>
            <p>Name</p>

            <AntForm.Item
              name={'name'}
              rules={[{ required: true, message: 'Please input Item Name' }]}
            >
              <Input type='text' />
            </AntForm.Item>
          </div>
          <div>
            <p>Price</p>
            <AntForm.Item
              name={'price'}
              rules={[{ required: true, message: 'Please input Price' }]}
            >
              <Input type='number' />
            </AntForm.Item>
          </div>
          <div>
            <p>Category</p>
            <Select
              className='w-full'
              showSearch
              placeholder='Select a Category'
              optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: 'MoMo',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-brandcolor hover:bg-blue-500 text-white font-bold px-4 py-1 flex gap-x-2 items-center rounded-md self-center '
            >
              <BsBuildingAdd />
              <p>Add</p>
            </button>
          </div>
        </div>
      </AntForm>
    </div>
  );
};
