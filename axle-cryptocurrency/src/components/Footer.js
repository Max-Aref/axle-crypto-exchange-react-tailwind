import React from "react";
import { Link } from "react-router-dom";

import VisaImg from "../assets/img/visa.png";
import MastercardImg from "../assets/img/mastercard.png";
import BitcoinImg from "../assets/img/bitcoin.png";

// importing react-icons
import { SiBlockchaindotcom } from "react-icons/si";

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='lg:pt-24 pt-0 bg-gradient-to-t from-darkblue-secondary to-darkblue border-t border-white/10'
      data-aos='fade-up'
      data-aos-offset='400'
      role='contentinfo'
    >
      <div className='container mx-auto lg:mb-24'>
        <div className='flex flex-col gap-12 lg:flex-row'>
          {/* logo */}
          <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[258px]'>
            <Link
              to='/'
              className='flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue rounded px-2 py-1'
              aria-label='Axle Crypto Home'
            >
              <p className='pr-[10px] font-primary text-lg font-bold bg-gradient-to-r from-blue to-violet bg-clip-text text-transparent'>
                AXLE
              </p>
              <SiBlockchaindotcom
                className='text-3xl text-blue'
                aria-hidden='true'
              />
            </Link>
          </div>

          {/* links section */}
          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
            {/* links group 1 */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Quick Links</div>
              <ul className='space-y-4 text-gray-400'>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/products'
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/about'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/features'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/contact'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/sitemap'
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* links group 2 */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Legal</div>
              <ul className='space-y-4 text-gray-400'>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/privacy'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/terms'
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    href='#cookies'
                  >
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/compliance'
                  >
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community Links */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Community</div>
              <ul className='space-y-4 text-gray-400'>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/blog'
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/docs'
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/api'
                  >
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:text-blue transition duration-200 focus:outline-none focus:underline'
                    to='/support'
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* payment */}
          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
              <h3 className='h3 font-medium text-center mb-10 lg:text-left'>
                We accept all payment systems.
              </h3>
              <div className='flex justify-center items-center gap-6'>
                <img src={VisaImg} alt='Visa accepted' width='50' height='30' />
                <img
                  src={MastercardImg}
                  alt='Mastercard accepted'
                  width='50'
                  height='30'
                />
                <img
                  src={BitcoinImg}
                  alt='Bitcoin accepted'
                  width='50'
                  height='30'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copy rights and social */}
      <div className='py-12 border-t border-white/10'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
          {/* copy rights text */}
          <div className='text-sm text-gray-400'>
            &copy; {currentYear} Axle Cryptocurrency. All rights reserved.
          </div>

          {/* social icons */}
          <div className='flex flex-row text-2xl gap-x-8'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue rounded-full p-2'
              aria-label='Follow us on Instagram'
            >
              <IoLogoInstagram aria-hidden='true' />
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue rounded-full p-2'
              aria-label='Subscribe on YouTube'
            >
              <IoLogoYoutube aria-hidden='true' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue rounded-full p-2'
              aria-label='Connect on LinkedIn'
            >
              <IoLogoLinkedin aria-hidden='true' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue rounded-full p-2'
              aria-label='Follow us on Twitter'
            >
              <IoLogoTwitter aria-hidden='true' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
