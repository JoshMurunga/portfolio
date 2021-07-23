import React, { Component } from "react";
import { savePDF } from '@progress/kendo-react-pdf';

class Resume extends Component {
  printDocument = () => {
    savePDF(this.resume, {fileName: "Joshua's Resume.pdf"})
  }

  render() {
    return (
      <div className="componentStyle scroll">
        <a
          onClick={this.printDocument}
          className="btn btn-success cv-download"
          download
        >
          Download <i className="fa fa-download" aria-hidden="true"></i>
        </a>
        <div className="resumeStyle">My Résumé</div>
        <center>
          <div className="cvStyle" ref={(r) => this.resume = r}>
            <div className="cv-intro-info">
              <div className="teal-box"></div>
              <div className="header-sec">
                <div className="cv-intro">
                  <div className="cv-intro-header">Joshua Murunga</div>
                  <div className="cv-intro-title">Developer</div>
                  <div className="cv-intro-summary">
                    As someone who enjoys finding solutions to difficult
                    problems, software development was an ideal path for me. I
                    have always found coding intuitive and have pushed myself to
                    learn the most effective way to achieve a result. I am a
                    fast learner and can quickly integrate into a team so I can
                    provide value to the company and customers.
                  </div>
                </div>
                <div className="cv-intro-details">
                  <div className="cv-email-container">
                    <a href="mailto:joshmurush@gmail.com" className="cv-email">
                      <div className="mail-icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                      joshmurush@gmail.com
                    </a>
                  </div>
                  <div className="cv-email-container cv-email separator">
                    <div className="phone-icon">
                      <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
                    </div>
                    +254 723 925 592
                  </div>
                  <div className="cv-email-container cv-email separator">
                    <div className="mbox-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-mailbox2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm1 1.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1zM4.585 7.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7c.218 0 .42.086.585.157z"
                        />
                      </svg>
                    </div>
                    254723925592-00100, Nairobi, Kenya
                  </div>
                  <div className="cv-email-container separator">
                    <a
                      href="https://joshmurunga.herokuapp.com"
                      className="cv-email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="globe-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-globe2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.018 7.5h2.49c.037-1.07.189-2.087.437-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5zM3.05 3.049c.362.184.763.349 1.198.49.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.473.257 2.282.287V1.077zm0 4.014c-.91-.03-1.783-.145-2.591-.332a12.344 12.344 0 0 0-.4 2.741H7.5V5.091zm1 2.409V5.091c.91-.03 1.783-.145 2.591-.332.223.827.364 1.754.4 2.741H8.5zm-1 1H4.51c.035.987.176 1.914.399 2.741A13.596 13.596 0 0 1 7.5 10.91V8.5zm1 2.409V8.5h2.99a12.343 12.343 0 0 1-.399 2.741A13.596 13.596 0 0 0 8.5 10.91zm-1 1c-.81.03-1.577.13-2.282.287.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91zm-2.173 2.563a6.695 6.695 0 0 1-.597-.933 8.857 8.857 0 0 1-.481-1.078 8.356 8.356 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.52zM2.38 12.175c.47-.258.995-.482 1.565-.667A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.964 6.964 0 0 0 1.362 3.675zm8.293 2.297a7.01 7.01 0 0 0 2.275-1.521 8.353 8.353 0 0 0-1.197-.49 8.859 8.859 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zm.11-2.276A12.63 12.63 0 0 0 8.5 11.91v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872zm1.272-.688c.57.185 1.095.409 1.565.667A6.964 6.964 0 0 0 14.982 8.5h-2.49a13.355 13.355 0 0 1-.437 3.008zm.437-4.008h2.49a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zm-.74-3.96a8.854 8.854 0 0 0-.482-1.079 6.692 6.692 0 0 0-.597-.933c.857.355 1.63.875 2.275 1.521a8.368 8.368 0 0 1-1.197.49zm-.97.264c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z"
                          />
                        </svg>
                      </div>
                      joshmurunga.herokuapp.com
                    </a>
                  </div>
                  <div className="cv-email-container separator">
                    <a
                      href="https://linkedin.com/in/joshua-murunga-55236a32/"
                      className="cv-email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="linked-icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                      linkedin.com/in/joshua-murunga-55236a32/
                    </a>
                  </div>
                  <div className="cv-email-container separator">
                    <a
                      href="https://github.com/JoshMurunga"
                      className="cv-email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="git-icon">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </div>
                      github.com/JoshMurunga
                    </a>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
            <div className="cv-body-left">
              <div className="cv-body-left-header">WORK EXPERIENCE</div>
              <div className="teal-body-box"></div>
              <div className="work-details">
                <div className="work-title">HMIS Developer</div>
                <div className="work-company">Liverpool VCT Health</div>
                <div className="work-period">September/2019 - Present</div>
                <div className="work-period">Achievements/Tasks</div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Extracting, Transforming and Loading data from one HMIS system
                  into another through concept matching and creation.
                </div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Facilitated the migration from one HMIS system to another
                  through ETL Management
                </div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Design, develop, and implement security procedures related to
                  data input, sharing, and viewing by HMIS participating
                  agencies
                </div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Monitoring, analyzing, reporting of data and Performing data
                  quality checks from HMIS
                </div>
              </div>
              <div className="clear"></div>
              <div className="teal-body-box work-separator"></div>
              <div className="work-details work-separator">
                <div className="work-title">Web Developer Intern</div>
                <div className="work-company">ZUCA Solutions Ltd.</div>
                <div className="work-period">
                  September/2018 - December/2018
                </div>
                <div className="work-period">Achievements/Tasks</div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Develop websites and web applications for clients contracted
                  to the company using PHP Laravel framework and CodeIgniter.
                </div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Graphic designing brands and logos for clients using GNU Image
                  Manipulation Program (GIMP), Adobe Photoshop and Adobe
                  Illustrator.
                </div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Preparation of demo systems for prospective clients using
                  bootstrap templates, materialize templates and a variety of
                  Content Management Systems such as WordPress and Joomla.
                </div>
                <div className="bullet">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </div>
                <div className="work-tasks">
                  Troubleshooting, configuring and maintaining computer hardware
                  and software for clients.
                </div>
              </div>
              <div className="clear"></div>
              <div className="cv-body-left-header work-separator">
                EDUCATION
              </div>
              <div className="teal-body-box"></div>
              <div className="work-details">
                <div className="work-title">
                  Bachelor of Science in Computer Science
                </div>
                <div className="work-company">Egerton University</div>
                <div className="work-period wp">
                  September/2014 - September/2018
                </div>
                <div className="work-period">Njoro, Kenya</div>
              </div>
            </div>
            <div className="cv-body-right">
              <div className="cv-body-right-header">TECHNICAL SKILLS</div>
              <div className="skills">
                <div className="skillbox">PHP Development</div>
                <div className="skillbox">Laravel Framework</div>
                <div className="skillbox">Java</div>
                <div className="skillbox">Java EE, Servlet API, JSP</div>
                <div className="skillbox">Springboot Framework</div>
                <div className="skillbox">Python</div>
                <div className="skillbox">Flask Framework</div>
                <div className="skillbox">Web Services</div>
                <div className="skillbox">Ajax</div>
                <div className="skillbox">JSON</div>
                <div className="skillbox">REST</div>
                <div className="skillbox">SOAP</div>
                <div className="skillbox">ES6</div>
                <div className="skillbox">Npm</div>
                <div className="skillbox">HTML, CSS3, JavaScript</div>
                <div className="skillbox">LESS, SASS</div>
                <div className="skillbox">ReactJS</div>
                <div className="skillbox">Materialize</div>
                <div className="skillbox">Bootstrap</div>
                <div className="skillbox">JQuery</div>
                <div className="skillbox">CI/CD</div>
                <div className="skillbox">Database Administration</div>
                <div className="skillbox">MySQL</div>
                <div className="skillbox">MS SQL</div>
                <div className="skillbox">PostgreSQL</div>
                <div className="skillbox">OAuth</div>
                <div className="skillbox">Git</div>
                <div className="skillbox">Linux</div>
                <div className="skillbox">Vagrant</div>
                <div className="skillbox">Heroku</div>
                <div className="skillbox">Docker</div>
                <div className="skillbox">Google Cloud Platform</div>
              </div>
              <div className="clear"></div>
              <div className="cv-body-right-header work-separator">
                SOFT SKILLS
              </div>
              <div className="text-box">
                Excellent communication skills, both oral and written.
              </div>
              <div className="text-box">Attention to detail.</div>
              <div className="text-box">
                Fast learner with ability to comprehend and troubleshoot complex
                systems.
              </div>
              <div className="text-box">
                Good organization and time management.
              </div>
              <div className="cv-body-right-header work-separator">
                ACHIEVEMENTS
              </div>
              <div className="text-box">
                Participated in the nationwide testing and migration exercise of
                HMIS from IQCare to KenyaEMR.
              </div>
              <div className="text-box">
                Participated in Google Developers Group Rift Valley (2016 –
                2018), working on cyber security, progressive web apps
                development and firebase.
              </div>
              <div className="text-box">
                Organized and participated in a number of Web Community meet-ups
                at Egerton University.
              </div>
              <div className="cv-body-right-header work-separator">
                INTERESTS
              </div>
              <div className="skills">
                <div className="interestbox">Creative Writing</div>
                <div className="interestbox">Poetry</div>
                <div className="interestbox">Video Games</div>
                <div className="interestbox">Music</div>
                <div className="interestbox">Travelling</div>
                <div className="interestbox">Cyber Security</div>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Resume;
