import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-End Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-html5 skills-icon"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Experienced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-css3 skills-icon"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Experienced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-javascript skills-icon"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-react skills-icon"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Experienced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-angular skills-icon"></i>
            <div>
              <h3 className="skills__name">Angular</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

         <div className="skills__data">
            <i className="bx bx-badge-check" style={{color:"transparent"}}></i>
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Frontend;
