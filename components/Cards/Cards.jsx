import React from 'react';
import Image from 'next/image';
import './Cards.css';

const Cards = ({ projects }) => {
  return (
    <div className='projects'>
      <div className="title">
        <h4>Our Diverse Projects</h4>
      </div>
      <div className="card-box">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img relative h-40">
              {/* This is the updated, modern syntax for the Image component */}
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill // Replaces layout="fill"
                className="object-cover rounded-md" // object-cover replaces objectFit
              />
            </div>
            <div className="project-name">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
            <div className="btn">
              <button>View Items</button>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Cards;