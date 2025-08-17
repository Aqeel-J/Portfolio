import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdFileDownload } from 'react-icons/md';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import doodleArrow from "../assets/doodle-arrow.svg";
import MySelf from "../assets/SelfPortrait.png";
import './Home.scss';
import { DiMysql } from 'react-icons/di';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Aqeel_CV.docx";
        link.download = "Aqeel_Jabir_CV.docx"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="section section-home">
            <div className='container'>
                <div className='row'>
                    <img src={doodleArrow} alt="doodle arrow" className="doodle-arrow" />
                    <div className='col-2'>
                        <p>Hi, I'm</p>
                        <h1 className="fancy-heading">
                            <span>Aqeel</span> Jabir
                        </h1>
                        <TypeAnimation
                            sequence={[
                                "I'm a Full Stack Developer", 2000,
                                "I'm a UI/UX Designer", 2000
                            ]}
                            wrapper="h3"
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: '1.5rem', fontWeight: '500', color: '#AAAAAA' }}
                        />
                        <p className="text-center max-width">
                            I’m a developer passionate about creating innovative solutions. Explore my work and get in touch!
                        </p>
                        <div className="social-icons">
                            <a href="https://github.com/Aqeel-J" target="_blank" rel="noopener noreferrer">
                                <div className="icon-wrapper">
                                    <FaGithub className="logo-icon" />
                                </div>
                            </a>
                            <a href="https://instagram.com/_aqeel_J" target="_blank" rel="noopener noreferrer">
                                <div className="icon-wrapper">
                                    <FaInstagram className="logo-icon" />
                                </div>
                            </a>
                            <a href="https://linkedin.com/in/Aqeel-J" target="_blank" rel="noopener noreferrer">
                                <div className="icon-wrapper">
                                    <FaLinkedin className="logo-icon" />
                                </div>
                            </a>
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={downloadCV}>
                            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                Download CV
                                <MdFileDownload />
                            </span>
                        </button>
                    </div>
                    <div className='col-2'>
                        <div className="blob-wrapper">
                            <img src={MySelf} alt="Overlay" className="blob-img-top" />
                            <div className="blob">
                                <img src={MySelf} alt="Overlay" className="blob-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
