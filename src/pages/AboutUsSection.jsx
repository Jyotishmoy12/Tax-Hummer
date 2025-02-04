import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import HeadingWithIllustration from '../components/HeadingWithIllustration';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'framer-motion';
import WhyChooseUsAI from '../components/WhyChooseUsAI';
import WhyChooseUsAIEnd from '../components/WhyChooseUsEnd';
import WhyChooseUsUser from '../components/WhyChooseUsUser';
import MissionVision from '../components/MissionVision';
import FounderSection from '../components/FounderSection';

// Floating Color Points Component (using Tailwind)
const FloatingPoints = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
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
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-r from-gray-50 to-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Floating Points in the Background */}
        <FloatingPoints />

        {/* Heading + Illustration */}
        <HeadingWithIllustration />

        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 leading-tight font-serif text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
        >
          Why Choose Us?
        </motion.h2>

        {/* Why Choose Us Content */}
        <WhyChooseUs />

        {/* Separator with Animation */}
        {/* <motion.div
          className="my-10 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5 }}
        /> */}

        {/* Why Choose Us AI Content */}
        <WhyChooseUsAI />

        {/* Separator with Animation */}
        {/* <motion.div
          className="my-10 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5 }}
        /> */}

        {/* Why Choose Us AI End Content */}
        <WhyChooseUsAIEnd />

        {/* Separator with Animation */}
        {/* <motion.div
          className="my-10 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5 }}
        /> */}

        {/* Why Choose Us User Content */}
        <WhyChooseUsUser />

        {/* Footer */}
        <MissionVision/>
        <FounderSection/>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsSection;
