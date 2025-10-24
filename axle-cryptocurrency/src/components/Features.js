import React from "react";

// import components
import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

const Features = () => {
  return (
    <section
      className='pt-12 lg:pt-24 bg-gradient-to-b from-violet to-violet/80'
      id='features'
      aria-label='Platform features section'
    >
      <div className='container mx-auto'>
        <div className='text-center max-w-[758px] mx-auto mb-24'>
          {/* title */}
          <h2
            className='section-title mx-auto bg-gradient-to-r from-white to-blue bg-clip-text text-transparent'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
          <p
            className='text-gray-300 mt-4'
            data-aos='fade-up'
            data-aos-offset='500'
            data-aos-delay='100'
          >
            Everything you need to succeed in crypto trading
          </p>
        </div>

        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />

        {/* CTA Section */}
        <div
          className='mt-24 p-12 rounded-3xl bg-gradient-to-r from-blue to-violet text-white text-center'
          data-aos='fade-up'
          data-aos-offset='600'
        >
          <h3 className='text-2xl font-bold mb-4'>Ready to get started?</h3>
          <p className='mb-8 text-white/80'>
            Join thousands of traders already using Axle Exchange
          </p>
          <button
            className='btn px-8 bg-white text-violet hover:bg-white/90 font-bold'
            aria-label='Start trading on Axle Exchange'
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
