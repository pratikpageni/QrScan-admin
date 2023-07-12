import { Space, Tooltip } from 'antd';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FcPrint } from 'react-icons/fc';

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
          <AiFillDelete className='text-red-500 hover:text-red-600' size={22} />
        </button>
        <Tooltip placement='top' title='Print QR'>
          <button>
            <FcPrint size={22} />
          </button>
        </Tooltip>
      </Space>
    ),
  },
];

const tabledataSource = [
  {
    name: 'Table 1',
    section: 'Garden',
  },
];

export default { tabledataSource, tablecolumns };
