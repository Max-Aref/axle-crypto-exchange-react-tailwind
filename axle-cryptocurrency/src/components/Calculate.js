import React from "react";
import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
      <div className='container mx-auto px-4'>
        {/* text */}
        <div className='text-center mb-16'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-6'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            Check How Much You Can Earn
          </h2>
          <p
            className='text-lg text-gray mb-8 max-w-[622px] mx-auto leading-relaxed'
            data-aos='fade-up'
            data-aos-offset='450'
          >
            Use our advanced calculator to estimate your mining or trading
            profits. Enter your hash rate and watch as we calculate your
            potential earnings.
          </p>
        </div>
        {/* form */}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
