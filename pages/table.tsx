import MainLayout from '@/layouts/MainLayout';
import { Input, Select, Space, Table, Tag, Tooltip } from 'antd';
import React, { useState } from 'react';
import { TbLayoutGridAdd } from 'react-icons/tb';
import tableData from '@/constraints/table.data';

const table = () => {
  // const onChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  // const onSearch = (value: string) => {
  //   console.log('search:', value);
  // };
  const [searchtext, setsearchtext] = useState();
  return (
    <MainLayout
      title='Table'
      NavbarTitle='Table'
      NavDescription='Add and Edit Table'
    >
      <>
        <div className='flex justify-between'>
          <Input.Search
            placeholder='Search here'
            className='p-2 mb-5 w-60'
            // onSearch={(value) => {
            //   setsearchtext(value);
            // }}
          />
          <Tooltip>
            <button className='bg-brandcolor text-white flex px-3 py-1 h-8 rounded-md'>
              <h1>Generate</h1>
            </button>
          </Tooltip>
        </div>
        <div className='flex gap-x-5'>
          <div className='w-[70%]'>
            <Table
              className='bg-white rounded-lg'
              columns={tableData.tablecolumns}
              dataSource={tableData.tabledataSource}
            ></Table>
          </div>
          <div className='w-[30%] bg-white p-2 pt-4 rounded-lg  '>
            <h1 className='font-bold text-center border-b border-dashed pb-4'>
              Add Table
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
                <p>Section</p>
                <Select
                  className='w-full'
                  showSearch
                  placeholder='Select a Section'
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
                  <TbLayoutGridAdd />
                  <p>Add</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default table;