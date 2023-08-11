import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const BurgerMenu = ({
  toggleMenu,
  isMenuOpen,
  isMenuOpenLate,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isMenuOpenLate: boolean;
}): JSX.Element => {
  // Props are passed from "Header" component.
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMenuOpenLate || windowWidth >= 1024)
    return <div className="hidden"></div>;

  return (
    <div
      className={`fixed top-0 z-30 h-full w-full ${
        // check if menu is open on different resolutions
        isMenuOpen
          ? windowWidth < 640
            ? 'animate-slideInRight'
            : 'animate-slideInRightSM'
          : windowWidth < 640
          ? 'scale-0 animate-slideOutRight'
          : 'scale-0 animate-slideOutRightSM'
      }`}
    >
      <nav className="fixed right-0 top-0 z-50 h-full w-full bg-white py-2 pl-8 pr-4 shadow-lg sm:w-3/5 sm:py-3 sm:pl-16 sm:pr-16">
        <div className="flex h-14 items-center justify-between text-2xl">
          <a href="/">A Better Weigh, Inc</a>
          <IoClose
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer rounded-full text-primary transition-all duration-200 ease-in hover:bg-gray-200"
          />
        </div>
        <hr className="border-1" />
        <div className="flex w-full flex-col space-y-4 py-4 text-xl tracking-wide">
          <a className=" hover:font-bold hover:underline" href="/about-us">
            About Us
          </a>
          <a className=" hover:font-bold hover:underline" href="/bookings">
            Book Online
          </a>
          <a className=" hover:font-bold hover:underline" href="/weight-loss">
            Weight Loss Programs
          </a>
          <a className=" hover:font-bold hover:underline" href="/stories">
            Real Patient Stories
          </a>
          <a className=" hover:font-bold hover:underline" href="/locations">
            Locations
          </a>
          <a className=" hover:font-bold hover:underline" href="/blogs">
            Blog
          </a>
          <a className=" hover:font-bold hover:underline" href="/shop">
            Shop
          </a>
          <a className=" hover:font-bold hover:underline" href="/subscription">
            Subscription
          </a>
        </div>
        <div
          className="fixed left-0 top-0 z-40 h-0 w-0 bg-black bg-opacity-30 sm:h-full sm:w-2/5"
          onClick={toggleMenu}
        ></div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
