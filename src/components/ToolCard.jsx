// src/components/ToolCard.jsx
import React from 'react';
import './ToolCard.css';

function ToolCard({ logo, name, description, tags, link }) {
  return (
    <div className="tool-card">
      <div className="tool-card-header">
        <img src={logo} alt={`${name} logo`} className="tool-logo" />
        <h3>{name}</h3>
      </div>
      <p className="tool-description">{description}</p>
      <div className="tool-tags">
        {tags.map((tag, index) => (
          <span className="tool-tag" key={index}>{tag}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit
      </a>
    </div>
  );
}

export default ToolCard;