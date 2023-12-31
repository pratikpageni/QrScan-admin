import Banner from '@/components/setup/Banner'
import DetailsTab from '@/components/single-listing/detailsTab'
import { Tabs } from 'antd'
import React from 'react'

export default function index() {
  return (
    <div>
     <Banner Enable={false}/>

     <DetailsTab/>
    </div>
  )
}

