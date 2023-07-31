import Infocard from '@/components/dashboard/Infocard';
import MainLayout from '@/layouts/MainLayout';
import { IoFastFood } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';
import Link from 'next/link';
import ActivetableCard from '@/components/dashboard/ActivetableCard';
import { GetServerSideProps } from 'next';

export default function Home() {
  return <Dashboard />;
}

const Dashboard = () => {
  return (
    <div className=''>
      <div>
        <div className='grid grid-cols-2 gap-x-10'>
          <Infocard
            Amount='324'
            CardTitle='Total Order'
            icon={<IoFastFood size={47} />}
          />
          <Infocard
            Amount='Rs 20,000'
            CardTitle='Today Revenue'
            icon={<GiReceiveMoney size={50} />}
          />
        </div>
        <Link
          href={'/'}
          className='text-brandcolor text-right flex justify-end mt-1 hover:underline'
        >
          View More
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-10 '>
        <ActivetableCard />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      navbarTitle: 'Dashboard',
      navDescription: 'Welcome to Restro Admin, Pratik !',
    },
  };
};
