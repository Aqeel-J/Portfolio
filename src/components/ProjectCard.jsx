import React from 'react';
export default function ProjectCard({ title, description, imageSrc, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="card">
        <img src={imageSrc} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}
