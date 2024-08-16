import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/header.css';
import logo from '../assets/logo/logo.png';

function Header() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // State untuk melacak apakah navbar terbuka atau tertutup

  const handleNavigate = (path) => {
    navigate(path);
    setExpanded(false); // Menutup navbar setelah navigasi
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand onClick={() => handleNavigate('/')} className="navbar-brand-custom">
          <img
            src={logo}
            alt="Logo"
            className="brand-logo"
          />
          WindowHome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/about')}>Tentang Kami</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/services')}>Layanan</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/products')}>Produk</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/contact')}>Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
