import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import BurgerMenu from '@Components/features/burger-menu/BurgerMenu';

// Header Component: Represents the header section of the web page.
const Header = (): JSX.Element => {
  // State variables to manage window width and menu open states
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuOpenLate, setIsMenuOpenLate] = useState<boolean>(false);

  // isMenuOpen is false when Hamburger Menu closes, and it's responsible for animation.
  // isMenuOpenLate is supposed to wait one second for animation to execute before applying "display: none" to side menu container.

  // Function to handle window resize and update windowWidth state
  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  // Function to toggle menu open state and apply animation timings
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen
      ? setTimeout(function () {
          setIsMenuOpenLate(!isMenuOpenLate);
        }, 1000)
      : setIsMenuOpenLate(!isMenuOpenLate);
  };

  // Effect to add and remove window resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="relative flex w-full h-20 items-center justify-between xl:px-36, bg-[rgba(255,255,255,0.8)]">
      <a className="w-1/2 sm:w-1/5 pl-4 sm:px-6" href="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-[65px] w-[140px] min-w-[140px] relative hover:opacity-90 transition duration-300 ease-in-out hover:scale-110 origin-center"
        />
      </a>
      {windowWidth >= 1024 ? (
        <div className="flex items-center justify-end w-full h-full sm:px-3">
          <nav className="flex">
            <a className="navBtns" href="/about-us">
              About Us
            </a>
            <a className="navBtns" href="/bookings">
              Book Online
            </a>
            <a className="navBtns" href="/weight-loss">
              Programs
            </a>
            <a className="navBtns" href="/stories">
              Stories
            </a>
            <a className="navBtns" href="/locations">
              Locations
            </a>
            <a className="navBtns" href="/blogs">
              Blog
            </a>
            <a className="navBtns" href="/shop">
              Shop
            </a>
            <a className="navBtns" href="/subscription">
              Subscription
            </a>
          </nav>
        </div>
      ) : (
        <div className="flex w-1/2 justify-end pr-4">
          <RxHamburgerMenu
            className="h-8 w-8 cursor-pointer text-primary hover:opacity-60"
            onClick={toggleMenu}
          />
        </div>
      )}
      <BurgerMenu
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isMenuOpenLate={isMenuOpenLate}
      />
    </header>
  );
};

export default Header;
