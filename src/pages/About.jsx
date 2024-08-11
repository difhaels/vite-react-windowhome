import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-4">
      <h5 className="">Tentang Kami</h5>
      <h2 className="mb-4 text-primary">Window Home</h2>
      <Row>
        <Col lg={6} xs={12}>
          <p>
            Kami merupakan usaha yang bergerak di bidang jasa service dan pembuatan aluminum kaca Jakarta. Sebagai spesialis pembuatan kusen, kami menyediakan berbagai produk seperti kusen aluminum, kaca jendela, dan pintu aluminium. Menerima pesanan / jual produk untuk di segala area Jabodetabek mulai dari Bekasi, Kota Bogor, Jakarta Timur, Jakarta Selatan, Jakarta Pusat, Cikarang, Karawang, Kramat Jati, Pulo Gadung, Pondok Kopi, Pondok Bambu, Cawang dan lain-lain.
          </p>
          <p>
            Rumah Kusen Aluminium Jakarta adalah solusi tepat untuk Anda karena semua produk memiliki kualitas unggulan dan tetap terjaga sehingga mampu bertahan lama. Tersedia juga layanan jasa pemasangan kusen pintu dan jendela bersama tim ahli kami.
          </p>
          <p>
            Bagi anda yang membeli produk pintu atau jendela di toko kami dan ingin sekaligus memasang. Kami siap untuk datang ke tempat Anda dan segera melakukan pemasangan. Jadi anda tidak perlu repot-repot untuk mencari jasa pasang pintu dan jendela. Hubungi saja layanan kami secara online melalui whatsapp dan telepon yang tersedia.
          </p>
        </Col>
        <Col lg={6} xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31621.154340649302!2d106.84559949999999!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699e89a2b03db1%3A0x2a8ff894f1e1b75e!2sJakarta!5e0!3m2!1sen!2sid!4v1617205274941!5m2!1sen!2sid"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Lokasi Kami"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
