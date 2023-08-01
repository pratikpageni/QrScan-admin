import { Checkbox, Space } from 'antd';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const menucolumns = [
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
          <AiFillDelete className='text-red-500 hover:text-red-600' size={22} />
        </button>
      </Space>
    ),
  },
];

const menudataSource = [
  {
    name: 'BuffMOMO',
    category: 'MOMO',
    price: '150',
    Image: (
      <img
        src='/img/profile.jpg'
        alt='food'
        className='h-[40px] w-[40px] object-cover'
      />
    ),
  },
  {
    name: 'Chowmien',
    category: 'Chowmien',
    price: '130',
    Image: (
      <img
        src='/img/profile.jpg'
        alt='food'
        className='h-[40px] w-[40px] object-cover'
      />
    ),
  },
  {
    name: 'Ham Burger',
    category: 'Burger',
    price: '110',
    Image: (
      <img
        src='/img/profile.jpg'
        alt='food'
        className='h-[40px] w-[40px] object-cover'
      />
    ),
  },
];

export default { menucolumns, menudataSource };
