import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import herokuIcon from "@iconify/icons-logos/heroku-icon";
import gitIcon from "@iconify/icons-logos/git-icon";

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
            <div className="project-box-image">
              <img
                src="portfolio.jpg"
                alt="Portfolio Website"
                className="project-img"
              />
            </div>
            <hr />
            <div className="project-box-info">
              <a
                href="https://joshmurunga.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-email pb-info"
              >
                My Porfolio Website
              </a>
              <div className="project-box-details">
                A fully responsive portfolio website for myself to showcase my
                work.
              </div>
            </div>
            <div className="project-box-links">
              <div className="pb-links-fl">
                <div className="tipper">
                  <Icon icon={reactIcon} className="mr-1" />
                  <span className="tippertext">React</span>
                </div>
                <div className="tipper">
                  <Icon icon={herokuIcon} className="mr-1" />
                  <span className="tippertext">Heroku</span>
                </div>
                <div className="tipper">
                  <Icon icon={gitIcon} />
                  <span className="tippertext">Git</span>
                </div>
              </div>
              <div className="pb-links-fr">
                <a
                  href="https://github.com/JoshMurunga/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning mr-2"
                >
                  Code
                </a>
                <a
                  href="https://joshmurunga.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger"
                >
                  visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
