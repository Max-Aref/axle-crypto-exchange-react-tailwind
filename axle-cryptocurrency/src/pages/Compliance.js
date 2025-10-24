import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Compliance = () => {
  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h1
              className='text-4xl lg:text-6xl font-bold mb-6 leading-tight'
              data-aos='fade-down'
            >
              Compliance & Regulations
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Axle is committed to maintaining the highest standards of
              regulatory compliance and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Status */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Our Regulatory Framework
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: "FinCEN Registration",
                status: "Registered",
                emoji: "🏛️",
                details: "Registered as a Money Services Business (MSB)",
              },
              {
                title: "KYC/AML Compliance",
                status: "Compliant",
                emoji: "✅",
                details:
                  "Full Know Your Customer and Anti-Money Laundering protocols",
              },
              {
                title: "GDPR Compliant",
                status: "Compliant",
                emoji: "🔒",
                details:
                  "Full compliance with European data protection regulations",
              },
              {
                title: "SOC 2 Type II",
                status: "Certified",
                emoji: "📋",
                details: "Independently audited and certified",
              },
              {
                title: "ISO 27001",
                status: "Certified",
                emoji: "🛡️",
                details: "Information security management system certified",
              },
              {
                title: "Regular Audits",
                status: "Ongoing",
                emoji: "🔍",
                details: "Third-party security audits performed quarterly",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <div className='text-4xl mb-4'>{item.emoji}</div>
                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                <p className='text-sm text-blue font-medium mb-3'>
                  {item.status}
                </p>
                <p className='text-gray text-sm'>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Supported Jurisdictions
          </h2>
          <div className='max-w-3xl mx-auto'>
            <p
              className='text-gray text-lg text-center mb-12'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Axle operates globally but restricts service in certain
              jurisdictions to maintain compliance.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Supported */}
              <div
                className='p-8 rounded-2xl bg-green-500/10 border border-green-500/30'
                data-aos='fade-right'
              >
                <h3 className='text-xl font-bold mb-6 text-green-400'>
                  ✓ Supported Regions
                </h3>
                <ul className='space-y-3 text-gray'>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    United States (most states)
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    European Union
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    United Kingdom
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    Canada & Australia
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    Japan & Singapore
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    100+ other countries
                  </li>
                </ul>
              </div>

              {/* Restricted */}
              <div
                className='p-8 rounded-2xl bg-red-500/10 border border-red-500/30'
                data-aos='fade-left'
              >
                <h3 className='text-xl font-bold mb-6 text-red-400'>
                  ✗ Restricted Regions
                </h3>
                <ul className='space-y-3 text-gray'>
                  <li className='flex items-center gap-2'>
                    <span className='text-red-400'>•</span>
                    United States - NY (BitLicense)
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-red-400'>•</span>
                    China & Iran
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-red-400'>•</span>
                    North Korea & Syria
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-red-400'>•</span>
                    Belarus & Cuba
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-red-400'>•</span>
                    Crimea region
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-red-400'>•</span>
                    Sanctions-listed entities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Our Policies
          </h2>

          <div className='max-w-3xl mx-auto space-y-6'>
            {[
              {
                title: "KYC/AML Policy",
                description:
                  "We implement comprehensive Know Your Customer and Anti-Money Laundering procedures to prevent fraud and illegal activities.",
                icon: "🔐",
              },
              {
                title: "Data Privacy Policy",
                description:
                  "Your data is protected under GDPR and our strict privacy standards. We never sell user data to third parties.",
                icon: "🛡️",
              },
              {
                title: "Terms of Service",
                description:
                  "Clear terms governing the use of Axle services, user responsibilities, and our commitments to you.",
                icon: "📜",
              },
              {
                title: "Risk Disclosure",
                description:
                  "Complete disclosure of cryptocurrency trading risks and market volatility. Trading involves significant risk.",
                icon: "⚠️",
              },
              {
                title: "AML/CFT Program",
                description:
                  "Anti-Money Laundering and Combating the Financing of Terrorism program to detect and report suspicious activities.",
                icon: "🚨",
              },
              {
                title: "Sanctions Compliance",
                description:
                  "Strict adherence to international sanctions lists including OFAC, UN, and EU sanctions designations.",
                icon: "✋",
              },
            ].map((policy, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <div className='flex items-start gap-4'>
                  <span className='text-3xl'>{policy.icon}</span>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-2'>{policy.title}</h3>
                    <p className='text-gray leading-relaxed'>
                      {policy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Compliance */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-t border-b border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Compliance Questions?
          </h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            Our compliance team is available to answer any questions about our
            regulatory status and policies.
          </p>
          <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base mx-auto'>
            Contact Compliance
            <IoIosArrowDroprightCircle
              className='text-2xl lg:text-3xl'
              aria-hidden='true'
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
