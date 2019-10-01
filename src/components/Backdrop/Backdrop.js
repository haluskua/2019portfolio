import React from "react";
import "./_Backdrop.scss"

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />

);

export default backdrop;
