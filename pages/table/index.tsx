import { Form, Input, Table, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { TbLayoutGridAdd } from 'react-icons/tb';
import tableData from '@/constraints/table.data';
import { useForm } from 'react-hook-form';
import { GetServerSideProps } from 'next';
import { tableApi } from '@/apis/list.api';
import { asyncGet, asyncPost } from '@/apis/rest.api';

interface TableDataInterface {
  name: string;
  section: string;
}

const table = () => {
  const [table, setTable] = useState([]);
  const onFinish = (value: any) => {
    asyncPost(tableApi.post, value)
      .then(() => {
        alert('sucess');
        getAllTable();
      })
      .catch(() => {
        alert('error');
      });
  };

  const getAllTable = () => {
    asyncGet(tableApi.get).then((data) => {
      setTable(data);
    });
  };
  useEffect(() => {
    getAllTable();
  }, []);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TableDataInterface>();
  const [tableInputData, settableInputData] = useState<TableDataInterface[]>(
    []
  );

  const submit = (value: TableDataInterface) => {
    settableInputData((t) =>
      [...t, value]?.map((m, i) => {
        return { ...m, key: i };
      })
    );
    reset();
  };

  const data: TableDataInterface[] = tableInputData.map(
    ({ name, section }) => ({
      name,
      section,
    })
  );

  // const [searchtext, setsearchtext] = useState();
  return (
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
            dataSource={table}
          ></Table>
        </div>
        <Form
          // onSubmit={handlesubmit(handleSubmit)}
          onFinish={onFinish}
          className='w-[30%] bg-white p-2 pt-4 rounded-lg  '
        >
          <h1 className='font-bold text-center border-b border-dashed pb-4'>
            Add Table
          </h1>
          <div className='p-4 grid grid-cols-1 gap-y-4'>
            <div>
              <p>Name</p>
              <Form.Item name={'name'}>
                <Input type='text' placeholder='Table Name' />
              </Form.Item>
              {/* <input
                {...register('name', {
                  required: { value: true, message: 'name is required' },
                })}
                type='text'
                placeholder='Name'
                className='px-2 py-1 border w-full'
              /> */}
            </div>
            <div>
              <p>Section</p>
              <Form.Item name={'section'}>
                <Input type='text' placeholder='Section' />
              </Form.Item>
              {/* <input
                {...register('section', {
                  required: { value: true, message: 'section is required' },
                })}
                className='px-2 py-1 border w-full'
                // showSearch
                placeholder='Select a Section'
              />
              {errors?.name && errors.name.message} */}
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
        </Form>
      </div>
    </>
  );
};

export default table;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Billing',
      navDescription: 'Print out the Bill',
    },
  };
};
