import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Documentation = () => {
  const [selectedSection, setSelectedSection] = useState("getting-started");

  const sections = {
    "getting-started": {
      title: "Getting Started",
      icon: "🚀",
      content: [
        {
          heading: "Create an Account",
          text: "Visit axle-crypto.com and click 'Sign Up'. Enter your email, create a strong password, and verify your email address. You'll be able to trade immediately with basic verification.",
        },
        {
          heading: "Complete Verification",
          text: "For higher withdrawal limits, complete enhanced verification by providing ID and proof of address. This takes 24-48 hours and increases your security.",
        },
        {
          heading: "Fund Your Account",
          text: "Navigate to the Wallet section and choose your preferred deposit method. We support bank transfers, credit cards, and cryptocurrency deposits.",
        },
      ],
    },
    trading: {
      title: "Trading Guide",
      icon: "📈",
      content: [
        {
          heading: "Place a Market Order",
          text: "Select the trading pair, enter the amount, and click 'Buy' or 'Sell'. Market orders execute immediately at the current market price.",
        },
        {
          heading: "Place a Limit Order",
          text: "Specify your desired price and quantity. The order executes when the market reaches your price. Set stop-loss and take-profit orders for risk management.",
        },
        {
          heading: "Advanced Trading",
          text: "Use our advanced charting tools, technical indicators, and order types. Enable margin trading for experienced traders (requires additional verification).",
        },
      ],
    },
    security: {
      title: "Security",
      icon: "🔒",
      content: [
        {
          heading: "Two-Factor Authentication",
          text: "Enable 2FA in your account settings. We support authenticator apps (Google Authenticator, Authy) and SMS verification. 2FA is strongly recommended.",
        },
        {
          heading: "API Security",
          text: "Create API keys with specific permissions. Use IP whitelisting to restrict API access. Never share your secret key and rotate keys regularly.",
        },
        {
          heading: "Best Practices",
          text: "Use strong, unique passwords. Keep your recovery seed in a safe place. Enable email notifications for account activities. Never click links in unsolicited emails.",
        },
      ],
    },
    api: {
      title: "API Documentation",
      icon: "⚙️",
      content: [
        {
          heading: "REST API",
          text: "Our REST API provides endpoints for market data, account management, and trading. Base URL: https://api.axle-crypto.com/v1. All responses are in JSON format.",
        },
        {
          heading: "WebSocket API",
          text: "Real-time market data and order updates via WebSocket connection. Subscribe to channels for specific trading pairs and order events.",
        },
        {
          heading: "Rate Limits",
          text: "REST API: 1000 requests per minute. WebSocket: Unlimited connections. Exceeding limits returns 429 Too Many Requests error.",
        },
      ],
    },
    mining: {
      title: "Mining Guide",
      icon: "⛏️",
      content: [
        {
          heading: "Mining Calculator",
          text: "Use our calculator to estimate profitability. Enter your hash rate, equipment cost, and electricity rate. The calculator accounts for difficulty changes and block rewards.",
        },
        {
          heading: "Pool Mining",
          text: "Join mining pools to combine computing power with other miners. Lower variance but consistent rewards. Popular pools are supported through our integration.",
        },
        {
          heading: "Hardware Requirements",
          text: "Bitcoin: ASIC miners (Antminer S19, Whatsminer M30S). Ethereum: High-end GPUs before 2.0. Always calculate ROI before purchasing equipment.",
        },
      ],
    },
    support: {
      title: "Support & FAQ",
      icon: "💬",
      content: [
        {
          heading: "Contact Support",
          text: "Visit our Support page or click the chat icon in the bottom-right corner. Our support team is available 24/7 to help with any issues.",
        },
        {
          heading: "Common Issues",
          text: "Having trouble logging in? Clear your browser cache and cookies. Having issues with deposits? Check that your email is verified and account is fully set up.",
        },
        {
          heading: "Account Recovery",
          text: "Lost access to your account? Contact support with proof of identity. We can help you regain access and secure your funds.",
        },
      ],
    },
  };

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
              Documentation
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Complete guides and API documentation to help you make the most of
              Axle.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Sidebar Navigation */}
            <div className='lg:col-span-1' data-aos='fade-right'>
              <div className='rounded-2xl bg-white/5 border border-white/10 p-6 sticky top-24'>
                <h3 className='text-lg font-bold mb-6'>Documentation</h3>
                <div className='space-y-2'>
                  {Object.entries(sections).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSection(key)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2 ${
                        selectedSection === key
                          ? "bg-blue text-white"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <span>{value.icon}</span>
                      <span>{value.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='lg:col-span-3' data-aos='fade-left'>
              <div className='rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12'>
                <div className='flex items-center gap-4 mb-8'>
                  <span className='text-5xl'>
                    {sections[selectedSection].icon}
                  </span>
                  <h2 className='text-3xl lg:text-4xl font-bold'>
                    {sections[selectedSection].title}
                  </h2>
                </div>

                <div className='space-y-8'>
                  {sections[selectedSection].content.map((item, idx) => (
                    <div
                      key={idx}
                      className='border-b border-white/10 pb-8 last:border-b-0'
                    >
                      <h3 className='text-xl lg:text-2xl font-bold mb-4'>
                        {item.heading}
                      </h3>
                      <p className='text-gray leading-relaxed'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Code Examples
          </h2>

          <div className='max-w-4xl mx-auto space-y-8'>
            {/* JavaScript Example */}
            <div
              className='rounded-2xl bg-white/5 border border-white/10 p-8 overflow-auto'
              data-aos='fade-up'
            >
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                <span>🟨</span> JavaScript - Get Market Price
              </h3>
              <pre className='text-sm text-gray font-mono overflow-x-auto'>
                {`const axios = require('axios');

async function getMarketPrice() {
  try {
    const response = await axios.get(
      'https://api.axle-crypto.com/v1/ticker/BTCUSD'
    );
    console.log('Current BTC Price:', response.data.price);
  } catch (error) {
    console.error('Error:', error);
  }
}

getMarketPrice();`}
              </pre>
            </div>

            {/* Python Example */}
            <div
              className='rounded-2xl bg-white/5 border border-white/10 p-8 overflow-auto'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                <span>🐍</span> Python - Place an Order
              </h3>
              <pre className='text-sm text-gray font-mono overflow-x-auto'>
                {`import requests
import json

API_KEY = 'your_api_key'
API_SECRET = 'your_api_secret'

def place_order(symbol, side, amount, price):
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    
    data = {
        'symbol': symbol,
        'side': side,
        'amount': amount,
        'price': price
    }
    
    response = requests.post(
        'https://api.axle-crypto.com/v1/orders',
        headers=headers,
        json=data
    )
    
    return response.json()

# Place a buy order
order = place_order('BTC-USD', 'buy', 0.1, 50000)`}
              </pre>
            </div>

            {/* cURL Example */}
            <div
              className='rounded-2xl bg-white/5 border border-white/10 p-8 overflow-auto'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                <span>⌨️</span> cURL - Get Account Balance
              </h3>
              <pre className='text-sm text-gray font-mono overflow-x-auto'>
                {`curl -X GET 'https://api.axle-crypto.com/v1/account/balance' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'

# Response:
{
  "balances": [
    {
      "asset": "BTC",
      "free": "1.50",
      "locked": "0.25"
    },
    {
      "asset": "USD",
      "free": "10000",
      "locked": "5000"
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-t border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>Need Help?</h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            Can't find what you're looking for? Contact our support team for
            assistance.
          </p>
          <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base mx-auto'>
            Contact Support
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

export default Documentation;
