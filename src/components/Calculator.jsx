import { useState } from "react";

export default function CalculatorComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Basic Details", "Income Details", "Deductions"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Financial Year</span>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
                <option>FY 2025-2026</option>
                <option>FY 2024-2025</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">Age Group</span>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
                <option>0-60</option>
                <option>60-80</option>
                <option>80+</option>
              </select>
            </label>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Income from Salary", "Exempt Allowances", "Income from Interest", "Interest on Home Loan - Self Occupied", "Rental Income Received", "Interest on Home Loan - Let Out", "Income from Digital Assets", "Other Income"].map((label, index) => (
              <label key={index} className="block">
                <span className="text-gray-700">{label}</span>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 h-12"
                  />
                </div>
              </label>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Basic Deduction - 80C", "Interest from Deposits - 80TTA", "Medical Insurance - 80D", "Donations to Charity - 80G", "Interest on Housing Loan - 80EEA", "Employees Contribution to NPS - 80CCD", "Employees Contribution to NPS - 80CCD(2)", "Any Other Deduction"].map((label, index) => (
              <label key={index} className="block">
                <span className="text-gray-700">{label}</span>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 h-12"
                  />
                </div>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6 my-40">
      <div className="flex space-x-4 border-b pb-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none ${
              activeTab === index
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>{renderTabContent()}</div>

      <div className="flex justify-between">
        {activeTab > 0 && (
          <button
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            Back
          </button>
        )}
        {activeTab < tabs.length - 1 ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setActiveTab((prev) => prev + 1)}
          >
            Continue
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-500"
          >
            Calculate
          </button>
        )}
      </div>
    </div>
  );
}
