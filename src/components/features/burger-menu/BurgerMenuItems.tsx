import React from 'react';

import { IBurgerMenuItem } from '@Types/interfaces';

const BurgerMenuItem = ({ href, icon, text }: IBurgerMenuItem): JSX.Element => {
  return (
    <a className="hoverUnderline flex items-center" href={href}>
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default BurgerMenuItem;
