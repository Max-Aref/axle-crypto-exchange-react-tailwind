import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Cryptocurrency Trading",
      category: "tutorial",
      date: "Oct 15, 2024",
      author: "Sarah Chen",
      excerpt:
        "Learn the fundamentals of cryptocurrency trading and how to execute your first trade on Axle.",
      image: "📖",
      content: "A comprehensive guide...",
    },
    {
      id: 2,
      title: "Bitcoin Halving: What You Need to Know",
      category: "market",
      date: "Oct 12, 2024",
      author: "Marcus Williams",
      excerpt:
        "Understanding how Bitcoin halving events affect the cryptocurrency market and your portfolio.",
      image: "₿",
      content: "Bitcoin halving...",
    },
    {
      id: 3,
      title: "Mining Profitability in 2024",
      category: "mining",
      date: "Oct 10, 2024",
      author: "Alex Johnson",
      excerpt:
        "Analyzing current mining conditions and profitability metrics for various cryptocurrencies.",
      image: "⛏️",
      content: "Mining analysis...",
    },
    {
      id: 4,
      title: "Top 5 Security Practices for Crypto Traders",
      category: "security",
      date: "Oct 8, 2024",
      author: "Sarah Chen",
      excerpt:
        "Essential security measures to protect your cryptocurrency assets and trading accounts.",
      image: "🔒",
      content: "Security best practices...",
    },
    {
      id: 5,
      title: "DeFi vs CeFi: Which is Right for You?",
      category: "education",
      date: "Oct 5, 2024",
      author: "Emma Rodriguez",
      excerpt:
        "Comparing decentralized and centralized finance platforms and their pros and cons.",
      image: "🔄",
      content: "DeFi comparison...",
    },
    {
      id: 6,
      title: "Ethereum 2.0: Staking Rewards Guide",
      category: "tutorial",
      date: "Oct 1, 2024",
      author: "Marcus Williams",
      excerpt:
        "How to stake Ethereum and earn passive rewards on the Axle platform.",
      image: "Ξ",
      content: "Staking guide...",
    },
  ];

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "tutorial", label: "Tutorials" },
    { id: "market", label: "Market News" },
    { id: "mining", label: "Mining" },
    { id: "security", label: "Security" },
    { id: "education", label: "Education" },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
              Axle Blog
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Stay updated with the latest crypto news, trading tips, and market
              insights from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-12 lg:py-16 bg-white/5 border-y border-white/10'>
        <div className='container mx-auto px-4'>
          <div
            className='flex flex-wrap gap-4 justify-center'
            data-aos='fade-up'
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition duration-200 border ${
                  selectedCategory === category.id
                    ? "bg-blue text-white border-blue"
                    : "bg-white/5 text-gray border-white/20 hover:border-blue hover:text-blue"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post, idx) => (
              <article
                key={post.id}
                className='rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue/50 transition duration-300 hover:bg-white/10 group cursor-pointer'
                data-aos='fade-up'
                data-aos-delay={`${100 + (idx % 3) * 100}`}
              >
                {/* Image placeholder */}
                <div className='h-48 bg-gradient-to-br from-blue/20 to-violet/20 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300'>
                  {post.image}
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='text-xs font-medium text-blue bg-blue/20 px-3 py-1 rounded-full'>
                      {post.category}
                    </span>
                    <span className='text-xs text-gray'>{post.date}</span>
                  </div>

                  <h3 className='text-xl font-bold mb-3 group-hover:text-blue transition duration-200'>
                    {post.title}
                  </h3>

                  <p className='text-gray mb-4 leading-relaxed'>
                    {post.excerpt}
                  </p>

                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray'>By {post.author}</span>
                    <IoIosArrowDroprightCircle className='text-blue group-hover:translate-x-2 transition duration-200' />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-20 lg:py-32 bg-gradient-to-r from-blue/20 to-violet/20 border-y border-white/10'>
        <div className='container mx-auto px-4 text-center' data-aos='fade-up'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Subscribe to Our Newsletter
          </h2>
          <p className='text-lg text-gray mb-8 max-w-2xl mx-auto'>
            Get the latest crypto news, trading tips, and market analysis
            delivered to your inbox weekly.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-lg mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray focus:outline-none focus:border-blue transition'
              aria-label='Email for newsletter'
            />
            <button className='btn px-8 whitespace-nowrap'>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
