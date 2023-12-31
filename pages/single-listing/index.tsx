import Banner from '@/components/setup/Banner';
import DetailsTab from '@/components/single-listing/DetailsTab';
import HighlightDetails from '@/components/single-listing/HighlightDetails';
import { Tabs } from 'antd';
import React from 'react';

export default function index() {
  return (
    <div>
      <Banner Enable="ShareButton" />
      <div className='mt-5'>
        <HighlightDetails />
      </div>
      <div className='bg-white p-2 px-5 mt-5'>
        <DetailsTab />
      </div>
    </div>
  );
}
