import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GiNotebook } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { SlNotebook } from 'react-icons/sl';
import { GiSofa } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
interface NavbarInterface {
  title: string;
  logo: React.ReactNode;
  link: string;
}

const navbar: NavbarInterface[] = [
  {
    title: 'Dashboard',
    link: '/',
    logo: <BsMenuButtonWideFill size={22} />,
  },
  {
    title: 'Orders',
    link: '/orders',
    logo: <GiNotebook size={23} />,
  },
  {
    title: 'Billing',
    link: '/billing',
    logo: <MdAttachMoney size={24} />,
  },
  {
    title: 'Menu',
    link: '/menu',
    logo: <SlNotebook size={22} />,
  },
  {
    title: 'Table',
    link: '/aew',
    logo: <GiSofa size={23} />,
  },
  {
    title: 'Setup',
    link: '/e',
    logo: <AiFillSetting size={22} />,
  },
];

export default navbar;