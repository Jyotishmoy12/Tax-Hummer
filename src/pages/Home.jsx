import React from 'react'
import NavBar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Cards from '../components/Cards'
import ProductsForEveryone from '../components/ProductsForEveryone'
import ReadyToGetStarted from '../components/ReadyToGetStarted'
import IncomeTaxFAQ from '../components/IncomeTaxFAQ'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Cards/>
    {/* <ProductsForEveryone/> */}
    <img src="faq.jpg" alt="faq" className="mx-auto w-100 h-100 rounded-none shadow-none bg-transparent" />
    <IncomeTaxFAQ/>
    <ReadyToGetStarted/>
    <Footer/>
    </>
   
  )
}

export default Home