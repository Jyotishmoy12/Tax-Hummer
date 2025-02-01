import React from 'react'
import { LineChart, Receipt, Wallet } from 'lucide-react';

const Phone = () => {
  return (
    <div className="relative z-10 lg:w-1/2 mt-20 lg:mt-10 flex justify-center items-center">
    <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-300 overflow-hidden">
      {/* Phone UI */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-blue-600 flex items-end p-4">
        <h3 className="text-white font-semibold text-lg">Tax Dashboard</h3>
      </div>
      
      {/* Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl"></div>

      {/* Content */}
      <div className="mt-24 p-4 space-y-4">
        {/* Summary Card */}
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Tax Summary 2024</h4>
            <LineChart className="text-blue-600" size={20} />
          </div>
          <p className="text-2xl font-bold mt-2">₹24,500</p>
          <p className="text-sm text-gray-600">Estimated Refund</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <Receipt className="text-blue-600 mb-2" size={24} />
            <p className="font-medium">Upload Bills</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <Wallet className="text-purple-600 mb-2" size={24} />
            <p className="font-medium">File Returns</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Filing Progress</span>
            <span>75%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Phone