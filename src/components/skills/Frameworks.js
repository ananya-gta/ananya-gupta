import React from 'react'
import { SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Tools & Frameworks</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bxl-visual-studio' ></i>
                <div>
                    <h3 className="skills__name">VS Code</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-github' ></i>
                <div>
                    <h3 className="skills__name">GitHub</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-spring-boot' ></i>
                <div>
                    <h3 className="skills__name">Spring Boot</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

           
        </div>

        <div className="skills__group">
            <div className="skills__data">
            <GrMysql />
                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

            <div className="skills__data">
            <SiPostman />
                <div>
                    <h3 className="skills__name">Postman</h3>
                    <span className="skills__level">Experienced</span>
                </div>
            </div>

            {/* <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level"></span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level"></span>
                </div>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Backend