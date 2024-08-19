import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import pemasangan from "../assets/layanan/pemasangan.svg";
import pintu from "../assets/layanan/pintu.svg";
import kaca from "../assets/layanan/kaca.svg";
import kusen from "../assets/layanan/kusen.svg";
import { useNavigate } from 'react-router-dom';

export default function MiniServices() {
    const navigate = useNavigate(); // Initialize useNavigate
    return (<>
        <Container className="my-5">
            <div className="text-center">
                <h6 className="mb-4 text-center" style={{ backgroundColor: '#222F99', color: 'white', display: 'inline-block', padding: '10px 90px'}}>Layanan Kami</h6>
            </div>
            <Row>
                <Col lg={3} xs={6} className="mb-4" data-aos="fade-up">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={pemasangan} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>{'Lihat Layanan>'}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4" data-aos="fade-up">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={pintu} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>{'Lihat Layanan>'}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4" data-aos="fade-up">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={kaca} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>{'Lihat Layanan>'}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4" data-aos="fade-up">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={kusen} />
                            <Button variant="success" className="mt-3 rounded-0" onClick={()=>{navigate('/services')}}>{'Lihat Layanan>'}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    );
}
