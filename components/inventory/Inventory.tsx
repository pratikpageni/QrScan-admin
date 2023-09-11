import React from 'react';
import InventoryButton from './InventoryButton';
import InventoryButtons from '@/constraints/inventorybutton.data';

const Inventory = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {InventoryButtons.map((data, index) => {
        return <InventoryButton data={data} key={index} />;
      })}
    </div>
  );
};

export default Inventory;
