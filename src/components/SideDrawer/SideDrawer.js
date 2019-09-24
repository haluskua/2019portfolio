import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  //construct class
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default sideDrawer;
