import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
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
  // Props are passed from "Header" component.
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  // Handle window resize event.
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
  if (!isMenuOpenLate || windowWidth >= 1024)
    return <div className="hidden"></div>;

  return (
    // Responsive Burger Menu Container
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
          <a
            className="block transition-all duration-300 ease-in-out hover:opacity-70 hover:-translate-y-1"
            href="/"
          >
            <img className="w-full max-w-[120px]" src="/logo.png" alt="Logo" />
          </a>
          <IoClose
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer rounded-full text-primary transition-all duration-200 ease-in hover:bg-gray-200"
          />
        </div>
        <hr className="border-1 mt-4 mb-2" />
        <div className="flex w-full flex-col space-y-4 py-4 text-xl tracking-wide">
          <a className="hoverEffect" href="/about-us">
            About Us
          </a>
          <a className="hoverEffect" href="/bookings">
            Book Online
          </a>
          <a className="hoverEffect" href="/weight-loss">
            Weight Loss Programs
          </a>
          <a className="hoverEffect" href="/stories">
            Real Patient Stories
          </a>
          <a className="hoverEffect" href="/locations">
            Locations
          </a>
          <a className="hoverEffect" href="/blogs">
            Blog
          </a>
          <a className="hoverEffect" href="/shop">
            Shop
          </a>
          <a className="hoverEffect" href="/subscription">
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
