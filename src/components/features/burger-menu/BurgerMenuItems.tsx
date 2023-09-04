import React from 'react';

import { IBurgerMenuItem } from '@Types/interfaces';

const BurgerMenuItem = ({ href, icon, text }: IBurgerMenuItem): JSX.Element => {
  return (
    <a className="hoverUnderline flex items-center" href={href}>
      {icon}
      <span className='ml-1'>{text}</span>
    </a>
  );
};

export default BurgerMenuItem;
