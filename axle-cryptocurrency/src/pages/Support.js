import React, { useState } from "react";

const Support = () => {
  const [activeTicket, setActiveTicket] = useState(null);

  const supportChannels = [
    {
      id: 1,
      title: "Live Chat",
      icon: "💬",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat",
    },
    {
      id: 2,
      title: "Email Support",
      icon: "📧",
      description: "Detailed assistance for complex issues",
      availability: "Response within 24 hours",
      action: "Send Email",
    },
    {
      id: 3,
      title: "Phone Support",
      icon: "☎️",
      description: "Direct contact with support agents",
      availability: "Mon-Fri, 9AM-6PM UTC",
      action: "Schedule Call",
    },
    {
      id: 4,
      title: "Knowledge Base",
      icon: "📚",
      description: "Self-service articles and tutorials",
      availability: "Always Available",
      action: "Browse Articles",
    },
  ];

  const tickets = [
    {
      id: "TK-001",
      subject: "Unable to withdraw Bitcoin",
      status: "resolved",
      date: "Oct 15, 2024",
      response: "Your withdrawal was processed successfully on Oct 16.",
    },
    {
      id: "TK-002",
      subject: "Account verification taking long",
      status: "in-progress",
      date: "Oct 18, 2024",
      response:
        "We're reviewing your documents. Should be complete by tomorrow.",
    },
    {
      id: "TK-003",
      subject: "API rate limit inquiry",
      status: "resolved",
      date: "Oct 19, 2024",
      response:
        "Standard tier has 1000 requests/minute. Upgrade available for higher limits.",
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
              Support Center
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              We're here to help. Choose the best way to reach us.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
            {supportChannels.map((channel, idx) => (
              <div
                key={channel.id}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10 cursor-pointer group'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <div className='text-5xl mb-4'>{channel.icon}</div>
                <h3 className='text-2xl font-bold mb-2'>{channel.title}</h3>
                <p className='text-gray mb-4'>{channel.description}</p>
                <p className='text-sm text-blue mb-6'>{channel.availability}</p>
                <button className='text-white font-medium group-hover:text-blue transition'>
                  {channel.action} →
                </button>
              </div>
            ))}
          </div>

          {/* Quick FAQ */}
          <div className='max-w-3xl mx-auto'>
            <h2
              className='text-3xl font-bold mb-12 text-center'
              data-aos='fade-down'
            >
              Common Questions
            </h2>
            <div className='space-y-4'>
              {[
                {
                  q: "How long does account verification take?",
                  a: "Basic verification is instant, enhanced verification takes 24-48 hours.",
                },
                {
                  q: "What are the withdrawal fees?",
                  a: "Fees vary by currency. Bitcoin: 0.0005 BTC, Ethereum: 0.01 ETH. Other coins displayed at withdrawal.",
                },
                {
                  q: "Is my account insured?",
                  a: "We maintain insurance coverage for cryptocurrency assets. Details in our security documentation.",
                },
                {
                  q: "Can I use Axle in my country?",
                  a: "Axle is available in most countries. Check our supported countries list or contact support.",
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className='group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue/50 transition duration-300 cursor-pointer'
                  data-aos='fade-up'
                  data-aos-delay={`${100 + idx * 100}`}
                >
                  <summary className='flex items-center justify-between font-bold text-lg'>
                    {item.q}
                    <span className='group-open:rotate-180 transition duration-300'>
                      ▼
                    </span>
                  </summary>
                  <p className='mt-4 text-gray leading-relaxed'>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Tickets */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Your Recent Tickets
          </h2>

          <div className='max-w-3xl mx-auto space-y-4'>
            {tickets.map((ticket, idx) => (
              <div
                key={ticket.id}
                className='rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-blue/50 transition duration-300 cursor-pointer'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
                onClick={() =>
                  setActiveTicket(activeTicket === ticket.id ? null : ticket.id)
                }
              >
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-4 mb-2'>
                      <span className='text-sm font-mono text-blue'>
                        {ticket.id}
                      </span>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          ticket.status === "resolved"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {ticket.status === "resolved"
                          ? "✓ Resolved"
                          : "⏳ In Progress"}
                      </span>
                    </div>
                    <h3 className='font-bold text-lg mb-1'>{ticket.subject}</h3>
                    <p className='text-gray text-sm'>{ticket.date}</p>
                  </div>
                  <span className='text-2xl'>
                    {activeTicket === ticket.id ? "▲" : "▼"}
                  </span>
                </div>

                {activeTicket === ticket.id && (
                  <div className='mt-6 pt-6 border-t border-white/10'>
                    <p className='text-gray leading-relaxed'>
                      <strong className='text-blue'>Response:</strong>
                      <br />
                      {ticket.response}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Ticket CTA */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-t border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Don't see your issue?
          </h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            Create a new support ticket and our team will get back to you as
            soon as possible.
          </p>
          <button className='btn px-8 text-lg'>Create New Ticket</button>
        </div>
      </section>
    </div>
  );
};

export default Support;
