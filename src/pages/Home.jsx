import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Superiority from '../components/Superiority';
import Banner from '../components/Banner';
import MiniServices from '../components/MiniServices';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <Superiority />
      <MiniServices />
      <Footer />
    </>
  );
}

export default Home;
