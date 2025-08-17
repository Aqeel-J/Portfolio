import React, { useState } from 'react';

// Animation
import Lottie from "lottie-react";
import contactAnimation from "../assets/about.json";

// Swiper (carousel)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Styles
import '../App.scss';
import './About.scss';

// Data
import educationData from '../assets/educationData.json';
import skillsData from '../assets/skillsData.json';

// Icons
import logoMap from '../assets/logoMap.js';

import TimeLineItem from '../components/TimeLineItem.jsx';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section id="about" className="section section-about">
            <h2 className="title">About Me</h2>
            <div className="container">
                <div className="education">
                    <div className="row row-2">
                        <h3>Education</h3>
                    </div>
                    <div className='row'>
                        <div className="col-2">
                            <Lottie animationData={contactAnimation} loop={true} style={{ height: "500px" }} />
                        </div>
                        <div className="col-2">
                            <div className="timeline">
                                {educationData.map((item, index) => (
                                    <TimeLineItem
                                        key={index}
                                        period={item.period}
                                        title={item.title}
                                        institution={item.institution}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="row row-2">
                        <h3>Skills</h3>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}>
                        {skillsData.map(skill => (
                            <SwiperSlide key={skill.name}>
                                <div className="card">
                                    <img
                                        src={logoMap[skill.icon]}
                                        alt={skill.name}
                                        className="icon"
                                    />
                                    <h3>{skill.name}</h3>
                                    <p>{skill.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
}
