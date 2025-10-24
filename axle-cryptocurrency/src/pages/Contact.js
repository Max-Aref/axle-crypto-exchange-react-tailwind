import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
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
              Get in Touch
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Have questions? We'd love to hear from you. Send us a message and
              our team will respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            {/* Email */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10 text-center'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='text-4xl mb-4'>✉️</div>
              <h3 className='text-xl font-bold mb-2'>Email</h3>
              <p className='text-gray mb-4'>hello@axle-crypto.com</p>
              <p className='text-sm text-gray'>
                We typically respond within 24 hours
              </p>
            </div>

            {/* Support */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10 text-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='text-4xl mb-4'>🎧</div>
              <h3 className='text-xl font-bold mb-2'>Live Support</h3>
              <p className='text-gray mb-4'>Available 24/7</p>
              <button className='text-blue hover:text-violet transition'>
                Start Chat →
              </button>
            </div>

            {/* Location */}
            <div
              className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 hover:bg-white/10 text-center'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='text-4xl mb-4'>📍</div>
              <h3 className='text-xl font-bold mb-2'>Office</h3>
              <p className='text-gray mb-1'>123 Crypto Street</p>
              <p className='text-gray text-sm'>San Francisco, CA 94102</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className='max-w-2xl mx-auto' data-aos='fade-up'>
            <div className='rounded-2xl bg-gradient-to-b from-darkblue-secondary to-darkblue border border-white/10 p-8 lg:p-12'>
              <h2 className='text-2xl lg:text-3xl font-bold mb-8'>
                Send us a Message
              </h2>

              {submitted ? (
                <div className='text-center py-12'>
                  <div className='text-6xl mb-4'>✓</div>
                  <h3 className='text-2xl font-bold mb-2'>Thank You!</h3>
                  <p className='text-gray'>
                    Your message has been sent successfully. We'll be in touch
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name'
                      required
                      className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-blue transition'
                      aria-label='Full name'
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='your@email.com'
                      required
                      className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-blue transition'
                      aria-label='Email address'
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium mb-2'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder='How can we help?'
                      required
                      className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-blue transition'
                      aria-label='Subject'
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Tell us more about your inquiry...'
                      required
                      rows='6'
                      className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-blue transition resize-none'
                      aria-label='Message'
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    className='w-full btn gap-x-6 pl-6 justify-center'
                  >
                    Send Message
                    <IoIosArrowDroprightCircle
                      className='text-2xl'
                      aria-hidden='true'
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue-secondary to-darkblue border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-4xl font-bold mb-12 text-center'
            data-aos='fade-down'
          >
            Frequently Asked Questions
          </h2>

          <div className='max-w-3xl mx-auto space-y-6'>
            {[
              {
                question: "How long does it take to verify my account?",
                answer:
                  "Account verification typically takes 5-15 minutes for basic verification. Enhanced verification may take 24-48 hours.",
              },
              {
                question: "What are your trading fees?",
                answer:
                  "We offer competitive fees starting at 0.1% for makers and 0.15% for takers. VIP members receive discounted rates.",
              },
              {
                question: "How do I reset my password?",
                answer:
                  "Click 'Forgot Password' on the login page, enter your email, and follow the reset link sent to your inbox.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Yes, we use military-grade encryption (AES-256) and multi-layer security protocols. Your data is never shared with third parties.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className='group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue/50 transition duration-300 cursor-pointer'
                data-aos='fade-up'
                data-aos-delay={`${100 + idx * 100}`}
              >
                <summary className='flex items-center justify-between font-bold text-lg'>
                  {faq.question}
                  <span className='group-open:rotate-180 transition duration-300'>
                    ▼
                  </span>
                </summary>
                <p className='mt-4 text-gray leading-relaxed'>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
