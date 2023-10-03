import React, { useEffect, useState } from 'react';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';

import BurgerMenuItems from './BurgerMenuItems';
import BurgerMenuData from './BurgerMenuData';
import { IBurgerMenuItem } from '@Types/interfaces';

// BurgerMenu Component: Represents a burger menu for responsive navigation
const BurgerMenu = ({
  toggleMenu,
  isMenuOpen,
  isMenuOpenLate,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isMenuOpenLate: boolean;
}): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };
  // Add and remove resize event listener on component mount and unmount.
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // If the menu is not open on small screens or the window width is greater than 1024, render nothing.
  if (!isMenuOpenLate || windowWidth >= 1024) {
    return <div className="hidden"></div>;
  }

  return (
    // Responsive Burger Menu Container
    <div className="h-full w-full">
      <nav
        className={`fixed left-0 top-0 z-50 h-full w-4/5 rounded-r-2xl bg-customWhite px-4 py-2 shadow-lg transition-transform duration-300 ease-in-out sm:w-1/2 sm:px-8  ${
          // check if menu is open on different resolutions
          isMenuOpen
            ? windowWidth < 640
              ? 'animate-slideInLeft'
              : 'animate-slideInLeftSM'
            : windowWidth < 640
            ? 'animate-slideOutLeft'
            : 'animate-slideOutLeftSM'
        }`}
      >
        <div className="flex h-14 w-full items-center justify-between text-2xl">
          <a
            className="block transition-all duration-300 ease-in-out hover:opacity-70"
            href="/"
          >
            <img className="w-full max-w-[120px]" src="/logo.png" alt="Logo" />
          </a>
          <TbLayoutSidebarLeftCollapse
            onClick={toggleMenu}
            className={`h-8 w-8 cursor-pointer rounded-lg p-1 text-secondary transition-all duration-200 ease-in hover:opacity-70 ${
              isMenuOpen ? '' : 'rotate-180'
            }`}
          />
        </div>
        <hr className="border-1 mb-2 mt-4" />
        <div
          className={`mt-6 flex flex-col space-y-6 text-xl tracking-wide ${
            isMenuOpenLate ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {BurgerMenuData.map(
            ({ href, icon, text }: IBurgerMenuItem, index: number) => (
              <BurgerMenuItems
                key={index}
                href={href}
                icon={icon}
                text={text}
              />
            ),
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className={`fixed left-0 top-0 z-40 h-screen w-screen bg-black opacity-50 transition-opacity duration-300 ease-in-out`}
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default BurgerMenu;
