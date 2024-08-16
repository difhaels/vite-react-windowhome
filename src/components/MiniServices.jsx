import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import card1 from "../assets/products/pintuKaca1.png";
import { useNavigate } from 'react-router-dom';

export default function MiniServices() {
    const navigate = useNavigate(); // Initialize useNavigate
    return (<>
        <Container className="my-5">
            <div className="text-center">
                <h5 className="mb-4 text-center" style={{ backgroundColor: '#222F99', color: 'white', display: 'inline-block', padding: '10px 90px'}}>Layanan Kami</h5>
            </div>
            <Row>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={card1} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>Pemasangan</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={card1} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>Pemasangan</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={card1} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>Pemasangan</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={card1} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>Pemasangan</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    );
}
