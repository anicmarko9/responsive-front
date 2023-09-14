import React from 'react';
import {
  FaWeight,
  FaUsers,
  FaMapMarkerAlt,
  FaBlog,
  FaShoppingCart,
  FaEnvelope,
  FaCalendarCheck,
} from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';

import { IBurgerMenuItem } from '@Types/interfaces';

const BurgerMenuData: IBurgerMenuItem[] = [
  {
    href: '/about-us',
    icon: <MdAnnouncement size={24} style={{ marginRight: '8px' }} className=" text-primary" />,
    text: 'About Us',
  },
  {
    href: '/bookings',
    icon: <FaCalendarCheck size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Book Online',
  },
  {
    href: '/weight-loss',
    icon: <FaWeight size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Weight Loss Programs',
  },
  {
    href: '/stories',
    icon: <FaUsers size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Real Patient Stories',
  },
  {
    href: '/locations',
    icon: <FaMapMarkerAlt size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Locations',
  },
  {
    href: '/blogs',
    icon: <FaBlog size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Blog',
  },
  {
    href: '/shop',
    icon: <FaShoppingCart size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Shop',
  },
  {
    href: '/subscription',
    icon: <FaEnvelope size={24} style={{ marginRight: '8px' }} className=" text-primary"  />,
    text: 'Subscription',
  },
];

export default BurgerMenuData;
