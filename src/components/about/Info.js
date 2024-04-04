import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <a href="#experience">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle"></span>
        </div>
      </a>

      <a href="#blogs">
        <div className="about__box">
          <i className="bx bx-pen about__icon"></i>
          <h3 className="about__title">Blogs</h3>
          <span className="about__subtitle"></span>
        </div>
      </a>
      
      <a href="#projects">
        <div className="about__box">
          <i className="bx bx-briefcase-alt about__icon"> </i>
          <h3 className="about__title">Projects</h3>
          <span className="about__subtitle"></span>
        </div>
      </a>
    </div>
  );
};

export default Info;
