import { Input, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Form } from './Form';
import { getAllMenu } from '@/service';
import { MenuTable } from './MenuTable';

const Menu = () => {
  const [table, setTable] = useState<any[]>([]);
  const fetch = () => getAllMenu(setTable);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <Input.Search placeholder='Search here' className='p-2 mb-5 w-60' />
      <div className='flex gap-x-5'>
        <div className='w-[70%]'>
          <MenuTable data={table} />
        </div>
        <div className='flex-1'>
          <Form fetch={fetch} />
        </div>
      </div>
    </div>
  );
};

export { Menu };
