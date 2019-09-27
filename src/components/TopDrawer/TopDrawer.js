import React from "react";
import "./TopDrawer.scss";

const TopDrawer = props => {
  return (
    <section className="top-drawer">
      <ul>
        <li>
          <hi className="welcome">Portfolio of 2019</hi>
        </li>
        <li>
          <hi className="caption">Wev Developer + Graphic designer</hi>
        </li>
        <li>
            Content Goes here
        </li>
      </ul>
    </section>
  );
};

export default TopDrawer;
