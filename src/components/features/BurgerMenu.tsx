import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
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
          <a className="hoverEffect flex items-center" href="/about-us">
            <MdAnnouncement size={24} style={{ marginRight: '8px' }} />
            <span>About Us</span>
          </a>
          <a className="hoverEffect flex items-center" href="/bookings">
            <FaCalendarCheck size={24} style={{ marginRight: '8px' }} />
            <span>Book Online</span>
          </a>
          <a className="hoverEffect flex items-center" href="/weight-loss">
            <FaWeight size={24} style={{ marginRight: '8px' }} />
            <span>Weight Loss Programs</span>
          </a>
          <a className="hoverEffect flex items-center" href="/stories">
            <FaUsers size={24} style={{ marginRight: '8px' }} />
            <span>Real Patient Stories</span>
          </a>
          <a className="hoverEffect flex items-center" href="/locations">
            <FaMapMarkerAlt size={24} style={{ marginRight: '8px' }} />
            <span>Locations</span>
          </a>
          <a className="hoverEffect flex items-center" href="/blogs">
            <FaBlog size={24} style={{ marginRight: '8px' }} />
            <span>Blog</span>
          </a>
          <a className="hoverEffect flex items-center" href="/shop">
            <FaShoppingCart size={24} style={{ marginRight: '8px' }} />
            <span>Shop</span>
          </a>
          <a className="hoverEffect flex items-center" href="/subscription">
            <FaEnvelope size={24} style={{ marginRight: '8px' }} />
            <span>Subscription</span>
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
