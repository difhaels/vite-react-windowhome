import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from '../assets/logo/logo.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import '../assets/css/contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_xm9lavy", "template_rfa93iy", form.current, {
                publicKey: "Ggx8QKUvf0yO2OLdX",
            })
            .then(
                () => {
                    alert("Sent Successfully!");
                },
                (error) => {
                    alert("OOOPS Something Wrong!");
                }
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-left">
                <div className="contact-logo">
                    <img src={logo} alt="Logo" className="contact-logo-img" />
                    <h2>WindowHome</h2>
                </div>
                <div className="contact-info">
                    <h4>Kontak</h4>
                    <p><FaPhoneAlt className="contact-icon" /> +62 812-3456-7890</p>
                    <p><FaEnvelope className="contact-icon" /> info@windowhome.com</p>
                </div>
                <div className="contact-info">
                    <h4>Workshop</h4>
                    <p><FaMapMarkerAlt className="contact-icon" /> RT001, RW05, No257, KP.Cibitung, Kel.Padurenan, Kec.Mustika Jaya, Kota Bekasi</p>
                </div>
                <div className="contact-social">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="social-icon" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="social-icon" /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="social-icon" /></a>
                </div>
            </div>

            <div className="contact-right">
                <div className="contact-form-wrapper">
                    <h3>Contact Us</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="user_name"
                            name="user_name"
                            className="form-control"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="user_email"
                            name="user_email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="user_noHp"
                            name="user_noHp"
                            className="form-control"
                            placeholder="No Hp"
                            required
                        />
                        <input
                            type="user_subject"
                            name="user_subject"
                            className="form-control"
                            placeholder="Subject"
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            className="form-control"
                            placeholder="Your Message"
                        ></textarea>
                        <button
                            type="submit"
                            value="Send"
                            className="form-submit-btn"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
