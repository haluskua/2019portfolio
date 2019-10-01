import React from "react";
import "./_Toolbar.scss";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Projects">PROJECTS</a>
          </li>
          <li>
            <a href="/Workshop">WORKSHOP</a>
          </li>
          <li>
            <a href="/Life">LIFE</a>
          </li>
          <li>
            <a href="/Contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
