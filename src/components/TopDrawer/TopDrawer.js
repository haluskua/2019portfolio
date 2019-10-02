import React from "react";
import "./_TopDrawer.scss";

const TopDrawer = props => (
  <div className="hori-flex">
    <main style={{ marginTop: "45px" }}></main>
    <ul>
      <li>
        <p>
          <a href="/Profile">Profile</a>
          <a href="/Skills">Skills</a>
          <a href="/Gallery">Photo Gallery</a>
        </p>
      </li>
    </ul>
  </div>
);

export default TopDrawer;
