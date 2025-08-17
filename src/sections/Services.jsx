import React, { useState } from 'react';
import { FaCode } from "react-icons/fa6";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";
import './Services.scss';

export default function Services() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="services" className="section section-services">
            <h2 className="title">Services</h2>
            <div className="services">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <FaCode className='icon'/>
                                <h3>Web Development</h3>
                                <p>I build fast, responsive, and modern websites tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <MdDesignServices className='icon'/>
                                <h3>UI/UX Design</h3>
                                <p>Creating clean, user-focused interfaces that are intuitive and beautiful.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card"   >
                                <MdDeveloperMode className='icon' />
                                <h3>Mobile Applications</h3>
                                <p>Cross-platform mobile apps that look great and perform even better.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
