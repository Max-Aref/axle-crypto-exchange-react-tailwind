import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import spotTradingImg from "../assets/img/spot-trading.svg";
import miningCalcImg from "../assets/img/mining-calculator.svg";
import walletImg from "../assets/img/secure-wallet.svg";

const Products = () => {
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
              Our Products
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Comprehensive tools and features designed to enhance your
              cryptocurrency trading experience.
            </p>
          </div>
        </div>
      </section>

      {/* Spot Trading */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                Spot Trading
              </h2>
              <p className='text-lg text-gray mb-4 leading-relaxed'>
                Trade cryptocurrencies instantly with our intuitive spot trading
                interface. Buy and sell Bitcoin, Ethereum, and hundreds of
                altcoins with real-time market data and competitive fees.
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Real-time market data and charts
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Advanced order types (Market, Limit, Stop-Loss)
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    High liquidity, fast execution
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Multiple trading pairs available
                  </span>
                </li>
              </ul>
              <button className='btn gap-x-6 pl-6'>
                Start Trading
                <IoIosArrowDroprightCircle
                  className='text-2xl'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div
              data-aos='fade-left'
              className='bg-gradient-to-br from-blue/20 to-violet/20 rounded-2xl border border-blue/20 min-h-96 flex items-center justify-center overflow-hidden relative'
            >
              <img
                src={spotTradingImg}
                alt='Spot Trading Interface'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mining Calculator */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div
              data-aos='fade-left'
              className='bg-gradient-to-br from-blue/20 to-violet/20 rounded-2xl border border-blue/20 min-h-96 flex items-center justify-center overflow-hidden relative order-2 lg:order-1'
            >
              <img
                src={miningCalcImg}
                alt='Mining Calculator'
                className='w-full h-full object-cover'
              />
            </div>
            <div data-aos='fade-right' className='order-1 lg:order-2'>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                Mining Calculator
              </h2>
              <p className='text-lg text-gray mb-4 leading-relaxed'>
                Estimate your mining profits accurately with our advanced
                calculator. Input your hash rate, equipment cost, and
                electricity expenses to get real-time profitability insights.
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Real-time difficulty adjustments
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Multiple mining algorithm support
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    ROI calculations and projections
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>Hardware recommendations</span>
                </li>
              </ul>
              <button className='btn gap-x-6 pl-6'>
                Calculate Now
                <IoIosArrowDroprightCircle
                  className='text-2xl'
                  aria-hidden='true'
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Management */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                Secure Wallet
              </h2>
              <p className='text-lg text-gray mb-4 leading-relaxed'>
                Store and manage your cryptocurrencies securely with our
                advanced wallet system. Multi-signature security, cold storage
                options, and full control over your private keys.
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Multi-signature security (2FA, biometric)
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>Cold storage integration</span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Portfolio tracking & analytics
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Support for 1000+ cryptocurrencies
                  </span>
                </li>
              </ul>
              <button className='btn gap-x-6 pl-6'>
                Create Wallet
                <IoIosArrowDroprightCircle
                  className='text-2xl'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div
              data-aos='fade-left'
              className='bg-gradient-to-br from-blue/20 to-violet/20 rounded-2xl border border-blue/20 min-h-96 flex items-center justify-center overflow-hidden relative'
            >
              <img
                src={walletImg}
                alt='Secure Wallet Management'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            More Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: "API Access",
                description:
                  "Integrate Axle with your applications using our comprehensive REST and WebSocket APIs",
                icon: "⚙️",
              },
              {
                title: "Market Alerts",
                description:
                  "Set custom price alerts and notifications for your favorite cryptocurrencies",
                icon: "🔔",
              },
              {
                title: "Portfolio Analysis",
                description:
                  "Track performance, diversification, and get AI-powered recommendations",
                icon: "📊",
              },
              {
                title: "Staking Rewards",
                description:
                  "Earn passive income by staking eligible cryptocurrencies on Axle",
                icon: "💰",
              },
              {
                title: "P2P Trading",
                description:
                  "Trade directly with other users with escrow protection and dispute resolution",
                icon: "👥",
              },
              {
                title: "Educational Resources",
                description:
                  "Access tutorials, webinars, and courses to improve your trading skills",
                icon: "📚",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-gray'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-t border-b border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Explore All Our Products
          </h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            Create your free account and start using Axle's complete suite of
            crypto trading tools today.
          </p>
          <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base mx-auto'>
            Get Started
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

export default Products;
