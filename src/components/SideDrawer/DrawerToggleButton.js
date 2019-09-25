
import React from "react";
import "./DrawerToggleButton.scss";

const drawerTobggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default drawerTobggleButton;
