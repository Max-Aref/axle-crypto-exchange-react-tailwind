import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Navigation",
      routes: [
        { path: "/", name: "Home", description: "Landing page with overview" },
        {
          path: "/products",
          name: "Products",
          description: "Trading products & services",
        },
        {
          path: "/features",
          name: "Features",
          description: "Detailed features list",
        },
        { path: "/about", name: "About", description: "Company information" },
        { path: "/blog", name: "Blog", description: "News & articles" },
        {
          path: "/contact",
          name: "Contact",
          description: "Get in touch with us",
        },
      ],
    },
    {
      category: "Authentication",
      routes: [
        { path: "/login", name: "Login", description: "User login page" },
        {
          path: "/register",
          name: "Register",
          description: "Create new account",
        },
      ],
    },
    {
      category: "Resources & Docs",
      routes: [
        {
          path: "/docs",
          name: "Documentation",
          description: "API & technical docs",
        },
        {
          path: "/api",
          name: "API Docs",
          description: "Complete API reference",
        },
        {
          path: "/support",
          name: "Support",
          description: "Help & troubleshooting",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      routes: [
        {
          path: "/privacy",
          name: "Privacy Policy",
          description: "Privacy terms",
        },
        {
          path: "/terms",
          name: "Terms & Conditions",
          description: "Usage terms",
        },
        {
          path: "/compliance",
          name: "Compliance",
          description: "Regulatory compliance",
        },
      ],
    },
    {
      category: "Other",
      routes: [
        {
          path: "/sitemap",
          name: "Sitemap",
          description: "Site map (this page)",
        },
        { path: "*", name: "404 Not Found", description: "Error page" },
      ],
    },
  ];

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
              Site Map
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Navigate through all pages and sections of Axle Crypto. Find
              exactly what you're looking for quickly and easily.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {siteStructure.map((section, sidx) => (
              <div
                key={sidx}
                className='p-8 rounded-2xl bg-gradient-to-br from-blue/5 to-violet/5 border border-blue/20 hover:border-blue/50 transition duration-300'
                data-aos='fade-up'
                data-aos-delay={`${sidx * 100}`}
              >
                <h2 className='text-2xl font-bold mb-6 text-blue'>
                  {section.category}
                </h2>
                <div className='space-y-4'>
                  {section.routes.map((route, ridx) => (
                    <div key={ridx} className='group'>
                      {route.path !== "*" && route.path !== "/sitemap" ? (
                        <Link
                          to={route.path}
                          className='flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition duration-300 group'
                        >
                          <IoIosArrowForward className='text-blue mt-1 flex-shrink-0 group-hover:translate-x-1 transition duration-300' />
                          <div className='flex-1'>
                            <h3 className='font-semibold text-white group-hover:text-blue transition duration-300'>
                              {route.name}
                            </h3>
                            <p className='text-sm text-gray mt-1'>
                              {route.description}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div className='flex items-start gap-4 p-4 rounded-lg opacity-75'>
                          <IoIosArrowForward className='text-blue mt-1 flex-shrink-0' />
                          <div className='flex-1'>
                            <h3 className='font-semibold text-white'>
                              {route.name}
                            </h3>
                            <p className='text-sm text-gray mt-1'>
                              {route.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Structure Visualization */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-12 text-center'>
            Site Structure
          </h2>
          <div className='max-w-4xl mx-auto' data-aos='fade-up'>
            <div className='bg-gradient-to-br from-blue/10 to-violet/10 rounded-2xl p-12 border border-blue/20 font-mono text-sm overflow-x-auto'>
              <div className='space-y-2 text-gray'>
                <div>
                  <span className='text-blue'>📍</span> AXLE CRYPTO
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /
                  <span className='text-blue ml-2'>(Home)</span>
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /products
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /features
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /about
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /blog
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /contact
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span>{" "}
                  <span className='text-violet'>🔐 /login</span>
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span>{" "}
                  <span className='text-violet'>🔐 /register</span>
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /docs
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /api
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /support
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /privacy
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /terms
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /compliance
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>├──</span> /sitemap
                </div>
                <div className='ml-6'>
                  <span className='text-blue'>└──</span>{" "}
                  <span className='text-red-400'>* (404)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              { label: "Total Pages", value: "16", icon: "📄" },
              { label: "Main Routes", value: "6", icon: "🚀" },
              { label: "Secure Pages", value: "2", icon: "🔐" },
              { label: "Resources", value: "8", icon: "📚" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-gradient-to-br from-blue/10 to-violet/10 border border-blue/20 text-center hover:border-blue/50 transition duration-300'
                data-aos='fade-up'
                data-aos-delay={`${idx * 100}`}
              >
                <div className='text-4xl mb-4'>{stat.icon}</div>
                <div className='text-3xl font-bold text-blue mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-12'>
            Popular Pages
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12'>
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "Features", path: "/features" },
              { name: "Documentation", path: "/docs" },
              { name: "Contact", path: "/contact" },
              { name: "Support", path: "/support" },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className='py-3 px-6 rounded-lg bg-gradient-to-br from-blue/20 to-violet/20 border border-blue/20 hover:border-blue/50 transition duration-300 font-semibold'
                data-aos='fade-up'
                data-aos-delay={`${idx * 50}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
