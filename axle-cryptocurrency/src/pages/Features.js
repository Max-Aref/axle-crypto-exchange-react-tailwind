import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
  FaShieldAlt,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaLock,
  FaGlobeAmericas,
  FaMobileAlt,
} from "react-icons/fa";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: <FaChartLine className='text-5xl' />,
      title: "Real-Time Market Data",
      description:
        "Access live market data, advanced charting tools, and real-time price feeds for informed trading decisions.",
      benefits: [
        "Live price tickers",
        "Advanced TradingView charts",
        "Market depth analysis",
        "Price alerts & notifications",
      ],
    },
    {
      icon: <FaShieldAlt className='text-5xl' />,
      title: "Enterprise Security",
      description:
        "Your assets are protected with military-grade encryption, multi-signature wallets, and cold storage options.",
      benefits: [
        "256-bit encryption",
        "2FA & biometric security",
        "Multi-signature wallets",
        "Insurance coverage",
      ],
    },
    {
      icon: <FaUsers className='text-5xl' />,
      title: "Community Trading",
      description:
        "Trade directly with other users with built-in escrow, dispute resolution, and seller ratings.",
      benefits: [
        "P2P trading platform",
        "Escrow protection",
        "User ratings system",
        "Direct messaging",
      ],
    },
  ];

  const advancedFeatures = [
    {
      icon: <FaRocket className='text-4xl' />,
      title: "Lightning Fast Execution",
      description: "Orders processed in milliseconds with 99.99% uptime SLA",
    },
    {
      icon: <FaLock className='text-4xl' />,
      title: "Cold Storage Integration",
      description: "Secure your assets with offline cold storage wallets",
    },
    {
      icon: <FaGlobeAmericas className='text-4xl' />,
      title: "Global Support",
      description: "24/7 customer support in 15+ languages worldwide",
    },
    {
      icon: <FaMobileAlt className='text-4xl' />,
      title: "Mobile Trading",
      description: "Trade on-the-go with our native iOS and Android apps",
    },
    {
      icon: <FaLightbulb className='text-4xl' />,
      title: "AI-Powered Insights",
      description: "Get ML-driven recommendations based on market analysis",
    },
    {
      icon: <FaChartLine className='text-4xl' />,
      title: "Portfolio Analytics",
      description: "Track performance, diversification, and ROI metrics",
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
              Powerful Features for Modern Traders
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Everything you need to trade cryptocurrencies like a pro. From
              real-time data to enterprise security, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue to-darkblue-secondary'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {mainFeatures.map((feature, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-gradient-to-br from-blue/10 to-violet/10 border border-blue/20 hover:border-blue/50 transition duration-300 hover:bg-white/5'
                data-aos='fade-up'
                data-aos-delay={`${idx * 100}`}
              >
                <div className='text-blue mb-6'>{feature.icon}</div>
                <h3 className='text-2xl font-bold mb-4'>{feature.title}</h3>
                <p className='text-gray mb-6 leading-relaxed'>
                  {feature.description}
                </p>
                <ul className='space-y-2'>
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className='flex items-center gap-3'>
                      <span className='text-blue font-bold'>•</span>
                      <span className='text-gray text-sm'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16' data-aos='fade-down'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
              Advanced Trading Tools
            </h2>
            <p className='text-lg text-gray max-w-2xl mx-auto'>
              Access a comprehensive suite of tools designed to give you every
              advantage in cryptocurrency trading.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {advancedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-gradient-to-br from-blue/5 to-violet/5 border border-white/10 hover:border-blue/30 transition duration-300 group'
                data-aos='fade-up'
                data-aos-delay={`${idx * 50}`}
              >
                <div className='text-blue mb-6 group-hover:scale-110 transition duration-300'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-gray text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Integration Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                Developer-Friendly APIs
              </h2>
              <p className='text-lg text-gray mb-6 leading-relaxed'>
                Build on top of Axle with our comprehensive REST and WebSocket
                APIs. Connect your trading bots, portfolio trackers, and custom
                applications seamlessly.
              </p>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Complete REST API documentation
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Real-time WebSocket connections
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    SDK libraries in 5+ languages
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-blue'>✓</span>
                  <span className='text-gray'>
                    Sandbox environment for testing
                  </span>
                </li>
              </ul>
              <button className='btn gap-x-6 pl-6'>
                View API Docs
                <IoIosArrowDroprightCircle
                  className='text-2xl'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div
              data-aos='fade-left'
              className='bg-gradient-to-br from-blue/20 to-violet/20 rounded-2xl p-12 border border-blue/20'
            >
              <div className='font-mono text-sm text-blue space-y-2'>
                <div>$ curl -X GET 'https://api.axle.com/v1/markets'</div>
                <div className='text-gray'># Get all trading pairs</div>
                <div></div>
                <div>$ npm install axle-sdk</div>
                <div className='text-gray'># Install JavaScript SDK</div>
                <div></div>
                <div className='text-green-400'>
                  {"{"} markets: [...], pairs: [...] {"}"}
                </div>
                <div className='text-gray'># Response example</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16' data-aos='fade-down'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
              Premium Feature Tiers
            </h2>
            <p className='text-lg text-gray max-w-2xl mx-auto'>
              Choose the perfect plan for your trading needs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                name: "Starter",
                price: "Free",
                features: [
                  "Spot trading",
                  "Basic charts",
                  "Email support",
                  "1 API key",
                  "Limited API calls",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "$49/mo",
                features: [
                  "All Starter features",
                  "Advanced orders",
                  "Portfolio analytics",
                  "5 API keys",
                  "Priority support",
                  "Custom alerts",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "All Professional features",
                  "Dedicated account manager",
                  "Unlimited API keys",
                  "White-label options",
                  "Custom integrations",
                  "24/7 support",
                ],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-blue/20 to-violet/20 border-blue/50 scale-105"
                    : "bg-white/5 border-white/10 hover:border-blue/30"
                }`}
                data-aos='fade-up'
                data-aos-delay={`${idx * 100}`}
              >
                {plan.highlighted && (
                  <div className='text-blue font-bold text-sm mb-2'>
                    MOST POPULAR
                  </div>
                )}
                <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                <div className='text-3xl font-bold text-blue mb-6'>
                  {plan.price}
                </div>
                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className='flex items-center gap-3'>
                      <span className='text-blue'>✓</span>
                      <span className='text-gray text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                    plan.highlighted
                      ? "bg-blue text-white hover:bg-blue/90"
                      : "border border-blue text-blue hover:bg-blue/10"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-t border-b border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Start Trading with Confidence
          </h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            All features available. No hidden fees. Trade with the security and
            tools you deserve.
          </p>
          <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base mx-auto'>
            Create Free Account
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

export default FeaturesPage;
