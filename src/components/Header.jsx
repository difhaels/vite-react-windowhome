import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/header.css';
import logo from '../assets/logo/logo.png';

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand onClick={()=>{navigate('/')}} className="navbar-brand-custom">
          <img
            src={logo}
            alt="Logo"
            className="brand-logo"
          />WindowHome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/about')}}>Tentang Kami</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/services')}}>Layanan</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/products')}}>Produk</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/contact')}}>Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
