import { useState } from "react";
import { Calculator, DollarSign, Home, PieChart, FilePlus } from "lucide-react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const CalculatorComponent = () => {
  const [income, setIncome] = useState(0);
  const [hra, setHra] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [deductions, setDeductions] = useState({
    section80C: 0,
    section80D: 0,
    otherDeductions: 0,
  });
  const [useNewRegime, setUseNewRegime] = useState(false);
  
  const totalIncome = income + otherIncome - hra;
  const totalDeductions = deductions.section80C + deductions.section80D + deductions.otherDeductions;
  
  const calculateTax = () => {
    let taxableIncome = totalIncome - totalDeductions;
    let tax = useNewRegime ? taxableIncome * 0.15 : taxableIncome * 0.20; // Example rates
    return tax > 0 ? tax : 0;
  };

  const Input = ({ icon: Icon, ...props }) => (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-purple-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto my-20">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-900 flex items-center justify-center gap-2">
              <Calculator className="h-8 w-8" />
              Tax Hummer - Smart Tax Calculator
            </h2>
            <p className="text-gray-600 mt-2">Calculate your income tax based on the latest financial year.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Income Details
              </h3>
              
              <Input
                icon={DollarSign}
                type="number"
                placeholder="Annual Salary (₹)"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
              
              <Input
                icon={Home}
                type="number"
                placeholder="House Rent Allowance (HRA) (₹)"
                value={hra}
                onChange={(e) => setHra(Number(e.target.value))}
              />
              
              <Input
                icon={PieChart}
                type="number"
                placeholder="Other Income (₹)"
                value={otherIncome}
                onChange={(e) => setOtherIncome(Number(e.target.value))}
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <FilePlus className="h-5 w-5" />
                Deductions
              </h3>
              
              <Input
                icon={DollarSign}
                type="number"
                placeholder="Section 80C (₹) - Investments"
                value={deductions.section80C}
                onChange={(e) => setDeductions({...deductions, section80C: Number(e.target.value)})}
              />
              
              <Input
                icon={DollarSign}
                type="number"
                placeholder="Section 80D (₹) - Medical Insurance"
                value={deductions.section80D}
                onChange={(e) => setDeductions({...deductions, section80D: Number(e.target.value)})}
              />
              
              <Input
                icon={DollarSign}
                type="number"
                placeholder="Other Deductions (₹)"
                value={deductions.otherDeductions}
                onChange={(e) => setDeductions({...deductions, otherDeductions: Number(e.target.value)})}
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => setUseNewRegime(!useNewRegime)}
              className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-2 rounded-lg transition-colors"
            >
              {useNewRegime ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
              Use New Tax Regime (FY 2023-24)
            </button>
          </div>
          
          <div className="text-2xl font-bold text-purple-900 text-center">
            Tax Payable: ₹{calculateTax().toFixed(2)}
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Comparison: Old vs New Tax Regime</h3>
            <div className="space-y-4">
              <div className="relative pt-1">
                <div className="text-purple-800">Old Regime</div>
                <div className="overflow-hidden h-6 rounded-lg bg-purple-200">
                  <div 
                    className="h-full bg-purple-600 rounded-lg transition-all duration-300"
                    style={{ width: !useNewRegime ? '100%' : '0%' }}
                  >
                    <span className="px-2 text-white">₹{(!useNewRegime ? calculateTax() : 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="text-purple-800">New Regime</div>
                <div className="overflow-hidden h-6 rounded-lg bg-purple-200">
                  <div 
                    className="h-full bg-purple-600 rounded-lg transition-all duration-300"
                    style={{ width: useNewRegime ? '100%' : '0%' }}
                  >
                    <span className="px-2 text-white">₹{(useNewRegime ? calculateTax() : 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
            <FilePlus className="h-5 w-5" />
            File Tax with Tax Hummer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorComponent;