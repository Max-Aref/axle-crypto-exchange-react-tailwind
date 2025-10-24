import React, { useState } from "react";

const CalcForm = () => {
  const [hashRate, setHashRate] = useState("");
  const [unit, setUnit] = useState("TH/S");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Conversion rates to TH/S (example rates, update with real data)
  const unitConversion = {
    "H/S": 0.000000001,
    "KH/S": 0.000001,
    "MH/S": 0.001,
    "GH/S": 1,
    "TH/S": 1000,
  };

  const validateInput = (value) => {
    if (!value) {
      setError("Hash rate is required");
      return false;
    }
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0) {
      setError("Please enter a valid number greater than 0");
      return false;
    }
    if (numValue > 1000000) {
      setError("Hash rate is too high");
      return false;
    }
    return true;
  };

  const handleHashRateChange = (e) => {
    const value = e.target.value;
    setHashRate(value);
    setError("");
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleCalculate = async (e) => {
    e.preventDefault();

    if (!validateInput(hashRate)) {
      return;
    }

    setLoading(true);
    try {
      // Simulate calculation delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simple calculation (replace with actual mining profit API call)
      const normalizedHashRate = parseFloat(hashRate) * unitConversion[unit];
      const estimatedRevenue = (normalizedHashRate * 0.00001).toFixed(4);
      const usdValue = (estimatedRevenue * 45000).toFixed(2); // Assuming $45k per ETH

      setResult({
        eth: estimatedRevenue,
        usd: usdValue,
        unit: unit,
      });
    } catch (err) {
      setError("Calculation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className='w-full max-w-[942px] mx-auto rounded-2xl bg-gradient-to-br from-blue/10 to-violet/10 border border-blue/30 p-8 lg:p-12 hover:border-blue/50 transition duration-300 shadow-lg'
      data-aos='fade-up'
      data-aos-offset='500'
    >
      <form
        onSubmit={handleCalculate}
        className='flex flex-col lg:flex-row lg:justify-between lg:items-end space-y-12 lg:space-y-0 gap-6'
      >
        <div className='flex-1'>
          <label
            htmlFor='hash-rate'
            className='block text-sm font-medium mb-2 text-white'
          >
            Hash Rate
          </label>
          <input
            id='hash-rate'
            className='w-full px-4 py-3 rounded-lg bg-white/10 border border-blue/30 text-white placeholder-gray/50 focus:border-blue focus:outline-none transition duration-300 hover:border-blue/50'
            type='number'
            placeholder='enter your hash rate'
            value={hashRate}
            onChange={handleHashRateChange}
            min='0'
            max='1000000'
            step='0.1'
            aria-label='Hash rate input'
          />
          {error && (
            <span className='text-red-400 text-xs mt-2 block'>{error}</span>
          )}
        </div>

        <div className='flex-1'>
          <label
            htmlFor='unit-select'
            className='block text-sm font-medium mb-2 text-white'
          >
            Unit
          </label>
          <select
            id='unit-select'
            value={unit}
            onChange={handleUnitChange}
            className='w-full px-4 py-3 rounded-lg bg-white/10 border border-blue/30 text-white focus:border-blue focus:outline-none transition duration-300 hover:border-blue/50'
            aria-label='Hash rate unit selection'
          >
            <option value='H/S' className='bg-darkblue'>
              H/S
            </option>
            <option value='KH/S' className='bg-darkblue'>
              KH/S
            </option>
            <option value='MH/S' className='bg-darkblue'>
              MH/S
            </option>
            <option value='GH/S' className='bg-darkblue'>
              GH/S
            </option>
            <option value='TH/S' className='bg-darkblue'>
              TH/S
            </option>
          </select>
        </div>

        {/* Button */}
        <button
          type='submit'
          disabled={loading}
          className='items-center btn px-8 flex self-end disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </form>

      {/* Results Section */}
      {result && (
        <div className='mt-12 pt-12 border-t border-blue/30'>
          <div className='text-blue font-medium mb-4 animate-pulse text-sm uppercase tracking-wider'>
            Estimated 24 Hour Revenue:
          </div>
          <div className='text-4xl font-bold mb-3'>
            {result.eth} ETH{" "}
            <span className='text-blue text-2xl'>(${result.usd})</span>
          </div>
          <p className='text-gray text-sm tracking-wider'>
            Revenue will change based on mining difficulty and cryptocurrency
            market price.
          </p>
        </div>
      )}

      {!result && (
        <div className='mt-12 pt-12 border-t border-blue/30'>
          <div className='text-blue font-medium mb-4 text-sm uppercase tracking-wider'>
            Estimated 24 Hour Revenue:
          </div>
          <div className='text-4xl font-bold mb-3'>
            0.0000 ETH <span className='text-blue text-2xl'>($0.00)</span>
          </div>
          <p className='text-gray text-sm tracking-wider'>
            Enter your hash rate and click Calculate to see estimated revenue.
          </p>
        </div>
      )}
    </div>
  );
};

export default CalcForm;
