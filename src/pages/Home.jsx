import React, { lazy, Suspense, useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

// Lazy Loading Components
const HeroSection = lazy(() => import('../components/Hero'));
const Cards = lazy(() => import('../components/Cards'));
const ProductsForEveryone = lazy(() => import('../components/ProductsForEveryone'));
const ReadyToGetStarted = lazy(() => import('../components/ReadyToGetStarted'));
const IncomeTaxFAQ = lazy(() => import('../components/IncomeTaxFAQ'));

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle scroll event to show/hide button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="relative bg-gradient-to-r from-gray-50 to-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Cards />
          <img
            src="faq.jpg"
            alt="faq"
            loading="lazy"
            className="mx-auto w-90 h-90 rounded-none shadow-none bg-transparent"
          />
          <IncomeTaxFAQ />
          <ReadyToGetStarted />
        </Suspense>

        {/* Scroll to Top Button */}
        {showScroll && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all"
          >
            ⬆️
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
