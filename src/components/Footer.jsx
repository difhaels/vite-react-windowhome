import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo/logo.png';
import '../assets/css/footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-start mx-2">
          <Col md={3} className="col-12 mb-5">
            <div className='d-flex justify-content-start  align-items-center mb-4'>
              <img src={logo} alt="Company Logo" className="mb-2 logo" />
              <h5>WINDOW HOME</h5>
            </div>
            <div>
              <a href="https://facebook.com" className="text-white mx-2"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-white mx-2"><FaInstagram /></a>
            </div>
          </Col>
          <Col md={3} className="col-12 mb-5">
            <h5>Kontak</h5>
            <p><FaWhatsapp /> +62 812 3456 7890</p>
            <p><FaPhone /> (021) 123-4567</p>
          </Col>
          <Col md={3} className="col-12 mb-5">
            <h5>Workshop</h5>
            <div className='d-flex'>
              <FaMapMarkerAlt size={30} className="me-3" />
              <p  className="me-3"> RT001, RW05, No257, KP.Cibitung, Kel.Padurenan, Kec.Mustika Jaya, Kota Bekasi</p>
            </div>
            
          </Col>
          <Col md={3} className="col-12 mb-5">
            <h5>Area Layanan</h5>
            <p>Jabodetabek</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 WindowHome. All rights reserved.</p>
            <a>website by difhaels</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
