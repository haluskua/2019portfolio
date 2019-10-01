import React from "react";
import "./_SideDrawer.scss";

const sideDrawer = props => {
  //construct class to toggle on and off
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="ul-nav">
        <li>
          <a href="/Home">Home</a>
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
    </nav>
  );
};

export default sideDrawer;
