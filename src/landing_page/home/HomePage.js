import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
// import Education from './Education';
import OpenAccount from '../OpenAccount';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import Pricing from './Pricing';
import Navbar from '../Navbar';
import Footer from '../Footer';



function Homepage() {
  return (
    <>
       <Navbar />
      <Hero />
      <Awards />
      <Stats />
      
      <OpenAccount />
       <Footer />
     
    </>
  );
}

export default Homepage;