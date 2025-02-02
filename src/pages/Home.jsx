import React from 'react'
import NavBar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Cards from '../components/Cards'
import ProductsForEveryone from '../components/ProductsForEveryone'
import ReadyToGetStarted from '../components/ReadyToGetStarted'
const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Cards/>
    {/* <ProductsForEveryone/> */}
    <ReadyToGetStarted/>
    </>
   
  )
}

export default Home