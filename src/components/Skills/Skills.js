import React from "react";
import "./_Skills.scss";

const skills = props => {
  //construct class to toggle on and off
  let skillsClasses = "skills-drawer";
  if (props.showSkills) {
    skillsClasses = "skills-drawer skills-open";
  }
  return (
    <div className={skillsClasses}>
      <h1>Skills page</h1>
    </div>
  );
};
export default skills;
