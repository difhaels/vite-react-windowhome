import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton } from 'react-bootstrap';
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

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelect = (eventKey) => {
    setSelectedCategory(eventKey);
  };

  const filteredCategories = selectedCategory === 'All'
    ? categories
    : categories.filter(category => category.name === selectedCategory);

  return (
    <Container className="my-5">
      <h2 className="text-center produk-title mb-4">PRODUK</h2>
      <div className="d-flex justify-content-start gap-3 align-items-center mb-4">
        <h5 className="mb-0">Sort by Category:</h5>
        <DropdownButton id="dropdown-basic-button" title={selectedCategory} onSelect={handleSelect}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          {categories.map((category, index) => (
            <Dropdown.Item eventKey={category.name} key={index}>
              {category.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      {filteredCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h5 className="category-title">{category.name}</h5>
          <Row>
            {category.images.map((image, idx) => (
              <Col key={idx} md={2} sm={6} xs={6} className="mb-4">
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