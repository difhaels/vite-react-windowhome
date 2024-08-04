import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Superiority.css';
import worker from '../assets/icons/worker.svg';
import cheap from '../assets/icons/cheap.svg';
import fast from '../assets/icons/fast.svg';
import guarantee from '../assets/icons/guarantee.svg';

function Superiority() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Keunggulan Rumah Kusen Aluminium</h2>
      <Row className='g-1'>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <img src={worker} alt="Worker" className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Tim Profesional</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <img src={cheap} alt="Cheap" className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Harga Terjangkau</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <img src={fast} alt="Fast" className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Proses Cepat</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={6} xs={6} className="mb-4">
          <Card className="text-center card-custom">
            <Card.Body>
              <img src={guarantee} alt="Guarantee" className="mb-3 text-primary icon-custom" />
              <Card.Title className="card-title-custom">Bergaransi</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Superiority;
