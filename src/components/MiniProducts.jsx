import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col} from "react-bootstrap";
import image from "../assets/products/pintuKaca1.png";
import "../assets/css/miniProducts.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MiniProducts() {
    useEffect(() => {
        AOS.init({ duration: 1000 });  // Inisialisasi AOS dengan durasi animasi
    }, []); 

    const navigate = useNavigate();

    return (<div className="container-mini-products">
        <Container className="px-5 pt-4" data-aos="fade-up">
            <div className="text-center">
                <h6 className="mb-4 text-center" style={{ backgroundColor: '#222F99', color: 'white', display: 'inline-block', padding: '10px 90px'}}>Produk Kami</h6>
            </div>
            <Row>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
                <Col lg={2} xs={4} className="mb-4">
                    <a onClick={()=>{navigate('/products')}} className="clickable">
                        <img src={image} alt="" className="img-fluid" />
                    </a>
                </Col>
            </Row>
            <p className="text-center">tap to see more...</p>
        </Container>
    </div>
    );
}
