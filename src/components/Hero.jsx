import React from 'react';
import Phone from './Phone';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] px-4 py-16 overflow-hidden">
      {/* Expanding Diagonal Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg 
          className="h-full w-full"
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Define Brighter Gradient for Stripes */}
          <defs>
            <linearGradient id="brightStripeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="purple" />  {/* Light Red */}
              <stop offset="33%" stopColor="#b997f5" />  {/* Light Blue */}
              <stop offset="66%" stopColor="#b100f5" />  {/* Light Yellow */}
              {/* Light Red */}
            </linearGradient>
          </defs>

          <path 
            d="M100 0 L100 15 Q70 30, 40 60 T0 100 L0 0 Z"
            fill="url(#brightStripeGradient)" 
            className="animate-[wave_8s_ease-in-out_infinite]"
          >
            <animate 
              attributeName="d" 
              dur="8s"
              repeatCount="indefinite"
              values="
                M100 0 L100 15 Q70 30, 40 60 T0 100 L0 0 Z;
                M100 0 L100 15 Q75 35, 45 65 T0 100 L0 0 Z;
                M100 0 L100 15 Q70 30, 40 60 T0 100 L0 0 Z"
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 lg:w-1/2 text-center lg:text-left px-4 lg:px-12">
        <h1 className="space-y-2">
          <span className="block text-5xl font-bold tracking-tight mt-20 lg:mt-5 text-white">
            Making Tax Filing 
            <span className="italic font-serif text-blue-300"> Easy</span>,
          </span>
          <span className="block text-5xl font-bold tracking-tight text-white">
            Come
            <span className="italic font-light text-yellow-300"> Join </span>
            Us
          </span>
        </h1>
        
        <p className="mt-6 text-xl font-medium text-gray-100 max-w-2xl">
          <span className="font-semibold text-blue-200">India's first</span> AI-Powered tax and financial services software platform
        </p>
      </div>

      {/* Phone Mockups */}
      <Phone/>
    </div>
  );
};

export default HeroSection;
