import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1 style={{ marginTop: "50px" }}>home</h1>
        <div className="tipper">
          Hover over me
          <span className="tippertext">Tooltip text</span>
        </div>
      </div>
    );
  }
}

export default Home;
