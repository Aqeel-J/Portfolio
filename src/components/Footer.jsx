import React, { useState } from 'react';
import { FaRegCopyright, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import './Footer.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-2">
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
                        <h3 className='brand-logo'><span>Aqeel</span>Jabir</h3>
                    </div>
                </div>
                <p className="copyright">Copyright <FaRegCopyright />  - AqeelJabir, All rights reserved.</p>
            </div>
        </div>
    );
}
