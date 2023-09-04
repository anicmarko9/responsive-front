import React from 'react';

import { IBurgerMenuItem } from '@Types/interfaces';

const BurgerMenuItem = ({ href, icon, text }: IBurgerMenuItem): JSX.Element => {
  return (
    <a className="hoverUnderline flex items-center py-2" href={href}>
      <span className="text-secondary">{icon}</span>
      <span className="ml-1">{text}</span>
    </a>
  );
};

export default BurgerMenuItem;
