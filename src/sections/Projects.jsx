import React, { useState } from 'react';
import projectsData from '../assets/projectsData.json';
import projectImgMap from '../assets/projectImgMap.js';
import ProjectCard from "../components/ProjectCard";
import './Projects.scss';

export default function Projects() {
    return (
        <section id="projects" className="section section-projects">
            <h2 className="title">Projects</h2>
            <div className="container">
                <div className="row">
                    {projectsData.map(({ id, title, description, imageKey, link }) => (
                        <div className="col-4" key={id}>
                            <ProjectCard
                                title={title}
                                description={description}
                                imageSrc={projectImgMap[imageKey]}
                                link={link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
