import React from "react";
import { Link } from "react-router-dom";
import { SiBlockchaindotcom } from "react-icons/si";
import { CgMenuRight } from "react-icons/cg";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

const Header = ({ setMobileNav }) => {
  return (
    <header
      className='bg-gradient-to-b from-darkblue-secondary to-darkblue border-b border-white/10 py-[30px] lg:pt-[60px] sticky top-0 z-40'
      data-aos='fade-down'
      data-aos-delay='900'
      data-aos-duration='2000'
      role='banner'
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo - matching Footer styling */}
        <Link
          to='/'
          className='flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue rounded px-2 py-1 hover:opacity-80 transition duration-200'
          aria-label='Axle Crypto Home'
        >
          <p className='font-primary text-lg font-bold bg-gradient-to-r from-blue to-violet bg-clip-text text-transparent'>
            AXLE
          </p>
          <SiBlockchaindotcom
            className='text-3xl text-blue hover:text-violet transition duration-200'
            aria-hidden='true'
          />
        </Link>

        {/* nav & btns */}
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav />
          <AccountBtns />
        </div>
        {/* toggle btn */}
        <button
          onClick={() => setMobileNav(true)}
          className='lg:hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue rounded p-1 hover:text-blue transition duration-200'
          aria-label='Open navigation menu'
          aria-controls='mobile-nav'
        >
          <CgMenuRight className='text-2xl' aria-hidden='true' />
        </button>
      </div>
    </header>
  );
};

export default Header;
