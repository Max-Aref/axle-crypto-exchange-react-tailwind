import React, { useState } from "react";
import { useForm } from "../hooks/useCustom";
import { validateCalculatorForm } from "../utils/validation";

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
 * Enhanced Calculator Form Component
 * - Number input validation
 * - Loading state with spinner
 * - Error handling
 * - Accessible form controls
 * - Proper output display
 */
const CalcForm = () => {
  const [result, setResult] = useState(null);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (values) => {
    try {
      // Simulate calculation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Calculate revenue (example calculation)
      const hashRate = parseFloat(values.hashRate);
      const baseRevenuePerThDay = 0.018; // Example: 0.018 ETH per TH/S per day
      const multiplier =
        {
          "H/S": 0.000001,
          "KH/S": 0.001,
          "MH/S": 1,
          "GH/S": 1000,
          "TH/S": 1000000,
        }[values.hashUnit] || 1;

      const revenue = (hashRate * multiplier * baseRevenuePerThDay).toFixed(5);
      const usdValue = (revenue * 1500).toFixed(0); // Example: $1500 per ETH

      setResult({
        revenue,
        currency: "ETH",
        usdValue,
      });

      setToast({
        type: "success",
        message: "Calculation complete!",
      });
    } catch (error) {
      setToast({
        type: "error",
        message: "Calculation failed. Please try again.",
      });
      console.error("Calculation error:", error);
    }
  };

  const form = useForm(
    { hashRate: "", hashUnit: "TH/S" },
    validateCalculatorForm,
    handleSubmit
  );

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div
        className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
        data-aos='fade-up'
        data-aos-offset='500'
      >
        <form
          onSubmit={form.handleSubmit}
          className='flex flex-col lg:flex-row lg:justify-between lg:items-end space-y-12 lg:space-y-0 gap-6'
          noValidate
        >
          {/* Hash Rate Input */}
          <div className='flex-1 flex flex-col gap-y-2'>
            <label htmlFor='hash-rate' className='text-sm font-medium'>
              Hash Rate
            </label>
            <input
              id='hash-rate'
              name='hashRate'
              type='number'
              placeholder='Enter your hash rate'
              value={form.values.hashRate}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              disabled={form.isSubmitting}
              min='0'
              max='999999999'
              step='0.01'
              aria-label='Hash rate for mining calculation'
              aria-invalid={Boolean(
                form.errors.hashRate && form.touched.hashRate
              )}
              className={`input placeholder:text-darkblue focus:border-blue focus:shadow-lg transition ${
                form.errors.hashRate && form.touched.hashRate
                  ? "border-red-500"
                  : ""
              } disabled:opacity-50`}
              required
            />
            {form.errors.hashRate && form.touched.hashRate && (
              <span className='text-red-500 text-sm'>
                {form.errors.hashRate}
              </span>
            )}
          </div>

          {/* Unit Select */}
          <div className='flex-none flex flex-col gap-y-2'>
            <label htmlFor='hash-unit' className='text-sm font-medium'>
              Unit
            </label>
            <select
              id='hash-unit'
              name='hashUnit'
              value={form.values.hashUnit}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              disabled={form.isSubmitting}
              aria-label='Hash rate unit'
              className='select focus:border-blue focus:ring-2 focus:ring-blue/20 transition disabled:opacity-50'
              required
            >
              <option value='H/S'>H/S</option>
              <option value='KH/S'>KH/S</option>
              <option value='MH/S'>MH/S</option>
              <option value='GH/S'>GH/S</option>
              <option value='TH/S'>TH/S</option>
            </select>
            {form.errors.hashUnit && form.touched.hashUnit && (
              <span className='text-red-500 text-sm'>
                {form.errors.hashUnit}
              </span>
            )}
          </div>

          {/* Calculate Button */}
          <button
            type='submit'
            disabled={form.isSubmitting}
            className='items-center btn px-8 flex self-start lg:self-end hover:shadow-lg transition disabled:opacity-50'
          >
            {form.isSubmitting ? (
              <>
                <span className='inline-block animate-spin mr-2'>⟳</span>
                Calculating...
              </>
            ) : (
              "Calculate"
            )}
          </button>
        </form>

        {/* Results Section */}
        <div className='mt-24'>
          <div className='text-blue font-medium mb-4 text-sm uppercase tracking-wider'>
            Estimated 24 Hour Revenue:
          </div>

          {result ? (
            <div className='space-y-3'>
              <div className='text-[32px] font-bold'>
                {result.revenue} {result.currency}
                <span className='text-blue ml-2 text-2xl'>
                  (${result.usdValue})
                </span>
              </div>
              <div className='text-gray-500 tracking-[1%] text-sm'>
                Revenue will change based on mining difficulty and{" "}
                {result.currency} market price.
              </div>
              <div className='mt-4 p-4 bg-blue/10 border border-blue/30 rounded-lg'>
                <p className='text-sm text-darkblue'>
                  💡 Note: This is an estimate based on current network
                  conditions. Actual earnings may vary.
                </p>
              </div>
            </div>
          ) : (
            <div className='space-y-3 text-gray-400'>
              <div className='text-[32px] font-bold'>--</div>
              <div className='text-sm'>
                Enter your hash rate above to see estimated daily earnings
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CalcForm;
