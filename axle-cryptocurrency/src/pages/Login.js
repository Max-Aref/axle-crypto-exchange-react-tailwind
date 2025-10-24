import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { validateEmail } from "../utils/validation";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      console.log("Login attempt:", {
        email: formData.email,
        rememberMe: formData.rememberMe,
      });

      // Here you would send to your backend
      // const response = await fetch('/api/login', { ... });

      // Simulate success after 2 seconds
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ email: "", password: "", rememberMe: false });

        // Redirect after 2 seconds
        setTimeout(() => {
          // Redirect to dashboard or home
          window.location.href = "/";
        }, 2000);
      }, 2000);
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
      setLoading(false);
    }
  };

  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='py-10 lg:py-16 bg-gradient-to-b from-darkblue-secondary to-darkblue'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h1
              className='text-4xl lg:text-6xl font-bold mb-6 leading-tight'
              data-aos='fade-down'
            >
              Welcome Back
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Log in to access your trading account and manage your
              cryptocurrency portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className='py-10 lg:py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-md mx-auto'>
            {submitted ? (
              <div
                className='p-8 rounded-2xl bg-gradient-to-b from-darkblue-secondary to-darkblue border border-green-500/50 text-center'
                data-aos='fade-up'
              >
                <div className='text-5xl mb-4'>✓</div>
                <h2 className='text-2xl font-bold mb-4 text-green-400'>
                  Login Successful!
                </h2>
                <p className='text-gray mb-2'>Welcome back to Axle Crypto.</p>
                <p className='text-sm text-gray'>Redirecting to dashboard...</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg'
                data-aos='fade-up'
              >
                <h2 className='text-2xl font-bold mb-8 text-center'>
                  Sign In to Your Account
                </h2>

                {/* Email Field */}
                <div className='mb-6'>
                  <label className='block text-sm font-medium mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='you@example.com'
                    className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue focus:ring-2 focus:ring-blue/50 outline-none transition'
                  />
                  {errors.email && (
                    <p className='text-red-400 text-sm mt-2'>{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className='mb-2'>
                  <label className='block text-sm font-medium mb-2'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Enter your password'
                      className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue focus:ring-2 focus:ring-blue/50 outline-none transition'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray hover:text-blue transition'
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className='text-red-400 text-sm mt-2'>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember & Forgot Password */}
                <div className='flex items-center justify-between mb-8'>
                  <label className='flex items-center gap-2 cursor-pointer'>
                    <input
                      type='checkbox'
                      name='rememberMe'
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className='w-4 h-4 rounded accent-blue cursor-pointer'
                    />
                    <span className='text-sm text-gray'>Remember me</span>
                  </label>
                  <Link
                    to='/forgot-password'
                    className='text-sm text-blue hover:text-violet transition'
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Error Message */}
                {errors.submit && (
                  <div className='mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm'>
                    {errors.submit}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={loading}
                  className='w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue to-violet text-white font-semibold hover:shadow-lg hover:shadow-blue/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {loading ? (
                    <>
                      <div className='animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent'></div>
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>

                {/* Divider */}
                <div className='relative my-8'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-white/20'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 bg-darkblue-secondary text-gray'>
                      Don't have an account?
                    </span>
                  </div>
                </div>

                {/* Register Link */}
                <Link
                  to='/register'
                  className='block w-full py-3 px-6 rounded-lg border-2 border-blue text-blue text-center font-semibold hover:bg-blue hover:text-white transition'
                >
                  Create Account
                </Link>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue to-darkblue-secondary'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-5xl font-bold mb-16 text-center'
            data-aos='fade-down'
          >
            Why Trade on Axle?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: "🔒",
                title: "Bank-Level Security",
                desc: "Your funds are protected with military-grade encryption",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Execute trades in milliseconds with our advanced infrastructure",
              },
              {
                icon: "📊",
                title: "Advanced Analytics",
                desc: "Real-time charts and market data for informed decisions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 text-center'
                data-aos='fade-up'
                data-aos-delay={`${100 + index * 100}`}
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-gray'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
