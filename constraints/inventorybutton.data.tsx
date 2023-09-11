import { AiFillFolderAdd } from 'react-icons/ai';

interface InventoryButtonInterface {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const InventoryButtons: InventoryButtonInterface[] = [
  {
    name: 'Page1',
    icon: <AiFillFolderAdd size={30} />,
    link: '/',
  },
  {
    name: 'Page2',
    icon: <AiFillFolderAdd size={30} />,
    link: '/',
  },
  {
    name: 'Page3',
    icon: <AiFillFolderAdd size={30} />,
    link: '/',
  },
];

export default InventoryButtons;
