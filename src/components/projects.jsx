import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="contact-component contact-scroll">
        <div className="contact-me">PROJECTS</div>
        <div className="text-center">
          I am always looking to add to my portfolio. Here are some of the
          projects that I have worked on over the years.
        </div>
        <div className="projects-container">
          <div className="project-box" id="p-box">
            <div className="project-box-image"></div>
            <hr />
            <div className="project-box-info"></div>
            <div className="project-box-links">this is links area</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
