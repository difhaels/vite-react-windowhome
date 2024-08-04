import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/header.css';
import logo from '../assets/logo/logo.png';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand-custom">
          <img
            src={logo}
            alt="Logo"
            className="brand-logo"
          />WindowHome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Tentang Kami</Nav.Link>
            <Nav.Link href="/services">Layanan</Nav.Link>
            <Nav.Link href="/products">Produk</Nav.Link>
            <Nav.Link href="/contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
