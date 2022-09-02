import React from "react";

// import data
import { navData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8 items-center justify-center my-4 ">
        {navData.map((item, index) => {
          return (
            <li
              className="border-b-2 border-transparent hover:border-blue transition-all duration-500"
              key={index}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
