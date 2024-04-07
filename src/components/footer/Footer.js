import React from "react";
import "./footer.css";
import LOGO from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home" className="nav__logo">
          <img src={LOGO} alt="ananya's logo" className="logo" />
        </a>

        <ul className="footer__list">
        
        <li>
          <a href="#about" className="footer__link">About</a>
        </li>
        <li>
          <a href="#experience" className="footer__link">Experience</a>
        </li>
        <li>
          <a href="#skills" className="footer__link">Skills</a>
        </li>
        <li>
          <a href="#projects" className="footer__link">Projects</a>
        </li>
        <li>
          <a href="https://medium.com/@ananya.gta" className="footer__link">Blogs</a>
        </li>
        <li>
          <a href="#contact" className="footer__link">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
      <a
        href="https://www.linkedin.com/in/ananya-gupta-1902/"
        className="footer__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class='bx bxl-linkedin-square' ></i>
      </a>
      <a
        href="https://github.com/ananya-gta"
        className="footer__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class='bx bxl-github' ></i>
      </a>
      <a
        href="https://twitter.com/ananyxgupta"
        className="footer__social-icon"
        target="_blank" rel="noreferrer"
      >
       <i class='bx bxl-twitter' ></i>
      </a>
       <a
        href="https://discord.com/users/864127704231968789"
        className="footer__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class='bx bxl-discord-alt' ></i>
      </a> 
      <a
        href="mailto:ananyagupta.works@gmail.com"
        className="footer__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="bx bxl-gmail" ></i>
      </a>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
