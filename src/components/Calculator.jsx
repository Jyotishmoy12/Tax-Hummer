import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const TaxCalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [formData, setFormData] = useState({
    financialYear: "FY 2025-2026",
    ageGroup: "0-60",
    incomeDetails: {
      salary: 0,
      exemptAllowances: 0,
      interestIncome: 0,
      homeLoanSelfOccupied: 0,
      rentalIncome: 0,
      homeLoanLetOut: 0,
      digitalAssets: 0,
      otherIncome: 0
    },
    deductions: {
      basic80C: 0,
      deposits80TTA: 0,
      medical80D: 0,
      donations80G: 0,
      housing80EEA: 0,
      nps80CCD: 0,
      nps80CCD2: 0,
      otherDeduction: 0
    }
  });

  const [taxResults, setTaxResults] = useState({
    totalIncome: 0,
    exemptAllowances: 0,
    standardDeduction: 50000,
    chapterVIA: 0,
    taxableIncome: 0,
    taxPayable: 0,
    incomeTax: 0,
    surcharge: 0,
    healthEducationCess: 0
  });

  const [selectedRegime, setSelectedRegime] = useState('new');

  const calculateTotalIncome = () => {
    return Object.values(formData.incomeDetails).reduce((a, b) => a + (Number(b) || 0), 0);
  };

  const calculateDeductions = () => {
    if (selectedRegime === 'new') {
      return 50000; // Only standard deduction in new regime
    }
    const chapterVIA = Object.values(formData.deductions).reduce((a, b) => a + (Number(b) || 0), 0);
    return 50000 + chapterVIA; // Standard deduction + other deductions in old regime
  };

  const calculateTax = (taxableIncome) => {
    let tax = 0;
    
    if (selectedRegime === 'new') {
      // New regime tax slabs as per the image
      if (taxableIncome <= 250000) {
        tax = 0;
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 750000) {
        tax = 12500 + (taxableIncome - 500000) * 0.10;
      } else if (taxableIncome <= 1000000) {
        tax = 37500 + (taxableIncome - 750000) * 0.15;
      } else if (taxableIncome <= 1250000) {
        tax = 75000 + (taxableIncome - 1000000) * 0.20;
      } else if (taxableIncome <= 1500000) {
        tax = 125000 + (taxableIncome - 1250000) * 0.25;
      } else {
        tax = 187500 + (taxableIncome - 1500000) * 0.30;
      }
    } else {
      // Old regime tax slabs as per the image
      if (taxableIncome <= 250000) {
        tax = 0;
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.20;
      } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.30;
      }
    }
    
    return tax;
  };

  const handleCalculate = () => {
    const totalIncome = calculateTotalIncome();
    const totalDeductions = calculateDeductions();
    const taxableIncome = Math.max(0, totalIncome - totalDeductions);
    const incomeTax = calculateTax(taxableIncome);
    const healthEducationCess = Math.round(incomeTax * 0.04);
    
    setTaxResults({
      totalIncome,
      exemptAllowances: Number(formData.incomeDetails.exemptAllowances),
      standardDeduction: 50000,
      chapterVIA: selectedRegime === 'new' ? 0 : totalDeductions - 50000,
      taxableIncome,
      taxPayable: incomeTax + healthEducationCess,
      incomeTax,
      surcharge: 0,
      healthEducationCess
    });
    
    setShowDashboard(true);
  };

  const handleInputChange = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: Number(value)
      }
    }));
  };

  const tabs = ["Basic Details", "Income Details", "Deductions"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Financial Year</span>
              <select 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                value={formData.financialYear}
                onChange={(e) => setFormData(prev => ({...prev, financialYear: e.target.value}))}
              >
                <option>FY 2025-2026</option>
                <option>FY 2024-2025</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">Age Group</span>
              <select 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                value={formData.ageGroup}
                onChange={(e) => setFormData(prev => ({...prev, ageGroup: e.target.value}))}
              >
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
            {Object.entries(formData.incomeDetails).map(([key, value], index) => (
              <label key={index} className="block">
                <span className="text-gray-700">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={value || ''}
                    onChange={(e) => handleInputChange('incomeDetails', key, e.target.value)}
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
            {Object.entries(formData.deductions).map(([key, value], index) => (
              <label key={index} className="block">
                <span className="text-gray-700">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={value || ''}
                    onChange={(e) => handleInputChange('deductions', key, e.target.value)}
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

  const chartData = [
    { name: 'Total Income', value: taxResults.totalIncome },
    { name: 'Deduction', value: taxResults.standardDeduction + taxResults.chapterVIA },
    { name: 'Taxable Income', value: taxResults.taxableIncome },
    { name: 'Tax Payable', value: taxResults.taxPayable }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 my-40">
      {/* Regime Selection */}
      <div className="border-b pb-2">
        <div className="flex space-x-4">
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedRegime === 'new' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
            onClick={() => setSelectedRegime('new')}
          >
            New regime
            {selectedRegime === 'new' && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Recommended
              </span>
            )}
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedRegime === 'old' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
            onClick={() => setSelectedRegime('old')}
          >
            Old regime
          </button>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex space-x-4 border-b px-6 pt-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none ${
                activeTab === index
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">{renderTabContent()}</div>

        <div className="flex justify-between p-6 border-t">
          {activeTab > 0 && (
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              onClick={() => setActiveTab((prev) => prev - 1)}
            >
              Back
            </button>
          )}
          {activeTab < tabs.length - 1 ? (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setActiveTab((prev) => prev + 1)}
            >
              Continue
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          )}
        </div>
      </div>

      {/* Results Dashboard */}
      {showDashboard && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md h-96">
            <div className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Bar dataKey="value" fill="#93C5FD">
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === 3 ? '#4ADE80' : '#93C5FD'} // Making Tax Payable green
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>


          {/* Summary */}
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Total income</h3>
                <p className="text-3xl font-bold">₹{taxResults.totalIncome.toLocaleString()}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Exemption and deduction</h3>
                <p className="text-3xl font-bold">₹{(taxResults.standardDeduction + taxResults.chapterVIA).toLocaleString()}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Exempt Allowances</span>
                    <span>₹{taxResults.exemptAllowances.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard Deductions</span>
                    <span>₹{taxResults.standardDeduction.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chapter VI A</span>
                    <span>₹{taxResults.chapterVIA.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Taxable income</h3>
                <p className="text-3xl font-bold">₹{taxResults.taxableIncome.toLocaleString()}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Tax payable</h3>
                <p className="text-3xl font-bold">₹{taxResults.taxPayable.toLocaleString()}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                  <span>Income tax</span>
                    <span>₹{taxResults.incomeTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surcharge</span>
                    <span>₹{taxResults.surcharge.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health and education cess</span>
                    <span>₹{taxResults.healthEducationCess.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;