import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import pintuKaca1 from '../assets/products/pintuKaca1.png';
import '../assets/css/products.css';

export default function Products() {
  const categories = [
    { name: 'Pintu Sliding', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
    { name: 'Pintu Utama', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
    { name: 'Pintu Kamar', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
    { name: 'Pintu Kaca', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
    { name: 'Pintu Kayu', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
    { name: 'Jendela Dobel', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
    { name: 'Sekat Shower', images: [pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1, pintuKaca1] },
  ];

  return (
    <Container className="my-5">
      {categories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3 className="category-title">{category.name}</h3>
          <Row>
            {category.images.map((image, idx) => (
              <Col key={idx} md={2} sm={4} xs={6} className="mb-4">
                <Card className="product-card">
                  <Card.Img variant="top" src={image} className="product-image" />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}
