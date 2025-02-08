import React from "react";

const ProductGrid = () => {
  const cards = [
    { title: "For Enterprise", description: "Placeholder description 1", illustration: "627.jpg" },
    { title: "For Tax Experts", description: "Placeholder description 2", illustration: "54740.jpg" },
    { title: "For SMEs", description: "Placeholder description 3", illustration: "5334521.jpg" },
    { title: "For Individuals", description: "Placeholder description 4", illustration: "10075609.jpg" },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-8 items-center hidden sm:grid">
        {/* Left Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="h-32 flex justify-center items-center mb-4">
                <img src={card.illustration} alt={`Illustration for ${card.title}`} className="h-35 w-35 object-contain " />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Heading Section */}
        <div className="text-left lg:pl-8">
          <h2 className="text-5xl font-extrabold">Products for everyone</h2>
          <p className="text-gray-600 mt-4">
            Built for scale, made by experts, and secure by design. Bringing you
            maximum tax savings, unmatched speed, and complete peace of mind.
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 mt-8 sm:hidden -my-10">
        <h2 className="text-2xl font-extrabold col-span-2">Products for everyone</h2>
        <p className="text-gray-600 mt-2 col-span-2">
          Built for scale, made by experts, and secure by design. Bringing you
          maximum tax savings, unmatched speed, and complete peace of mind.
        </p>
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md hover:shadow-xl transition flex flex-col justify-between"
          >
            <div className="h-24 flex justify-center items-center mb-2">
              <img src={card.illustration} alt={`Illustration for ${card.title}`} className="h-20 w-20 object-contain" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
