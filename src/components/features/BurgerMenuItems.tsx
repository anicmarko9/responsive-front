import React from 'react';

interface BurgerMenuItemProps {
  href: string;
  icon: React.ReactElement;
  text: string;
}

const BurgerMenuItem: React.FC<BurgerMenuItemProps> = ({
  href,
  icon,
  text,
}) => {
  return (
    <a className="hoverEffect flex items-center" href={href}>
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default BurgerMenuItem;
