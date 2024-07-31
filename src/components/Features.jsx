import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
  return (
    <Container className="my-5">
      <h2 className="text-center">Features</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Feature 1</Card.Title>
              <Card.Text>
                Description of feature 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Feature 2</Card.Title>
              <Card.Text>
                Description of feature 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Feature 3</Card.Title>
              <Card.Text>
                Description of feature 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
