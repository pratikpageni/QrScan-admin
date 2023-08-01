import { Input, Select, Table } from 'antd';
import React, { useState } from 'react';

import menuData from '@/constraints/menu.data';
import { BsBuildingAdd } from 'react-icons/bs';
import { GetServerSideProps } from 'next';

const menu = () => {
  // const onChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  // const onSearch = (value: string) => {
  //   console.log('search:', value);
  // };
  const [searchtext, setsearchtext] = useState();
  return (
    <>
      <Input.Search
        placeholder='Search here'
        className='p-2 mb-5 w-60'
        // onSearch={(value) => {
        //   setsearchtext(value);
        // }}
      />
      <div className='flex gap-x-5'>
        <div className='w-[70%]'>
          <Table
            className='bg-white rounded-lg'
            columns={menuData.menucolumns}
            dataSource={menuData.menudataSource}
          ></Table>
        </div>
        <div className='w-[30%] bg-white p-2 pt-4 rounded-lg  '>
          <h1 className='font-bold text-center border-b border-dashed pb-4'>
            Add Menu
          </h1>
          <div className='p-4 grid grid-cols-1 gap-y-4'>
            <div>
              <p>Name</p>
              <input
                type='text'
                placeholder='Name'
                className='px-2 py-1 border w-full'
              />
            </div>
            <div>
              <p>Price</p>
              <input
                type='number'
                placeholder='Price'
                className='px-2 py-1 border w-full'
              />
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
        </div>
      </div>
    </>
  );
};

export default menu;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Menu ',
      navDescription: 'Add and Edit Menu',
    },
  };
};
