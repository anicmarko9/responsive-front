import React from 'react';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';

// Footer Component: Represents the footer section of the web page.
export default function Footer() {
  return (
    <footer className="relative flex h-full flex-col bg-customWhite px-6 pb-8 pt-6 text-base sm:px-16 sm:text-lg xl:px-40 xl:pt-16">
      <div className="mb-4 flex flex-wrap justify-between xl:mb-24 xl:mt-4">
        <section className="w-full space-y-8 pb-8 sm:w-1/2 xl:w-5/12">
          <a className="block hover:cursor-pointer" href="/">
            <img
              className="relative origin-center transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              src="/logo.png"
              alt="Logo"
              width={140}
              height={65}
              loading="lazy"
            />
          </a>
          <p>
            {' '}
            {/* Information about the medical weight loss program */}A Better
            Weigh Medical Weight Loss Center offers a weight loss program
            dedicated to helping you achieve long term weight loss success with
            the use of FDA approved medication.
          </p>
          <address>
            <div className="flex">
              <IoLocationSharp className="contactIcon" />
              <div className="pl-1 pt-[2px] font-bold xl:flex xl:flex-wrap">
                <p>Head Office:</p>
                <p>1931 W 95th Street Chicago IL, 60643</p>
              </div>
            </div>
            <br />
            <div className="flex">
              <FaPhoneAlt className="contactIcon" />
              <div className="pl-1 pt-[2px] font-bold xl:flex xl:space-x-1">
                <p>Phone:</p>
                <p>773-496-4222</p>
              </div>
            </div>
          </address>
        </section>
        <div className="flex flex-wrap xl:space-x-16">
          <section className="mr-8 py-4 xl:px-4">
            <h5 className="mb-4 text-3xl xl:mb-8">About</h5>
            <ul className="relative space-y-4">
              <li>
                <a className="hoverUnderline" href="/about-us">
                  About Us
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/bookings">
                  Book Online
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/locations">
                  Locations
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/stories">
                  Real Patient Stories
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/weight-loss">
                  Weight Loss Programs
                </a>
              </li>
            </ul>
          </section>
          <section className="py-4 xl:px-4">
            <h5 className="mb-4 text-3xl xl:mb-8">More Links</h5>
            <ul className="space-y-4">
              <li>
                <a className="hoverUnderline" href="/franchise-opportunities">
                  Franchise Opportunities
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/career-opportunities">
                  Career Opportunities
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/terms-conditions">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hoverUnderline" href="/return-policy">
                  Return Policy
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <section className="flex flex-wrap items-center justify-between xl:space-y-0">
        <div className="mr-4 flex space-x-6">
          <a href="/callback-ig" className="footerIcon">
            <AiFillInstagram className="socialMediaIcon" />
          </a>
          <a href="/callback-tw" className="footerIcon">
            <BsTwitter className="socialMediaIcon" />
          </a>
          <a href="/callback-fb" className="footerIcon">
            <FaFacebookF className="socialMediaIcon" />
          </a>
        </div>
        <p className="py-4">A Better Weigh Inc&copy;. All rights reserved.</p>
      </section>
    </footer>
  );
}
