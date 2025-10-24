import React from "react";

const ServerError = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className='min-h-screen bg-darkblue flex items-center justify-center px-4'>
      <div className='text-center max-w-md w-full'>
        {/* Error Code */}
        <div className='mb-8'>
          <h1 className='text-9xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4'>
            500
          </h1>
          <h2 className='text-3xl font-bold text-white mb-4'>Server Error</h2>
          <p className='text-gray-400 text-lg mb-8'>
            Something went wrong on our end. Our team has been notified and is
            working to fix it.
          </p>
        </div>

        {/* Illustration */}
        <div className='mb-12 text-6xl'>⚙️</div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={handleRetry}
            className='btn px-8 bg-blue hover:bg-blue-hover inline-flex justify-center items-center'
          >
            Try Again
          </button>
          <a
            href='/'
            className='btn px-8 bg-white/10 hover:bg-white/20 inline-flex justify-center items-center'
          >
            Go Home
          </a>
        </div>

        {/* Support Info */}
        <div className='mt-16 pt-8 border-t border-white/10'>
          <p className='text-sm text-gray-400 mb-4'>
            If the problem persists, please contact our support team:
          </p>
          <a
            href='mailto:support@axle.com'
            className='text-blue hover:text-blue-hover transition font-medium'
          >
            support@axle.com
          </a>
        </div>

        {/* Status Page Link */}
        <div className='mt-8 text-xs text-gray-500'>
          <a
            href='https://status.axle.com'
            className='hover:text-gray-400 transition'
          >
            Check Status Page →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
