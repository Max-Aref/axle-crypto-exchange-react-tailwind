import React, { useState } from "react";
import { useForm } from "../hooks/useCustom";
import { validateNewsletterForm } from "../utils/validation";

const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? "✓" : "✕";

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg animate-pulse z-50`}
    >
      <span className='font-bold text-lg'>{icon}</span>
      <span>{message}</span>
    </div>
  );
};

/**
 * Enhanced Newsletter Form Component
 * - Email validation
 * - Error handling
 * - Loading state
 * - Success/error feedback
 */
const NewsletterForm = () => {
  const [toast, setToast] = useState(null);

  const handleSubmit = async (values) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", values);

      setToast({
        type: "success",
        message: "Success! Check your email to confirm subscription.",
      });

      form.reset();

      // TODO: Replace with actual API call
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values)
      // });
      // if (!response.ok) throw new Error('Subscription failed');
    } catch (error) {
      setToast({
        type: "error",
        message: "Subscription failed. Please try again.",
      });
      console.error("Subscription error:", error);
    }
  };

  const form = useForm({ email: "" }, validateNewsletterForm, handleSubmit);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form
        onSubmit={form.handleSubmit}
        className='flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10'
        noValidate
      >
        <div className='flex-1 w-full lg:flex-none'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='newsletter-email' className='sr-only'>
              Email address
            </label>
            <input
              id='newsletter-email'
              name='email'
              type='email'
              placeholder='Enter your email'
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              disabled={form.isSubmitting}
              aria-label='Email address for newsletter'
              aria-invalid={Boolean(form.errors.email && form.touched.email)}
              className={`input text-base text-white placeholder:text-white placeholder:text-base focus:border-blue focus:shadow-lg transition ${
                form.errors.email && form.touched.email ? "border-red-500" : ""
              } disabled:opacity-50`}
              required
            />
            {form.errors.email && form.touched.email && (
              <span className='text-red-400 text-sm'>{form.errors.email}</span>
            )}
          </div>
        </div>

        <button
          type='submit'
          disabled={form.isSubmitting}
          className='btn bg-white text-darkblue px-8 hover:bg-white/70 disabled:opacity-50 flex items-center gap-2 min-w-max'
        >
          {form.isSubmitting ? (
            <>
              <span className='inline-block animate-spin'>⟳</span>
              <span>Subscribing...</span>
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>

      {/* Privacy reassurance */}
      <div className='sr-only'>
        <p>We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </>
  );
};

export default NewsletterForm;
