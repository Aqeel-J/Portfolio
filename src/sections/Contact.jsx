import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import './Contact.scss';
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";
import messageAnimation from "../assets/MessageSent.json";

export default function Contact() {
    const [isLogin, setIsLogin] = useState(true);
    const [statusMessage, setStatusMessage] = useState(null); // message text
    const [statusType, setStatusType] = useState(null); // "success" or "error"

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_9h7uelz",    // Service ID from EmailJS dashboard
                "template_b2vaa5a",   // template ID from EmailJS dashboard
                e.target,
                "Sgafdp4NKuYntjJ_o"   // Public key from EmailJS dashboard
            )
            .then(
                (result) => {
                    setStatusMessage("Message sent successfully!");
                    setStatusType("success");
                    e.target.reset();
                },
                (error) => {
                    setStatusMessage("Failed to send message. Please try again.");
                    setStatusType("error");
                    console.error(error.text);
                }
            );
    };

    return (
        <section id="contact" className="section section-contact">
            <h2 className="title">Contact Me</h2>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h2>Get in Touch!</h2>
                        <p>If you have any questions, inquiries, or would like to discuss potential opportunities, please don’t hesitate to reach out. I look forward to connecting with you!</p>
                        <Lottie animationData={messageAnimation} loop={true} style={{ height: 400 }} />
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form">
                                <form onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="form-col-2">
                                            <input type="text" name="first_name" placeholder="First Name" required />
                                        </div>
                                        <div className="form-col-2">
                                            <input type="text" name="last_name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <input type="text" name="email" placeholder="Email" required />
                                    <textarea name="message" placeholder="Your Message" rows="20" required></textarea>
                                    <button type="submit" className="btn btn-primary" name="btn_register">Submit</button>
                                    {statusMessage && (
                                        <div className={`status-message ${statusType}`}>
                                            {statusMessage}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
