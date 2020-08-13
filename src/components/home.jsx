import React, { Component } from "react";
import { Icon } from "@iconify/react";
import sagittariusIcon from "@iconify/icons-noto-v1/sagittarius";
import stacksmithIcon from "@iconify/icons-logos/stacksmith";
import multipleDevices from "@iconify/icons-flat-color-icons/multiple-devices";

class Home extends Component {
  state = {};
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
          <div className="hc-fl">left</div>
          <div className="hc-fr text-center">
            <img src="myphoto.jpg" alt="my image here" className="hc-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
