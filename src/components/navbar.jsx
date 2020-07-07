import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <Link href="#" className="navbar-brand navcontainer">
          <img src="mylogo.png" alt="JM" width="48" height="38" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navlinks" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/home">
                <b>HOME</b>
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/projects">
                <b>PROJECTS</b>
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/resume">
                <b>CV</b>
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/contact">
                <b>CONTACT ME</b>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
