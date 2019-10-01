import React from "react";
import "./_Profile.scss";

const profile = props => {
  //construct class to toggle on and off
  let profileClasses = "profile-drawer";
  if (props.showProfile) {
    profileClasses = "profile-drawer profile-open";
  }
  return (
    <div className={profileClasses}>
      <h1>Profile page</h1>
    </div>
  );
};
export default profile;
