import { Tabs } from 'antd'
import React from 'react'
import Information from '../setup/Information'
import OrderNow from './HighlightDetails'

export default function DetailsTab() {
  return (
    <div>
      <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'About Us',
        key: '1',
        children:<AboutUs/>
      },
      {
        label: 'Menu',
        key: '2',
        children: 'Tab 2',
      },
      {
        label: 'Amenities',
        key: '3',
        children: 'Tab 3',
      },
      {
        label: 'Map',
        key: '4',
        children: 'Tab 4',
      },
    ]}
  />
    </div>
  )
}

const  AboutUs = ()=>{
return(
  <div className='flex gap-4'>
    <div className="">
    <Information/>
    </div>
  </div>
)
}

