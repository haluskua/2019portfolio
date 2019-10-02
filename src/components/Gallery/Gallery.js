import React from "react";
import "./_Gallery.scss";

const gallery = props => {
  //construct class to toggle on and off
  let galleryClasses = "gallery-drawer";
  if (props.showGallery) {
    galleryClasses = "gallery-drawer gallery-open";
  }
  return (
    <div className={galleryClasses}>
      <h1>Gallery page</h1>
    </div>
  );
};
export default gallery;
