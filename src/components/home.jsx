import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import sagittariusIcon from "@iconify/icons-noto-v1/sagittarius";
import stacksmithIcon from "@iconify/icons-logos/stacksmith";
import multipleDevices from "@iconify/icons-flat-color-icons/multiple-devices";

class Home extends Component {
  render() {
    return (
      <div className="componentStyle contact-scroll">
        <div className="home-component">
          <div className="home-image">
            <img src="mylogo.png" alt="My Logo" className="logo" />
            <div className="home-intro">
              <div className="home-name">
                Hi there! I'm <b className="hn">Joshua </b>Murunga{" "}
                <b className="sag-icon">
                  <Icon icon={sagittariusIcon} />
                </b>
              </div>
              <div className="home-title">
                Full<b className="tn"> Stack</b> <Icon icon={stacksmithIcon} />{" "}
                Software Developer <Icon icon={multipleDevices} />
              </div>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="hc-about">ABOUT</div>
          <div className="break"></div>
          <div className="hc-fl">
            <p>
              I am a creative innovative thinker and solution-oriented Computer
              Scientist based in Nairobi Kenya, with a rich knowledge of web
              technologies and development stacks relevant to the web.
            </p>
            <p>
              I am passionate about computers and their vast variety of
              technological fields, always eager to improve on and learn new
              skills.
            </p>
            <p>
              I am well versed with PHP development and the Laravel framework. I
              also work with React.js, Bootstrap and Materialize for front-end
              implementation. More of my technical skills can be found{" "}
              <Link to="/resume">here</Link>.
            </p>
            <p>
              I also enjoy great music and love doing a little bit of poetry :)
            </p>
          </div>
          <div className="hc-fr text-center">
            <img src="myphoto.jpg" alt="my image here" className="hc-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
