import React from "react";
import { Link } from "react-router-dom";

const AccountBtns = () => {
  return (
    <div className='flex items-center font-medium'>
      {/* login link */}
      <Link
        to='/login'
        className='hover:text-blue transition focus:outline-none focus:ring-2 focus:ring-blue rounded px-2 py-1'
      >
        Login
      </Link>
      {/* separator */}
      <span className='mx-6 text-white/20 font-thin'>|</span>
      {/* register button */}
      <Link
        to='/register'
        className='btn h-[52px] text-base px-8 flex items-center justify-center'
      >
        Register
      </Link>
    </div>
  );
};

export default AccountBtns;
