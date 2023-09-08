import React from 'react';
import { Table as AntTable, Space, Tooltip } from 'antd';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
const Table = ({ data }: { data?: any[] }) => {
  const tablecolumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // filteredValue: [searchtext],
      // onFilter: (value, record) => {
      //   return String(record.name).toLowerCase().includes(value.toLowerCase());
      // },
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
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
          <Tooltip placement='top' title='Print QR'>
            {/* <ModalButton /> */}
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <AntTable
      className='bg-white rounded-lg'
      columns={tablecolumns}
      dataSource={data || []}
    />
  );
};

export default Table;
