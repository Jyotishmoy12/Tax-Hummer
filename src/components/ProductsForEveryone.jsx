import React from 'react';

const ProductsForEveryone = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-8">
          Products for Everyone
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Product 1 */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="illu1.jpg" // Change this to your image path
              alt="Product 1"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-2xl font-semibold">Product 1</h3>
              <p className="mt-2">A brief description of the product.</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="illu2.jpg" // Change this to your image path
              alt="Product 2"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-2xl font-semibold">Product 2</h3>
              <p className="mt-2">A brief description of the product.</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="illu3.jpg" // Change this to your image path
              alt="Product 3"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-2xl font-semibold">Product 3</h3>
              <p className="mt-2">A brief description of the product.</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="illu4.jpg" // Change this to your image path
              alt="Product 4"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-2xl font-semibold">Product 4</h3>
              <p className="mt-2">A brief description of the product.</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsForEveryone;
