import React, { useState } from 'react';

const ServiceCard = ({ imageSrc, title, description, buttonText, hoverContent, iconBgColor, hoverBgColor }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div 
      className={`relative ${isTouched ? 'group' : 'group'} h-[320px]`}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
    >
      {/* Base card */}
      <div className={`absolute inset-0 transition-all duration-300 -py-10 ${hoverBgColor} group-hover:shadow-xl rounded-2xl`}>
        {/* Centered image container that overlaps */}
        <div
          className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 ${iconBgColor} 
          flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg rounded-2xl`}
        >
          <img src={imageSrc} alt="service icon" className="w-8 h-8 " />
        </div>

        {/* Main content with proper spacing for image */}
        <div className="mt-12 p-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3 group-hover:opacity-0 transition-colors duration-300">
            {title}
          </h2>
          <p className="font-bold font-[Gilroy] mb-6 group-hover:opacity-0 transition-all duration-300 text-gray-400">
            {description}
          </p>

          {/* Hover content */}
          <div
            className="absolute inset-x-6 top-32 opacity-0 invisible group-hover:opacity-100 
            group-hover:visible transition-all duration-300"
          >
            <div className="space-y-3">
              <p className="text-gray-600 font-bold text-sm leading-relaxed -my-10 font-[Gilroy]">
                {hoverContent.join(' ')}
              </p>
            </div>
          </div>
        </div>

        {/* Button always visible at bottom */}
        <button className="absolute bottom-6 left-6 right-6 bg-purple-500 text-white py-3 px-6 rounded-3xl
          transition-all duration-300 hover:bg-purple-500 shadow-md group-hover:bg-purple-500">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      imageSrc: 'itr.webp',
      title: 'ITR File',
      description: 'Easily file your Income Tax Returns with our intuitive platform.',
      buttonText: 'See product',
      iconBgColor: 'bg-purple-600',
      hoverBgColor: 'group-hover:bg-gradient-to-br from-purple-200 to-purple-100',
      hoverContent: [
        'Automated tax calculation system',
        'Real-time financial monitoring',
        'Compliance tracking dashboard',
        'Advanced reporting features',
      ],
    },
    {
      imageSrc: 'gst.webp',
      title: 'GST Filing',
      description: 'Our connected finance ecosystem is enabling new paths to efficiency.',
      buttonText: 'Explore more',
      iconBgColor: 'bg-blue-100',
      hoverBgColor: 'group-hover:bg-gradient-to-br from-blue-200 to-blue-100',
      hoverContent: [
        'Integrated financial systems',
        'Seamless data synchronization',
        'Automated reconciliation',
        'Enhanced security protocols',
      ],
    },
    {
      imageSrc: 'calculator.png',
      title: 'Calculate Tax Liability',
      description: 'Know your Tax liability as per the latest budget 2025 updates.',
      buttonText: 'Calculate Now',
      iconBgColor: 'bg-green-100',
      hoverBgColor: 'group-hover:bg-gradient-to-br from-green-200 to-green-100',
      hoverContent: [
        'Latest tax regulations',
        'Custom tax scenarios',
        'Budget impact analysis',
        'Tax saving recommendations',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;