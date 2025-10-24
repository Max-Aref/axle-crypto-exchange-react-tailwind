import React from "react";

// react icons
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const Stats = () => {
  const stats = [
    {
      icon: HiChartBar,
      value: "$30B",
      label: "Digital Currency Exchange",
      description: "Total transaction volume processed",
    },
    {
      icon: HiUser,
      value: "5M+",
      label: "Active Users",
      description: "Trusted traders worldwide",
    },
    {
      icon: HiGlobe,
      value: "150+",
      label: "Countries Supported",
      description: "Global reach and accessibility",
    },
  ];

  return (
    <section
      className='pt-24'
      data-aos='fade-up'
      data-aos-delay='1000'
      aria-label='Platform statistics and trust indicators'
    >
      <div className='container mx-auto'>
        {/* items container */}
        <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className='flex items-center gap-x-6 group cursor-pointer transition-transform hover:scale-105'
                role='region'
                aria-label={`${stat.label}: ${stat.value}`}
              >
                {/* item icon */}
                <div className='bg-white/10 group-hover:bg-blue/20 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl transition-colors'>
                  <IconComponent aria-hidden='true' />
                </div>
                {/* item text */}
                <div>
                  <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-gray-400 font-medium'>{stat.label}</div>
                  <div className='text-gray-500 text-sm mt-1'>
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Section */}
        <div className='mt-16 pt-16 border-t border-white/10'>
          <p className='text-center text-gray-400 text-sm mb-8 uppercase tracking-widest'>
            ✓ Security Verified by Industry Leaders
          </p>
          <div className='flex flex-wrap justify-center items-center gap-8 opacity-70'>
            <span className='text-xs font-medium text-gray-400'>
              SOC 2 Certified
            </span>
            <span className='text-xs font-medium text-gray-400'>ISO 27001</span>
            <span className='text-xs font-medium text-gray-400'>
              256-bit SSL
            </span>
            <span className='text-xs font-medium text-gray-400'>
              Cold Storage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
