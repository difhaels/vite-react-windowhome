import React from "react";
import logo from '../assets/logo/logo.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactLeft() {
    return (
        <div className="contact-left">
            <div className="contact-logo">
                <img src={logo} alt="Logo" className="contact-logo-img" />
                <h2>WindowHome</h2>
            </div>
            <div className="contact-info">
                <h4>Kontak</h4>
                <p>
                    <FaPhoneAlt className="contact-icon" /> +62 812-3456-7890
                </p>
                <p>
                    <FaEnvelope className="contact-icon" /> info@windowhome.com
                </p>
            </div>
            <div className="contact-info">
                <h4>Workshop</h4>
                <p>
                    <FaMapMarkerAlt className="contact-icon" /> RT001, RW05, No257,
                    KP.Cibitung, Kel.Padurenan, Kec.Mustika Jaya, Kota Bekasi
                </p>
            </div>
            <div className="contact-social">
                <h4>Follow Us</h4>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook className="social-icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
            </div>
        </div>
    );
}
