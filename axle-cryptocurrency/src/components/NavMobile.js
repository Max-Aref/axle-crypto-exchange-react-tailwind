import React from "react";

// import data
import { navData } from "../data";

// importing react icons
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setMobileNav }) => {
  return (
    <div className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center">
      {/* closing icon */}
      <div
        className="top-2 left-2 absolute"
        onClick={() => setMobileNav(false)}
      >
        <CgClose className="text-3xl" />
      </div>
      {/*menu items  */}
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => {
          return (
            <li key={item.index}>
              <a href={item.href}> {item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
