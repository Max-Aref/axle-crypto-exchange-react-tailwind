import React from "react";

import Logo from "../assets/img/logo.svg";
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
  return (
    <footer className="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[258px]">
            <a href="/" className="flex flex-row">
              <p className="pr-[10px] font-primary text-lg font-bold">AXLE</p>
              <SiBlockchaindotcom className="text-3xl" />
            </a>
          </div>
          {/* links section */}
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            {/* links group 1 */}
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            {/* links group 2 */}

            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Resources Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Whitepaper download
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Blockchain exploration{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Smart contracts
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Our API
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* payment */}
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">
                We accept all the following payment systems.
              </h3>
              <div className="flex justify-center items-center gap-6">
                <img src={VisaImg} alt="" />
                <img src={MastercardImg} alt="" />
                <img src={BitcoinImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy rights and social */}
      <div className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* copy rights text */}
          <div>&copy; 2022 AXLEe. All rights reserved.</div>
          {/* social icons */}
          <div className="flex flex-row text-2xl gap-x-8">
            <a href="#" className="hover:text-blue transation">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-blue transation">
              <IoLogoYoutube />
            </a>
            <a href="#" className="hover:text-blue transation">
              <IoLogoLinkedin />
            </a>
            <a href="#" className="hover:text-blue transation">
              <IoLogoTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
