import React from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { CgMenuRight } from "react-icons/cg";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

const Header = ({ setMobileNav }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="/" className="flex">
          <p className="pr-[10px] font-primary">AXLE</p>
          <SiBlockchaindotcom className="text-2xl" />
        </a>

        {/* nav & btns */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        {/* toggle btn */}
        <div
          onClick={() => setMobileNav(true)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
