import '../assets/css/contact.css';
import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <Row className="contact-container">
        <Col xs={12} md={6} className="mb-4">
          <ContactLeft />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <ContactRight />
        </Col>
      </Row>
    </div>
  );
}
