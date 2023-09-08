import { Space, Table } from 'antd';
import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export const MenuTable = ({ data }: { data: any }) => {
  const menucolumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size='middle'>
          <button className=''>
            <AiFillEdit
              className='text-brandcolor hover:text-blue-500'
              size={22}
            />
          </button>
          <button className=''>
            <AiFillDelete
              className='text-red-500 hover:text-red-600'
              size={22}
            />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      className='bg-white rounded-lg'
      columns={menucolumns}
      dataSource={data}
    ></Table>
  );
};
