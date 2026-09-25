import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      
        <Hero/>
      
      <Footer></Footer>
    </div>
  );
};

export default HomePage;