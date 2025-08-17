import React from 'react';
export default function TimelineItem({ period, title, institution }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h5>{period}</h5>
        <h3>{title}</h3>
        <p>{institution}</p>
      </div>
    </div>
  );
}
