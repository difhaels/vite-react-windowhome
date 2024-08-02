import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaDollarSign, FaRocket, FaShieldAlt } from 'react-icons/fa';

function Features() {
  return (
    <Container className="my-5">
      <h2 className="text-center">Features</h2>
      <Row>
        <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FaUsers size={50} className="mb-3 text-primary" />
              <Card.Title>Tim Profesional</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FaDollarSign size={50} className="mb-3 text-primary" />
              <Card.Title>Harga Terjangkau</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FaRocket size={50} className="mb-3 text-primary" />
              <Card.Title>Proses Cepat</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <FaShieldAlt size={50} className="mb-3 text-primary" />
              <Card.Title>Bergaransi</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
