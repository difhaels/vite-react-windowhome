import '../assets/css/contact.css';
import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Row className="contact-container">
        <h2 className="text-center mb-3">Kontak</h2>
        <Col xs={12} md={6} className="mb-4">
          <ContactLeft />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <ContactRight />
        </Col>
      </Row>
    </>
  );
}
