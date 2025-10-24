import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { validateEmail, validatePassword } from "../utils/validation";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with uppercase, lowercase, number, and special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
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
      console.log("Registration attempt:", {
        fullName: formData.fullName,
        email: formData.email,
      });

      // Here you would send to your backend
      // const response = await fetch('/api/register', { ... });

      // Simulate success after 2 seconds
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptTerms: false,
        });

        // Redirect after 2 seconds
        setTimeout(() => {
          // Redirect to login or verification page
          window.location.href = "/login";
        }, 2000);
      }, 2000);
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
      setLoading(false);
    }
  };

  const passwordStrength = () => {
    if (!formData.password) return 0;
    let strength = 0;
    if (formData.password.length >= 8) strength++;
    if (/[a-z]/.test(formData.password)) strength++;
    if (/[A-Z]/.test(formData.password)) strength++;
    if (/\d/.test(formData.password)) strength++;
    if (/[@$!%*?&]/.test(formData.password)) strength++;
    return strength;
  };

  const getStrengthColor = () => {
    const strength = passwordStrength();
    if (strength === 0) return "bg-gray-600";
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength === 4) return "bg-blue-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    const strength = passwordStrength();
    if (strength === 0) return "N/A";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Fair";
    if (strength === 4) return "Good";
    return "Strong";
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
              Create Your Account
            </h1>
            <p
              className='text-xl text-gray mb-8 leading-relaxed'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              Join thousands of traders on Axle. Start trading crypto with
              confidence today.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
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
                  Account Created!
                </h2>
                <p className='text-gray mb-2'>
                  Welcome to Axle Crypto, {formData.fullName}!
                </p>
                <p className='text-sm text-gray'>
                  Redirecting to login to verify your email...
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg'
                data-aos='fade-up'
              >
                <h2 className='text-2xl font-bold mb-8 text-center'>
                  Create Your Account
                </h2>

                {/* Full Name Field */}
                <div className='mb-6'>
                  <label className='block text-sm font-medium mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='John Doe'
                    className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue focus:ring-2 focus:ring-blue/50 outline-none transition'
                  />
                  {errors.fullName && (
                    <p className='text-red-400 text-sm mt-2'>
                      {errors.fullName}
                    </p>
                  )}
                </div>

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
                      placeholder='Create a strong password'
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

                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className='mt-3'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-xs text-gray'>
                          Password Strength:
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            passwordStrength() <= 2
                              ? "text-red-400"
                              : passwordStrength() <= 3
                              ? "text-yellow-400"
                              : passwordStrength() === 4
                              ? "text-blue-400"
                              : "text-green-400"
                          }`}
                        >
                          {getStrengthText()}
                        </span>
                      </div>
                      <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden'>
                        <div
                          className={`h-full ${getStrengthColor()} transition-all duration-300`}
                          style={{
                            width: `${(passwordStrength() / 5) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className='mb-6'>
                  <label className='block text-sm font-medium mb-2'>
                    Confirm Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder='Confirm your password'
                      className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue focus:ring-2 focus:ring-blue/50 outline-none transition'
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray hover:text-blue transition'
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className='text-red-400 text-sm mt-2'>
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className='mb-6'>
                  <label className='flex items-start gap-2 cursor-pointer'>
                    <input
                      type='checkbox'
                      name='acceptTerms'
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className='w-4 h-4 rounded accent-blue cursor-pointer mt-1 flex-shrink-0'
                    />
                    <span className='text-sm text-gray'>
                      I agree to the{" "}
                      <Link to='/terms' className='text-blue hover:text-violet'>
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to='/privacy'
                        className='text-blue hover:text-violet'
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p className='text-red-400 text-sm mt-2'>
                      {errors.acceptTerms}
                    </p>
                  )}
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
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                {/* Divider */}
                <div className='relative my-8'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-white/20'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 bg-darkblue-secondary text-gray'>
                      Already have an account?
                    </span>
                  </div>
                </div>

                {/* Login Link */}
                <Link
                  to='/login'
                  className='block w-full py-3 px-6 rounded-lg border-2 border-blue text-blue text-center font-semibold hover:bg-blue hover:text-white transition'
                >
                  Sign In
                </Link>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-darkblue to-darkblue-secondary'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-3xl lg:text-5xl font-bold mb-16 text-center'
            data-aos='fade-down'
          >
            Your Account is Secure
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                icon: "🔐",
                title: "2FA Support",
                desc: "Two-factor authentication available",
              },
              {
                icon: "🛡️",
                title: "Encrypted",
                desc: "SSL/TLS encryption for all data",
              },
              {
                icon: "✓",
                title: "Verified",
                desc: "KYC/AML compliance required",
              },
              {
                icon: "📱",
                title: "Mobile App",
                desc: "Trade on iOS and Android",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue/50 transition duration-300 text-center'
                data-aos='fade-up'
                data-aos-delay={`${100 + index * 100}`}
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-lg font-bold mb-2'>{feature.title}</h3>
                <p className='text-sm text-gray'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
