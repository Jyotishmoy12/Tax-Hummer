import React, { useState } from 'react';
import { 
  ChevronDown, 
  Info, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Calculator, 
  Home, 
  TrendingUp 
} from 'lucide-react';

const IncomeTaxFAQ = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (questionKey) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionKey]: !prev[questionKey]
    }));
  };

  const faqSections = {
    general: [
      {
        question: "What is Income Tax?",
        answer: "Income tax is a direct tax levied by the Government of India on an individual's or business's income. It is paid annually based on earnings in a financial year (April 1 – March 31).",
        icon: <Info className="text-blue-500" />
      },
      {
        question: "Who needs to file an Income Tax Return (ITR)?",
        answer: "You must file an ITR if:\n- Your annual income exceeds ₹2.5 lakh (for individuals below 60 years)\n- Your income exceeds ₹3 lakh (for senior citizens above 60 years)\n- Your income exceeds ₹5 lakh (for super senior citizens above 80 years)\n- You have foreign income or assets\n- You want to claim a tax refund\n- Your business turnover exceeds specified limits",
        icon: <FileText className="text-green-500" />
      }
    ],
    taxSaving: [
      {
        question: "How can I reduce my tax liability?",
        answer: "Save taxes using deductions under various sections:\n- Section 80C (Up to ₹1.5 lakh): PPF, EPF, ELSS, Tax-saving FDs\n- Section 80D: Health insurance deductions\n- Section 80E: Education loan interest\n- Section 24(b): Home loan interest deduction\n- HRA exemption\n- NPS additional deduction",
        icon: <Calculator className="text-purple-500" />
      },
      {
        question: "Which is better – Old Tax Regime or New Tax Regime?",
        answer: "Choose based on your deductions:\n- Old Tax Regime: Allows more deductions like 80C, 80D, HRA\n- New Tax Regime: Lower tax rates but no deductions\n\nIf you have high deductions → Old Tax Regime\nIf you don't claim many deductions → New Tax Regime",
        icon: <TrendingUp className="text-orange-500" />
      }
    ],
    business: [
      {
        question: "Do businesses need to file ITR?",
        answer: "Yes, businesses must file ITR-3, ITR-4, or ITR-5/6 based on their structure (sole proprietorship, partnership, LLP, or company).",
        icon: <BookOpen className="text-indigo-500" />
      },
      {
        question: "What is Presumptive Taxation for Small Businesses?",
        answer: "Under Section 44AD, small businesses (turnover ≤ ₹2 crore) can declare 8% of turnover as income and pay tax on it—no need to maintain detailed books.",
        icon: <Home className="text-teal-500" />
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
        Income Tax – Frequently Asked Questions
      </h1>

      {/* Mobile-Friendly Section Tabs */}
      <div className="flex flex-col sm:flex-row justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-4">
        {Object.keys(faqSections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`
              w-full sm:w-auto px-4 py-2 rounded-full flex items-center justify-center space-x-2 transition-all duration-300
              ${activeSection === section 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}
            `}
          >
            {section === 'general' && <ShieldCheck size={20} />}
            {section === 'taxSaving' && <Calculator size={20} />}
            {section === 'business' && <Home size={20} />}
            <span className="capitalize">{section} FAQs</span>
          </button>
        ))}
      </div>

      {/* Mobile-Responsive FAQ Accordion */}
      <div className="space-y-3 sm:space-y-4">
        {faqSections[activeSection].map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
          >
            <button 
              onClick={() => toggleQuestion(`${activeSection}-${index}`)}
              className="w-full flex justify-between items-center p-3 sm:p-4 text-left hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-2 sm:space-x-4">
                {React.cloneElement(item.icon, { size: 20 })}
                <h3 className="font-semibold text-base sm:text-lg truncate">{item.question}</h3>
              </div>
              <ChevronDown 
                size={20}
                className={`transform transition-transform ${
                  openQuestions[`${activeSection}-${index}`] ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {openQuestions[`${activeSection}-${index}`] && (
              <div 
                className="p-3 sm:p-4 bg-white text-gray-700 text-sm sm:text-base animate-fade-in"
              >
                <p className="whitespace-pre-line">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeTaxFAQ;