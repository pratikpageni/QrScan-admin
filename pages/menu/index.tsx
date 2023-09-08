import { Form, Input, Select, Table } from 'antd';
import React, { useState, useEffect } from 'react';

import menuData from '@/constraints/menu.data';
import { BsBuildingAdd } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import { asyncGet, asyncPost } from '@/apis/rest.api';
import { itemApi } from '@/apis/list.api';

const menu = () => {
  const [items, setItems] = useState([]);
  const onFinish = (value: any) => {
    asyncPost(itemApi.post, value)
      .then(() => {
        alert('success');
        getAllItem();
      })
      .catch(() => {
        alert('error');
      });
  };

  const getAllItem = () => {
    asyncGet(itemApi.get).then((data) => {
      setItems(data);
    });
  };
  useEffect(() => {
    getAllItem();
  }, []);
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
            dataSource={items}
          ></Table>
        </div>
        <Form
          onFinish={onFinish}
          className='w-[30%] bg-white p-2 pt-4 rounded-lg  '
        >
          <h1 className='font-bold text-center border-b border-dashed pb-4'>
            Add Menu
          </h1>
          <div className='p-4 grid grid-cols-1 gap-y-4'>
            <div>
              <p>Name</p>

              <Form.Item name={'name'}>
                <Input type='text' />
              </Form.Item>
            </div>
            <div>
              <p>Price</p>
              <Form.Item name={'price'}>
                <Input type='number' />
              </Form.Item>
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
        </Form>
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
