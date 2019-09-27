import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.scss";

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
      <div style={{ height: "100%" }} className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "43px" }}>
          <div className="hori-flex">
            <ul>
              <li>
                <p>
                  <a>Profile</a>
                  <a>Tech & skills</a>
                  <a>Date</a>
                </p>
              </li>
            </ul>
          </div>
          <section className="content-paragraph">
            <ul>
              <li>
                <hi className="welcome"> DESIGN + CODE</hi>
              </li>
              <li>
                <hi className="welcome">PORTFOLIO </hi>
              </li>
            </ul>
            This is the content!
          </section>
        </main>
      </div>
    );
  }
}
export default App;
