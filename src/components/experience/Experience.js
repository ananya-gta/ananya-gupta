import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="qualification section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Career Milestones</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Work History
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in CSE</h3>
                <span className="qualification__subtitle">
                  Medi-Caps University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Mercy Memorial School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016-2018
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Volkswagen Technology Solutions India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Nov 2023-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">HiCounselor</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Jan 2023 - Oct 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Science Intern</h3>
                <span className="qualification__subtitle">
                  The Sparks Foundation
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June - July 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
