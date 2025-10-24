import React, { useState } from "react";
import { currency } from "../data";
import { IoIosArrowForward } from "react-icons/io";

const Trade = () => {
  // item name state
  const [itemName, setItemName] = useState("Bitcoin");

  const handleStartMining = (name) => {
    // Add analytics event
    if (window.gtag) {
      window.gtag("event", "start_mining_click", {
        crypto_type: name,
      });
    }
  };

  return (
    <section
      className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]'
      aria-label='Trading assets and mining options'
    >
      <div className='container mx-auto'>
        <h2
          className='section-title text-center mb-16'
          data-aos='fade-up'
          data-aos-offset='400'
        >
          Trade securely, high-growth crypto assets.
        </h2>

        {/* items */}
        <div
          className='flex flex-col gap-[45px] lg:flex-row'
          data-aos='fade-up'
          data-aos-offset='450'
          role='region'
          aria-label='Available cryptocurrencies for trading'
        >
          {currency.map((item, index) => {
            // destructuring item
            const { image, name, abbr, description } = item;
            const isSelected = name === itemName;

            return (
              <button
                onClick={() => {
                  setItemName(name);
                  handleStartMining(name);
                }}
                key={index}
                className={`${
                  isSelected
                    ? "bg-violet text-white shadow-lg scale-105"
                    : "bg-white"
                } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2`}
                aria-label={`${name} (${abbr}) - ${description}`}
                aria-pressed={isSelected}
              >
                <div className='flex flex-col justify-center items-center'>
                  {/* image of item */}
                  <img
                    className='mb-12'
                    src={image}
                    alt={`${name} logo`}
                    width='80'
                    height='80'
                  />
                  <div className='mb-4 flex items-center gap-x-2'>
                    <div className='text-[32px] font-bold'>{name}</div>
                    <div
                      className={`text-lg font-medium ${
                        isSelected ? "text-blue-100" : "text-gray-400"
                      }`}
                    >
                      {abbr}
                    </div>
                  </div>

                  {/* item description */}
                  <p
                    className={`mb-6 text-center ${
                      isSelected ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {description}
                  </p>

                  {/* btn */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartMining(name);
                    }}
                    className={`${
                      isSelected
                        ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                        : "text-blue border-2 border-gray-300 hover:border-blue"
                    } rounded-full h-16 flex justify-center items-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isSelected
                        ? "focus:ring-offset-violet"
                        : "focus:ring-offset-white"
                    }`}
                    aria-label={`Start mining ${name}`}
                  >
                    {isSelected && (
                      <span className='text-lg font-medium'>Start Mining</span>
                    )}
                    <IoIosArrowForward
                      className={`${isSelected ? "text-2xl" : "text-3xl"}`}
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </button>
            );
          })}
        </div>

        {/* CRO: Urgency Element */}
        <div className='mt-16 text-center'>
          <p className='text-sm text-gray-600'>
            ⚡ <span className='font-semibold'>Limited time:</span> Get 20%
            bonus on your first deposit this week
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trade;
