import React from 'react'
import Hero from './Hero'
import FeaturedCars from './FeaturedCars';
import VedioSection from './VedioSection';
import Features from './Features';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedCars/>
      <VedioSection/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home;