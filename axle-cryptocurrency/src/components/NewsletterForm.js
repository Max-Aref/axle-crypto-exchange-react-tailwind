import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Email validation regex (RFC 5322 compliant)
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate submission
    setLoading(true);
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      // Simulated success
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10'
    >
      <div className='flex-1 w-full lg:w-auto relative'>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter your email'
          aria-label='Email address for newsletter'
          className={`input text-base text-white placeholder:text-white placeholder:text-base w-full ${
            error ? "border-red-500" : ""
          }`}
        />
        {error && (
          <span className='text-red-500 text-xs mt-1 block'>{error}</span>
        )}
        {success && (
          <span className='text-green-400 text-xs mt-1 block'>
            Thanks for subscribing! ✓
          </span>
        )}
      </div>
      <button
        type='submit'
        disabled={loading}
        className='btn bg-white text-darkblue px-8 hover:bg-white/70 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
};

export default NewsletterForm;
