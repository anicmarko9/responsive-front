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
        className={`fixed left-0 top-0 z-50 h-full sm:w-[50vw] rounded-r-2xl bg-slate-50 py-2 pl-8 pr-4 shadow-lg sm:py-3 sm:pl-16 sm:pr-16 transition-transform duration-300 ease-in-out  ${
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
            className="block transition-all duration-300 ease-in-out hover:opacity-70 hover:-translate-y-1"
            href="/"
          >
            <img className="w-full max-w-[120px]" src="/logo.png" alt="Logo" />
          </a>
          <TbLayoutSidebarLeftCollapse
            onClick={toggleMenu}
            className={`h-8 w-8 mr-3 mt-2 text-primary rounded-lg p-1 transition-all duration-200 ease-in cursor-pointer hover:opacity-70 hover:-translate-y-1 ${
              isMenuOpen ? '' : 'rotate-180'
            }`}
          />
        </div>
        <hr className="border-1 mt-4 mb-2" />
        <div
          className={`flex w-[70vw] sm:w-[40vw] flex-col space-y-4 py-6 text-xl tracking-wide ${
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

      <div
        className="w-full h-full fixed right-0 top-0 bg-black/40 backdrop-blur-sm"
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default BurgerMenu;
