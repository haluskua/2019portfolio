import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import TopDrawer from "./components/TopDrawer/TopDrawer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Life from "./components/Life/Life";
import Workshop from "./components/Workshop/Workshop";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Gallery from "./components/Gallery/Gallery";

import "./_App.scss";

class App extends Component {
  // set state
  state = {
    sideDrawerOpen: false
  };
  // describe method-[open sideDrawer onClick]
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  // ~~~~~ render

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    //~~~~ present

    return (
      <Router>
        <div
          style={{
            height: "100vh",
            position: "fixed",
            overflow: "scroll",
            width: "100vw"
          }}
          className="App"
        >
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          <TopDrawer />

          <Route path="/" component={Home} exact />
          <Route path="/Projects" component={Projects} exact />
          <Route path="/Life" component={Life} exact />
          <Route path="/Workshop" component={Workshop} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/Profile" component={Profile} exact />
          <Route path="/Skills" component={Skills} exact />
          <Route path="/Gallery" component={Gallery} exact />
          {backdrop}
        </div>
      </Router>
    );
  }
}
export default App;
