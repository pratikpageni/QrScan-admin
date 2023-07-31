import PrintQr from '@/components/table/PrintQr';
import { Modal, Space, Tooltip } from 'antd';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FcPrint } from 'react-icons/fc';
import ReactToPrint from 'react-to-print';

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
          <ModalButton />
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

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={showModal}>
        <FcPrint size={22} />
      </button>
      <Modal
        open={isModalOpen}
        onCancel={closeModel}
        footer={[
          <>
            <PrintButton />
          </>,
        ]}
        // footer={[
        //  <>
        //  </>

        // ]}
      >
        <PrintQr />
      </Modal>
    </div>
  );
};

const PrintButton = () => {
  return (
    <div>
      <button
        onClick={() => window.print()}
        className='text-white bg-brandcolor font-bold'
      >
        Print
      </button>
    </div>
  );
};
