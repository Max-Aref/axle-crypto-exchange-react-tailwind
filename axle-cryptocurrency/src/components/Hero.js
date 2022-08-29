import React from "react";
import Image from "./../assets/img/hero-img.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row ">
          {/* hero text */}
          <div className="flex-1">
            {/* badge text */}
            <div className="bg-white/10 p-1 mb-6 rounded-full pl-1 max-w-[365px]" data-aos='fade-down' data-aos-delay='400'>
              <div className="flex item-center justify-between text-sm lg:text-base">
                <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
                  Save up to 75%
                </div>
                <div className="m-auto lg:text-sm ">For the black Friday weekend</div>
              </div>
            </div>
            {/* titler */}
            <h1 className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6" data-aos='fade-down' data-aos-delay='500'>
              Fastest & secure platfrom to invest crypto
            </h1>
            <p className="max-w-[440px] leading-relaxed mb-8"
            data-aos='fade-down' data-aos-delay='600'>
              Busy and sell crypto crunccy, trusted by 5M wallets with over $20
              billion in transactions.
            </p>
            <button className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base" data-aos='fade-down' data-aos-delay='700'>
              Try for free
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div className="flex-1">
            <img src={Image} alt=""  data-aos='fade-up' data-aos-delay='600'/>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
