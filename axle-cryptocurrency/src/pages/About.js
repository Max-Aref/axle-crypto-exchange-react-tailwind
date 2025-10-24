import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
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
              About Axle Crypto
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              We're revolutionizing cryptocurrency trading with security,
              simplicity, and innovation at our core.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                Our Mission
              </h2>
              <p className='text-lg text-gray mb-4 leading-relaxed'>
                At Axle Crypto, our mission is to democratize cryptocurrency
                trading and make it accessible to everyone, regardless of their
                experience level. We believe that blockchain technology should
                empower individuals, not confuse them.
              </p>
              <p className='text-lg text-gray mb-6 leading-relaxed'>
                We combine cutting-edge technology with user-centric design to
                create a trading platform that's both powerful and intuitive.
                Security isn't an afterthought—it's fundamental to everything we
                build.
              </p>
              <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'>
                Join Our Community
                <IoIosArrowDroprightCircle
                  className='text-2xl lg:text-3xl'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div
              data-aos='fade-left'
              className='bg-gradient-to-br from-blue/10 to-violet/10 rounded-2xl p-12 border border-blue/20'
            >
              <div className='space-y-6'>
                <div className='text-5xl font-bold text-blue'>5M+</div>
                <p className='text-xl text-gray'>Active traders worldwide</p>
                <div className='h-1 w-20 bg-gradient-to-r from-blue to-violet rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Our Core Values
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Security */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='text-4xl mb-4 text-blue'>🔒</div>
              <h3 className='text-xl font-bold mb-3'>Security First</h3>
              <p className='text-gray'>
                We implement military-grade encryption and multi-layer security
                protocols to protect your assets and data.
              </p>
            </div>

            {/* Innovation */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='text-4xl mb-4 text-blue'>⚡</div>
              <h3 className='text-xl font-bold mb-3'>Innovation Driven</h3>
              <p className='text-gray'>
                We constantly evolve our platform with the latest technologies
                and market insights to stay ahead.
              </p>
            </div>

            {/* Transparency */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='text-4xl mb-4 text-blue'>🤝</div>
              <h3 className='text-xl font-bold mb-3'>Transparency</h3>
              <p className='text-gray'>
                We believe in open communication and honest practices. No hidden
                fees, no tricks—just straightforward trading.
              </p>
            </div>

            {/* User Focus */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <div className='text-4xl mb-4 text-blue'>👥</div>
              <h3 className='text-xl font-bold mb-3'>User-Centric</h3>
              <p className='text-gray'>
                Your needs drive our decisions. We listen to feedback and
                continuously improve the user experience.
              </p>
            </div>

            {/* Community */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <div className='text-4xl mb-4 text-blue'>🌍</div>
              <h3 className='text-xl font-bold mb-3'>Community Focused</h3>
              <p className='text-gray'>
                We're building a global community of crypto enthusiasts who
                support and learn from each other.
              </p>
            </div>

            {/* Excellence */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10'
              data-aos='fade-up'
              data-aos-delay='600'
            >
              <div className='text-4xl mb-4 text-blue'>✨</div>
              <h3 className='text-xl font-bold mb-3'>Excellence</h3>
              <p className='text-gray'>
                We set high standards in everything we do, from customer support
                to platform performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Meet Our Team
          </h2>
          <p
            className='text-center text-gray text-lg mb-12 max-w-2xl mx-auto'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            Led by industry veterans with decades of combined experience in
            cryptocurrency, finance, and technology.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { name: "Alex Johnson", role: "CEO & Founder", emoji: "👨‍💼" },
              { name: "Sarah Chen", role: "CTO", emoji: "👩‍💻" },
              {
                name: "Marcus Williams",
                role: "Head of Security",
                emoji: "🔐",
              },
              {
                name: "Emma Rodriguez",
                role: "Community Manager",
                emoji: "🌟",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className='p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 text-center'
                data-aos='fade-up'
                data-aos-delay={`${200 + idx * 100}`}
              >
                <div className='text-6xl mb-4'>{member.emoji}</div>
                <h3 className='text-lg font-bold mb-2'>{member.name}</h3>
                <p className='text-gray'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-t border-b border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Ready to Join Us?
          </h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            Start your crypto journey with Axle today and experience the
            difference that security, innovation, and user focus can make.
          </p>
          <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base mx-auto'>
            Get Started Now
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

export default About;
