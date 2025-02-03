import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsAI = () => {
  const [isHovered, setIsHovered] = useState(false);

  const contentVariants = {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, duration: 1.5 },
    },
  };

  return (
    <div className="relative bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Floating Color Points */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full w-4 h-4 opacity-75 animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor: `${['red', 'blue', 'green', 'yellow', 'purple'][Math.floor(Math.random() * 5)]}`,
            animationDuration: `${Math.random() * 6 + 4}s`, // Random duration
            animationDelay: `${Math.random() * 2}s`, // Random delay
          }}
        />
      ))}

      <div className="flex flex-col sm:flex-row items-center justify-between max-w-full space-y-8 sm:space-y-0">
        {/* Left Content */}
        <motion.div
          className="w-full sm:w-1/2 justify-center overflow-hidden hidden sm:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.5 },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src="AI.jpg"
            alt="Tax Illustration"
            className="w-full max-w-full sm:max-w-md object-contain sm:block lg:-my-10 lg:-mx-10"
            loading='lazy'
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 0.5,
              transition: { duration: 0.3 },
            }}
            style={{
              pointerEvents: 'none', // Prevents interfering with hover area
              maxWidth: '100%', // Ensure it doesn’t overflow container
              maxHeight: '100%', // Prevents the image from going outside its container
            }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full sm:w-1/2 text-center sm:text-left -my-10 lg:-my-10"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.5, type: 'spring', stiffness: 50 },
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-6 leading-relaxed md:font-semibold md:max-w-3xl">
              <span className="font-semibold text-purple-800">
                Easy to use, with robust security to protect your data
              </span>{' '}
              and make tax filing stress-free. Our platform ensures that your sensitive financial information is encrypted and stored securely, offering peace of mind while you navigate the tax filing process. With a user-friendly interface designed for both beginners and seasoned users, you can easily input your details, track your progress, and complete your filing with just a few clicks or even by voice.
            </p>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUsAI;
