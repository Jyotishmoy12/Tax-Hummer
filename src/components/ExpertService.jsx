import React from 'react';
import { FaFileInvoiceDollar, FaRegLightbulb, FaArrowRight } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';

const ExpertService = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl  my-7 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedBackground />

      <div className="w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-purple-300/40 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 sm:mb-6 leading-tight">
          <FaRegLightbulb className="inline-block text-pink-500 mr-2" />
          Looking for Expert Services?
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          <strong className="text-purple-600">Fast, Easy & Hassle-Free!</strong> <br />
          At <span className="text-pink-500 font-bold">Tax Hummer</span>, we go beyond software –
          our expert services ensure smooth and stress-free tax compliance.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
          {/* ITR Filing Assistance */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-2 sm:mb-3">
              <img src="itr.webp" alt="ITR Filing" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-800">ITR Filing Assistance</h3>
            </div>
            <ul className="list-disc ml-5 sm:ml-6 text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Expert-guided filing for Salaried, Self-Employed, NRIs, & Capital Gains.</li>
              <li>Maximize deductions & avoid penalties with 100% accuracy.</li>
              <li>File your ITR quickly with AI-powered assistance.</li>
            </ul>
          </div>

          {/* GST Filing Made Simple */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-2 sm:mb-3">
              <img src="gst.webp" alt="GST Filing" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-800">GST Filing Made Simple</h3>
            </div>
            <ul className="list-disc ml-5 sm:ml-6 text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Hassle-free GST return filing for businesses of all sizes.</li>
              <li>Stay compliant & avoid late fees with timely filings.</li>
              <li>Expert support for accurate calculations & reporting.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold text-purple-700">
          File with confidence — <span className="text-pink-500">Let the experts handle it!</span>
        </p>

        <button className="mt-4 sm:mt-6 inline-flex items-center justify-center bg-purple-600 hover:bg-pink-500 text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
          Explore Our Services <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ExpertService;
