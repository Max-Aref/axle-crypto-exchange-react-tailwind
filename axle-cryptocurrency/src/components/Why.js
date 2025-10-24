import React, { useState } from "react";

// importing images
import Image from "../assets/img/why-img.png";

const Why = () => {
  const [isHovering, setIsHovering] = useState(false);

  const features = [
    { icon: "🔒", title: "Secure", desc: "Industry-leading security" },
    { icon: "⚡", title: "Fast", desc: "Instant transactions" },
    { icon: "💰", title: "Low Fees", desc: "Competitive pricing" },
  ];

  return (
    <section className='section' id='why' aria-label='Why choose Axle Exchange'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          {/*image  */}
          <div
            className='order-2 lg:order-1 transition-transform duration-500'
            data-aos='fade-right'
            data-aos-offset='400'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={Image}
              alt='Axle Exchange platform features showcase'
              className={`${
                isHovering ? "scale-105" : "scale-100"
              } transition-transform duration-300`}
            />
          </div>
          {/* text */}
          <div
            className='order-1 lg:order-2 max-w-[480px]'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='section-title'>Why choose Axle Exchange?</h2>
            <p className='section-subtitle'>
              Experience the next-generation cryptocurrency platform. No
              financial borders, hidden fees, or fake reviews.
            </p>

            {/* Features List with Icons */}
            <div className='space-y-4 mb-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group'
                  role='listitem'
                >
                  <span className='text-2xl group-hover:scale-110 transition-transform'>
                    {feature.icon}
                  </span>
                  <div>
                    <p className='font-semibold text-white'>{feature.title}</p>
                    <p className='text-sm text-gray-400'>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className='btn px-6 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-darkblue'
              onClick={() => {
                document
                  .getElementById("newsletter")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label='Learn more about Axle Exchange features'
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
