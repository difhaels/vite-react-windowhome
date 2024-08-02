import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaDollarSign, FaRocket, FaShieldAlt } from 'react-icons/fa';
import '../assets/css/features.css';

function Features() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Keunggulan Rumah Kusen Aluminium</h2>
      <Row className='g-1'>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <FaUsers className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Tim Profesional</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <FaDollarSign className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Harga Terjangkau</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <FaRocket className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Proses Cepat</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <FaShieldAlt className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Bergaransi</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
