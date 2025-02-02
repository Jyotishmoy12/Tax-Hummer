import React from 'react';
import { FaFileInvoice, FaChartLine, FaClipboardList } from 'react-icons/fa';

const Card = ({ title, icon, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-center transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r cursor-pointer">
      <div className="text-4xl text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      <Card 
        title="ITR Filing" 
        icon={<FaFileInvoice />} 
        description="Easily file your Income Tax Returns with our intuitive platform."
      />
      <Card 
        title="Get an Expense" 
        icon={<FaChartLine />} 
        description="Track your expenses and manage your financials effectively."
      />
      <Card 
        title="GST Filing" 
        icon={<FaClipboardList />} 
        description="File your GST returns with ease and stay compliant."
      />
    </div>
  );
};

export default Cards;
