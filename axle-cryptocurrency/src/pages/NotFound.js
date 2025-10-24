import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='min-h-screen bg-darkblue flex items-center justify-center px-4'>
      <div className='text-center max-w-md w-full'>
        {/* 404 Number */}
        <div className='mb-8'>
          <h1 className='text-9xl font-bold bg-gradient-to-r from-blue to-violet bg-clip-text text-transparent mb-4'>
            404
          </h1>
          <h2 className='text-3xl font-bold text-white mb-4'>Page Not Found</h2>
          <p className='text-gray-400 text-lg mb-8'>
            Sorry, the page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </div>

        {/* Illustration Area */}
        <div className='mb-12 text-6xl'>🔍</div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/'
            className='btn px-8 bg-blue hover:bg-blue-hover inline-flex justify-center items-center'
          >
            Go Home
          </Link>
          <a
            href='mailto:support@axle.com'
            className='btn px-8 bg-white/10 hover:bg-white/20 inline-flex justify-center items-center'
          >
            Contact Support
          </a>
        </div>

        {/* Helpful Links */}
        <div className='mt-16 pt-8 border-t border-white/10'>
          <p className='text-sm text-gray-400 mb-6'>Popular pages:</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='/'
              className='text-blue hover:text-blue-hover transition text-sm'
            >
              Home
            </a>
            <a
              href='#why'
              className='text-blue hover:text-blue-hover transition text-sm'
            >
              Features
            </a>
            <a
              href='#calculate'
              className='text-blue hover:text-blue-hover transition text-sm'
            >
              Calculator
            </a>
            <a
              href='#trade'
              className='text-blue hover:text-blue-hover transition text-sm'
            >
              Trade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
