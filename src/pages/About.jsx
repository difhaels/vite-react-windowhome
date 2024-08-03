import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1>Tentang Kami</h1>
        <p>Ini adalah halaman tentang kami.</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
