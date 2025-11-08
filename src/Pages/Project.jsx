import React from "react";
import "./Project.css";

function Project() {
  const projects = [
    { title: "Brand Identity", image: "./Images/project1.jpg" },
    { title: "Corporate Website", image: "./Images/project2.jpg" },
    { title: "Mobile App UI", image: "./Images/project3.jpg" },
    { title: "E-commerce Design", image: "./Images/project4.jpg" },
    { title: "Landing Page", image: "./Images/project5.jpg" },
    { title: "Social Media Campaign", image: "./Images/project6.jpg" },
  ];

  return (
    <main className="projects-page">
      <h1>Our Works</h1>
      <p>Explore some of the projects we’ve crafted for our clients.</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Project;
