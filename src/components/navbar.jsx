import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
          <img src="mylogo.png" alt="JM" width="48" height="38" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
