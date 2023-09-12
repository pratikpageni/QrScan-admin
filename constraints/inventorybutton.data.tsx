import { AiOutlineStock } from 'react-icons/ai';
import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import { GiPayMoney } from 'react-icons/gi';

interface InventoryButtonInterface {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const InventoryButtons: InventoryButtonInterface[] = [
  {
    name: 'Page1',
    icon: <BiSolidPurchaseTagAlt size={30} />,
    link: '/',
  },
  {
    name: 'Page2',
    icon: <AiOutlineStock size={30} />,
    link: '/',
  },
  {
    name: 'Page3',
    icon: <GiPayMoney size={30} />,
    link: '/',
  },
];

export default InventoryButtons;
