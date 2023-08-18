import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import BurgerMenu from '../features/BurgerMenu';

const Header = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuOpenLate, setIsMenuOpenLate] = useState<boolean>(false);

  // isMenuOpen is false when Hamburger Menu closes, and it's responsible for animation.
  // isMenuOpenLate is supposed to wait one second for animation to execute before applying "display: none" to side menu container.

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen
      ? setTimeout(function () {
          setIsMenuOpenLate(!isMenuOpenLate);
        }, 1000)
      : setIsMenuOpenLate(!isMenuOpenLate);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="relative flex h-14 w-full items-center justify-between px-4 pt-2 sm:h-16 sm:px-16 sm:pt-4 xl:px-36">
      <a
        className="hover:opacity-70 transition-all duration-300 ease-in-out hover:-translate-y-1 active:scale-95"
        href="/"
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="mr-16 h-[45px] w-[100px] sm:h-[65px] sm:w-[140px]"
        />
      </a>
      {windowWidth >= 1024 ? (
        <nav className="flex w-full items-center justify-between">
          <a
            className="hover:text-primary hover:text-decoration:none  hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-70 text-white"
            href="/about-us"
          >
            Abouts Us
          </a>
          <a
            className="hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-70 text-white"
            href="/bookings"
          >
            Book Online
          </a>
          <a
            className="hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-70 text-white"
            href="/weight-loss"
          >
            Weight Loss Programs
          </a>
          <a
            className="hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-70 text-white"
            href="/stories"
          >
            Stories
          </a>
          <a
            className="hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-70 text-white"
            href="/locations"
          >
            Locations
          </a>
          <a
            className="hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter text-white bg-opacity-70"
            href="/blogs"
          >
            Blog
          </a>
          <a
            className="hidden 2xl:block hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter text-white bg-opacity-70"
            href="/shop"
          >
            Shop
          </a>
          <a
            className="hidden 2xl:block hover:text-primary hover:bg-white hover:border-primary border-2 border-primary border-opacity-0 transition-all duration-300 ease-in nav-link rounded bg-primary px-4 py-2 shadow-lg backdrop-blur-lg backdrop-filter text-white bg-opacity-70"
            href="/subscription"
          >
            Subscription
          </a>
        </nav>
      ) : (
        <RxHamburgerMenu
          className="h-8 w-8 cursor-pointer text-primary hover:opacity-60"
          onClick={toggleMenu}
        />
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
