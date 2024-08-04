import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function MiniServices() {
    return (<>
        <Container className="my-5">
            <div className="text-center">
                <h5 className="mb-4 text-center" style={{ backgroundColor: '#222F99', color: 'white', display: 'inline-block', padding: '10px 90px'}}>Layanan Kami</h5>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                        This is card 1.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Card 2</Card.Title>
                        <Card.Text>
                        This is card 2.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Card 3</Card.Title>
                        <Card.Text>
                        This is card 3.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Card 4</Card.Title>
                        <Card.Text>
                        This is card 4.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    );
}
