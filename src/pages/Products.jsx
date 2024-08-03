import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Products() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1>Produk</h1>
        <p>Ini adalah halaman produk.</p>
      </div>
      <Footer />
    </>
  );
}

export default Products;
