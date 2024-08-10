import React from 'react';
import Hero from '../components/Hero';
import Superiority from '../components/Superiority';
import Banner from '../components/Banner';
import MiniServices from '../components/MiniServices';
import MiniProducts from '../components/MiniProducts';

function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Superiority />
      <MiniServices />
      <MiniProducts />
    </>
  );
}

export default Home;
