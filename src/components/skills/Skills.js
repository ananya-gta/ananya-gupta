import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
//  import Frameworks from "./Frameworks"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">What skills I have</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        {/* <Frameworks /> */}
      </div>
    </section>
  );
};

export default Skills;
