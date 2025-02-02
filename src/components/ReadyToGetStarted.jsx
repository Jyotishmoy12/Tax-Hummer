import React from 'react';

const ReadyToGetStarted = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-center">
        {/* Single Block for Text, Button, and Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl space-y-6 lg:space-y-0 lg:space-x-8 overflow-hidden">
          {/* Text Section */}
          <div className="text-center lg:text-left text-black space-y-6">
            <h2 className="text-3xl font-semibold">
              Ready to Get Started?
            </h2>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-purple-700 shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Image Section without border */}
          <div className="relative w-full max-w-sm lg:max-w-md">
            <img
              src="illu1.jpg"
              alt="Illustration"
              className="w-full h-auto -ml-16" // Negative margin to merge with white background
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
