import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import pemasangan from "../assets/layanan/pemasangan.svg";
import pintu from "../assets/layanan/pintu.svg";
import kaca from "../assets/layanan/kaca.svg";
import kusen from "../assets/layanan/kusen.svg";

export default function Services() {
    const cardContents = [
        "Melayani pemasangan kusen aluminium, pintu, dan jendela kaca untuk berbagai bangunan Anda. Semua pemasangan dijamin awet dan tahan lama dan letaknya presisi dengan bangunan.",
        "Menerima pembuatan produk pintu aluminium / kayu untuk menambah nilai estetik pada rumah anda. Dapatkan produk pintu tentunya berkualitas tinggi, awet, kuat serta tahan lama di toko kami.",
        "Menerima pembuatan produk pintu jendela kaca untuk menambah nilai estetik pada rumah anda. Dapatkan produk jendela tentunya berkualitas tinggi, awet, kuat serta tahan lama di toko kami.",
        "Menerima pembuatan produk kusen aluminium untuk menambah nilai estetik pada rumah anda. Dapatkan produk kusen tentunya berkualitas tinggi, awet, kuat serta tahan lama di toko kami."
    ];

    return (
        <>
            <Container className="my-5">
                <h3 className="text-center produk-title mb-4">LAYANAN KAMI</h3>
                <Row>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={pemasangan} />
                            <p className="text-start p-1">{cardContents[0]}</p>
                            <div className="d-flex justify-content-center mt-auto">
                                        <a
                                            href="https://github.com/difhaels"
                                            className="btn btn-success rounded-0"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                                padding: '0.375rem 0.75rem',
                                                display: 'inline-block'
                                            }}
                                        >
                                            Hubungi
                                        </a>
                                    </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={pintu} />
                            <p className="text-start p-1">{cardContents[1]}</p>
                            <div className="d-flex justify-content-center mt-auto">
                                        <a
                                            href="https://github.com/difhaels"
                                            className="btn btn-success rounded-0"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                                padding: '0.375rem 0.75rem',
                                                display: 'inline-block'
                                            }}
                                        >
                                            Hubungi
                                        </a>
                                    </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={kaca} />
                            <p className="text-start p-1">{cardContents[2]}</p>
                            <div className="d-flex justify-content-center mt-auto">
                                        <a
                                            href="https://github.com/difhaels"
                                            className="btn btn-success rounded-0"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                                padding: '0.375rem 0.75rem',
                                                display: 'inline-block'
                                            }}
                                        >
                                            Hubungi
                                        </a>
                                    </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6} className="mb-4">
                    <Card className="text-center rounded-0">
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-0" src={kusen} />
                            <p className="text-start p-1">{cardContents[3]}</p>
                            <div className="d-flex justify-content-center mt-auto">
                                        <a
                                            href="https://github.com/difhaels"
                                            className="btn btn-success rounded-0"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                                padding: '0.375rem 0.75rem',
                                                display: 'inline-block'
                                            }}
                                        >
                                            Hubungi
                                        </a>
                                    </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    );
}


