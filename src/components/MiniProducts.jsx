import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import image from "../assets/products/pintuKaca1.png";
import "../assets/css/miniProducts.css";

export default function MiniProducts() {
    return (<div className="container bg-info">
        <Container className="px-5 pt-4">
            <div className="text-center">
                <h5 className="mb-4 text-center" style={{ backgroundColor: '#222F99', color: 'white', display: 'inline-block', padding: '10px 90px'}}>Produk Kami</h5>
            </div>
            <Row>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={6} sm={12} className="mb-4">
                    <img src={image} alt="" className="img-fluid" />
                </Col>
            </Row>
            <p className="text-center">tap to see more...</p>
        </Container>
    </div>
    );
}
