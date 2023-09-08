import { Input, Table as AntTable, Tooltip, message } from 'antd';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import { getAllTable } from '@/service';
import Table from './Table';

export const ClientTable = () => {
  const [table, setTable] = useState<any[]>([]);
  const fetch = () => getAllTable().then((d) => setTable(d));
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className='flex justify-between'>
        <Input.Search placeholder='Search here' className='p-2 mb-5 w-60' />
        <Tooltip>
          <button className='bg-brandcolor text-white flex px-3 py-1 h-8 rounded-md'>
            <h1>Generate</h1>
          </button>
        </Tooltip>
      </div>
      <div className='flex gap-x-5'>
        <div className='w-[70%]'>
          <Table data={table} />
        </div>
        <div className='flex-1'>
          <Form fetch={fetch} />
        </div>
      </div>
    </>
  );
};
