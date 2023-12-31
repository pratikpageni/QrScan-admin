import { Tabs } from 'antd'
import React from 'react'
import Information from '../setup/Information'

export default function DetailsTab() {
  return (
    <div>
      <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'About Us',
        key: '1',
        children:<Information/>
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

const  Menu = ()=>{
return(
  <div>
    
  </div>
)
}

