import React from "react";
import "./projects.css";
import Works from "./Works";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Work</span>
      <Works />
    </section>
  );
};

export default Projects;
