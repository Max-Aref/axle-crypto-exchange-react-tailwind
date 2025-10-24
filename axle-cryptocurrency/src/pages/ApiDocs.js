import React, { useState } from "react";

const ApiDocs = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("market");

  const endpoints = {
    market: {
      title: "Market Data",
      icon: "📊",
      endpoints: [
        {
          method: "GET",
          path: "/v1/ticker/:pair",
          description: "Get current price and market data for a trading pair",
          example: "/v1/ticker/BTCUSD",
          response: `{
  "pair": "BTCUSD",
  "price": 43250.50,
  "high24h": 44100,
  "low24h": 42500,
  "volume24h": 2500000,
  "change24h": 2.5
}`,
        },
        {
          method: "GET",
          path: "/v1/candles/:pair",
          description: "Get candlestick data for technical analysis",
          example: "/v1/candles/ETHUSD?interval=1h&limit=100",
          response: `{
  "candles": [
    {
      "time": 1697491200,
      "open": 1850.25,
      "high": 1862.50,
      "low": 1848.75,
      "close": 1858.00,
      "volume": 50000
    }
  ]
}`,
        },
      ],
    },
    orders: {
      title: "Orders",
      icon: "📝",
      endpoints: [
        {
          method: "POST",
          path: "/v1/orders",
          description: "Place a new order",
          example: "POST /v1/orders",
          response: `{
  "orderId": "ORD-12345",
  "pair": "BTCUSD",
  "side": "buy",
  "amount": 0.5,
  "price": 43250.50,
  "status": "open",
          "timestamp": 1697491200
}`,
        },
        {
          method: "GET",
          path: "/v1/orders/:orderId",
          description: "Get order details and status",
          example: "/v1/orders/ORD-12345",
          response: `{
  "orderId": "ORD-12345",
  "pair": "BTCUSD",
  "side": "buy",
  "amount": 0.5,
  "price": 43250.50,
  "filled": 0.25,
  "status": "partially_filled",
  "timestamp": 1697491200
}`,
        },
      ],
    },
    account: {
      title: "Account",
      icon: "👤",
      endpoints: [
        {
          method: "GET",
          path: "/v1/account/balance",
          description: "Get account balance for all assets",
          example: "/v1/account/balance",
          response: `{
  "balances": [
    {
      "asset": "BTC",
      "free": 2.5,
      "locked": 1.2
    },
    {
      "asset": "USD",
      "free": 50000,
      "locked": 10000
    }
  ]
}`,
        },
        {
          method: "GET",
          path: "/v1/account/info",
          description: "Get account information and trading history",
          example: "/v1/account/info",
          response: `{
  "userId": "USR-abc123",
  "email": "user@example.com",
  "status": "active",
  "tier": "verified",
  "tradingFeeRate": 0.001,
  "createdAt": 1697491200
}`,
        },
      ],
    },
  };

  const authMethods = [
    {
      type: "API Key Authentication",
      description: "Include your API key in the Authorization header",
      example: "Authorization: Bearer YOUR_API_KEY",
    },
    {
      type: "Signature Authentication",
      description:
        "Sign requests with your API secret for sensitive operations",
      example: "Sign: HMAC-SHA256(message, secret)",
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
              API Documentation
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Complete REST API reference for building applications with Axle.
            </p>
          </div>
        </div>
      </section>

      {/* Base URL & Quick Info */}
      <section className='py-12 lg:py-16 bg-white/5 border-y border-white/10'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div data-aos='fade-up'>
              <h3 className='text-sm font-medium text-blue mb-2'>BASE URL</h3>
              <p className='font-mono text-lg'>
                https://api.axle-crypto.com/v1
              </p>
            </div>
            <div data-aos='fade-up' data-aos-delay='100'>
              <h3 className='text-sm font-medium text-blue mb-2'>RATE LIMIT</h3>
              <p className='font-mono text-lg'>1000 req/min</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='200'>
              <h3 className='text-sm font-medium text-blue mb-2'>
                RESPONSE FORMAT
              </h3>
              <p className='font-mono text-lg'>JSON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12'
            data-aos='fade-down'
          >
            Authentication
          </h2>

          <div className='max-w-3xl space-y-8'>
            {authMethods.map((method, idx) => (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-white/5 border border-white/10'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <h3 className='text-xl font-bold mb-3'>{method.type}</h3>
                <p className='text-gray mb-4'>{method.description}</p>
                <pre className='bg-darkblue/50 p-4 rounded text-sm text-blue font-mono overflow-x-auto'>
                  {method.example}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12'
            data-aos='fade-down'
          >
            Endpoints
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Sidebar */}
            <div className='lg:col-span-1' data-aos='fade-right'>
              <div className='rounded-2xl bg-white/5 border border-white/10 p-6 sticky top-24'>
                <h3 className='text-lg font-bold mb-6'>Categories</h3>
                <div className='space-y-2'>
                  {Object.entries(endpoints).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedEndpoint(key)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2 ${
                        selectedEndpoint === key
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

            {/* Content */}
            <div className='lg:col-span-3' data-aos='fade-left'>
              {endpoints[selectedEndpoint].endpoints.map((endpoint, idx) => (
                <div
                  key={idx}
                  className='mb-8 last:mb-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden'
                >
                  {/* Header */}
                  <div className='p-6 bg-white/5 border-b border-white/10'>
                    <div className='flex items-center gap-4 mb-2'>
                      <span
                        className={`px-3 py-1 rounded text-white font-bold text-sm ${
                          endpoint.method === "GET"
                            ? "bg-blue"
                            : endpoint.method === "POST"
                            ? "bg-green-600"
                            : "bg-orange-600"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className='text-gray font-mono'>
                        {endpoint.path}
                      </code>
                    </div>
                    <p className='text-gray'>{endpoint.description}</p>
                  </div>

                  {/* Example & Response */}
                  <div className='p-6 space-y-4'>
                    <div>
                      <h4 className='font-bold text-blue mb-2'>Example:</h4>
                      <pre className='bg-darkblue/50 p-4 rounded text-sm font-mono overflow-x-auto'>
                        {endpoint.example}
                      </pre>
                    </div>
                    <div>
                      <h4 className='font-bold text-blue mb-2'>Response:</h4>
                      <pre className='bg-darkblue/50 p-4 rounded text-sm font-mono overflow-x-auto text-green-400'>
                        {endpoint.response}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Error Codes */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Error Codes
          </h2>

          <div className='max-w-3xl mx-auto'>
            <div className='rounded-2xl bg-white/5 border border-white/10 overflow-hidden'>
              {[
                {
                  code: "200",
                  meaning: "OK",
                  description: "Request was successful",
                },
                {
                  code: "400",
                  meaning: "Bad Request",
                  description: "Invalid request parameters",
                },
                {
                  code: "401",
                  meaning: "Unauthorized",
                  description: "Missing or invalid API key",
                },
                {
                  code: "403",
                  meaning: "Forbidden",
                  description: "Not authorized for this operation",
                },
                {
                  code: "404",
                  meaning: "Not Found",
                  description: "Resource not found",
                },
                {
                  code: "429",
                  meaning: "Too Many Requests",
                  description: "Rate limit exceeded",
                },
                {
                  code: "500",
                  meaning: "Server Error",
                  description: "Internal server error",
                },
              ].map((error, idx) => (
                <div
                  key={idx}
                  className={`p-6 flex items-start gap-6 border-b border-white/10 last:border-b-0 ${
                    idx % 2 === 0 ? "bg-white/5" : ""
                  }`}
                  data-aos='fade-up'
                  data-aos-delay={`${100 + idx * 50}`}
                >
                  <span
                    className={`px-3 py-1 rounded font-bold text-sm whitespace-nowrap ${
                      error.code.startsWith("2")
                        ? "bg-green-600"
                        : error.code.startsWith("4")
                        ? "bg-orange-600"
                        : "bg-red-600"
                    }`}
                  >
                    {error.code}
                  </span>
                  <div className='flex-1'>
                    <h4 className='font-bold mb-1'>{error.meaning}</h4>
                    <p className='text-gray text-sm'>{error.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue border-t border-white/10'>
        <div className='container mx-auto px-4 text-center'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-6'
            data-aos='fade-down'
          >
            Official SDKs Available
          </h2>
          <p
            className='text-gray text-lg mb-12 max-w-2xl mx-auto'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            Make development easier with our official SDKs for popular
            programming languages.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto'>
            {[
              {
                name: "Python",
                icon: "🐍",
                link: "npm install @axle-crypto/js",
              },
              {
                name: "JavaScript",
                icon: "🟨",
                link: "npm install @axle-crypto/js",
              },
              {
                name: "Go",
                icon: "🔵",
                link: "go get github.com/axle-crypto/go",
              },
            ].map((sdk, idx) => (
              <div
                key={idx}
                className='p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <div className='text-4xl mb-3'>{sdk.icon}</div>
                <h3 className='font-bold mb-3'>{sdk.name}</h3>
                <code className='text-xs text-blue font-mono bg-darkblue/50 p-2 rounded block overflow-x-auto'>
                  {sdk.link}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocs;
