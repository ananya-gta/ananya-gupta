import React from 'react'
import { SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Back-End Development</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bxl-python skills-icon' ></i>
                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

            <div className="skills__data">
            <i className='bx bxl-java skills-icon' ></i>
                <div>
                    <h3 className="skills__name">Core Java</h3>
                    <span className="skills__level">OOPs Concepts</span>
                </div>
            </div>

            <div className="skills__data">
            <i className='bx bxl-spring-boot skills-icon' ></i>
                <div>
                    <h3 className="skills__name">Spring Boot</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

           
        </div>

        <div className="skills__group">
            <div className="skills__data">
            <GrMysql className="skills-icon"/>
                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

            <div className="skills__data">
            <SiPostman className="skills-icon"/>
                <div>
                    <h3 className="skills__name">Postman</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

             <div className="skills__data">
             <i className="bx bx-badge-check" style={{color:"transparent"}}></i>
                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level"></span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx"></i>
                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level"></span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend