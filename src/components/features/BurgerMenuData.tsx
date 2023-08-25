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

import { IBurgerMenuItem } from '@Types/countdownType';

const BurgerMenuData: IBurgerMenuItem[] = [
  {
    href: '/about-us',
    icon: <MdAnnouncement size={24} style={{ marginRight: '8px' }} />,
    text: 'About Us',
  },
  {
    href: '/bookings',
    icon: <FaCalendarCheck size={24} style={{ marginRight: '8px' }} />,
    text: 'Book Online',
  },
  {
    href: '/weight-loss',
    icon: <FaWeight size={24} style={{ marginRight: '8px' }} />,
    text: 'Weight Loss Programs',
  },
  {
    href: '/stories',
    icon: <FaUsers size={24} style={{ marginRight: '8px' }} />,
    text: 'Real Patient Stories',
  },
  {
    href: '/locations',
    icon: <FaMapMarkerAlt size={24} style={{ marginRight: '8px' }} />,
    text: 'Locations',
  },
  {
    href: '/blogs',
    icon: <FaBlog size={24} style={{ marginRight: '8px' }} />,
    text: 'Blog',
  },
  {
    href: '/shop',
    icon: <FaShoppingCart size={24} style={{ marginRight: '8px' }} />,
    text: 'Shop',
  },
  {
    href: '/subscription',
    icon: <FaEnvelope size={24} style={{ marginRight: '8px' }} />,
    text: 'Subscription',
  },
];

export default BurgerMenuData;
