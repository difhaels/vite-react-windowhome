import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactRight() {
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
                    <button type="submit" value="Send" className="form-submit-btn">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
