import React from "react";

const CalcForm = () => {
  return (
    <div
      className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <form className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0 ">
        <input
          className=" input placeholder:text-darkblue"
          type="text"
          placeholder="enter your hash"
        />
        <select className="select">
          <option value="">TH/S</option>
          <option value="">H/S</option>
          <option value="">KH/S</option>
          <option value="">MH/S</option>
          <option value="">GH/S</option>
        </select>
        {/* btn */}
        <button className=" items-center btn px-8 flex self-start">
          {" "}
          Calculate
        </button>
      </form>
      {/* text section */}
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">
          ESTIMATED 24 HOUR REVENUE:
        </div>
        <div className="text-[32px] font-bold mb-3">
          0.01 88 ETHspan <span className="text-blue">($1500)</span>
        </div>
        <div className="text-gray-500 tracking-[1%] ">
          Revenue will change based on mining difficulty and Ethereum market
          price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
