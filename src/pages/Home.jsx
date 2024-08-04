import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Superiority from '../components/Superiority';
import Banner from '../components/Banner';

function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Hero />
      <Superiority />
      <Footer />
    </>
  );
}

export default Home;
