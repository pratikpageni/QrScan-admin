import React from 'react'
import { FaStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function 
HighlightDetails() {
  return (
    <div className='bg-white p-2 text-center rounded-md'>
      <div className='flex justify-between'>
        <div><p>Minimum Order:Rs 0.00</p></div>
        <div className='flex items-center gap-1'><FaStar color='yellow' /><p>3.9 <span className='text-gray-400'>1221 rating</span></p></div>
        <div className='flex items-center gap-1'><TbTruckDelivery color='green' size={22} /><p>Free Delivery</p><span><p className='text-xs'>(upto 2km)</p></span></div>
      </div>
    </div>
  )
}
