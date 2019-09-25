import React from "react";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">OMPHALUS KUA</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">HELLO</a>
          </li>
          <li>
            <a href="/">PROJECTS</a>
          </li>
          <li>
            <a href="/">WORKSHOP</a>
          </li>
          <li>
            <a href="/">PHOTOS</a>
          </li>
          <li>
            <a href="/">LIFE</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
