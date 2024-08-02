import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-start mx-2">
          <Col md={3} className="col-12 mb-5">
            <h5>Company Logo</h5>
            <img src="path/to/logo.png" alt="Company Logo" className="mb-2" />
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
            <p><FaMapMarkerAlt /> Jalan Merpati No. 12, Jakarta</p>
            <p><FaMapMarkerAlt /> Jalan Kenari No. 34, Bogor</p>
          </Col>
          <Col md={3} className="col-12 mb-5">
            <h5>Area Layanan</h5>
            <p>Jabodetabek</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
