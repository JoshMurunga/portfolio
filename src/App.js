import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
