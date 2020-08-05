import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <TransitionGroup className="transition-group">
            <CSSTransition
              timeout={{ enter: 300, exit: 300 }}
              classNames={"fade"}
              key={location.key}
            >
              <section className="route-section">
                <Switch location={location}>
                  <Route path="/home" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/contact" component={Contact} />
                  <Redirect from="/" to="/home" />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
