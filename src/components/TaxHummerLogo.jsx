import React from 'react';

const TaxHummerLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-shrink-0 cursor-pointer">
        <img
          src="logoTaxHummer.png"
          alt="TaxHummer"
          className="hover:opacity-80 transition-opacity w-10 h-8"
        />
      </div>
      <h1 
        className="
          text-xl 
          font-['Orbitron'] 
          italic 
          text-lavender-600 
          tracking-wide 
          hover:tracking-wider 
          transition-all 
          duration-300 
          cursor-pointer 
          select-none 
          leading-8 
          font-semibold
          text-purple-700
        "
      >
        Tax Hummer
      </h1>
    </div>
  );
};

export default TaxHummerLogo;