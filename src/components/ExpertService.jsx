import React from 'react';
import { FaFileInvoiceDollar, FaRegLightbulb, FaArrowRight } from 'react-icons/fa';
import { MdOutlineGavel, MdOutlineBusinessCenter } from 'react-icons/md';
import AnimatedBackground from './AnimatedBackground';

const ExpertService = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16 flex items-center justify-center py-10 my-7">
      <AnimatedBackground />

      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12 border border-purple-300/40 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
          <FaRegLightbulb className="inline-block text-pink-500 mr-2 font-sans" />
          Looking for expert services?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          <strong className="text-purple-600">Fast, Easy & Hassle-Free!</strong> <br />
          At <span className="text-pink-500 font-bold font-sans">Tax Hummer</span>, we go beyond software –
          our expert services ensure smooth and stress-free tax compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* ITR Filing Assistance */}
          <div className="bg-white/90 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
            {/* <a href="https://www.freepik.com/search">Icon by Vectors Tank</a> */}
            <img src="itr.webp" alt="GST" className="w-8 h-8 object-contain" />
              <h3 className="text-2xl font-semibold text-purple-800">ITR Filing Assistance</h3>
            </div>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Expert-guided filing for Salaried & Self-Employed Individuals, NRIs, and Capital Gains.</li>
              <li>Maximize deductions & avoid penalties with 100% accuracy.</li>
              <li>File your ITR quickly with AI-powered assistance.</li>
            </ul>
          </div>

          {/* GST Filing */}
          <div className="bg-white/90 p-6 rounded-xl shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
            {/* <a href="https://www.freepik.com/search">Icon by Three musketeers</a> */}
            <img src="gst.webp" alt="GST" className="w-8 h-8 object-contain" />
              <h3 className="text-2xl font-semibold text-pink-800">GST Filing Made Simple</h3>
            </div>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Hassle-free GST return filing for businesses of all sizes.</li>
              <li>Stay compliant & avoid late fees with timely filings.</li>
              <li>Expert support for accurate calculations & reporting.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <p className="mt-8 text-xl font-semibold text-purple-700">
          File with confidence — <span className="text-pink-500">Let the experts handle it!</span>
        </p>

        <button className="mt-6 inline-flex items-center bg-purple-600 hover:bg-pink-500 text-white text-lg font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
          Explore Our Services <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ExpertService;
