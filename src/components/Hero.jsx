import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/hero.css';

function Hero() {
  return (
    <div className="bg-dark text-white text-center py-5 hero-section">
      <Container>
        <h1>Selamat Datang di Website</h1>
        <h2>Kusen Aluminium Window Home</h2>
        <div className="estetik-line"></div>
        <p>
          Kami merupakan spesialis jasa pembuatan dan pemasangan Kusen Pintu Aluminium, dan Jendela Aluminium. Segera Hubungi Kami untuk informasi selengkapnya.
        </p>
      </Container>
    </div>
  );
}

export default Hero;
