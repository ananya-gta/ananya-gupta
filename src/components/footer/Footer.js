import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ananya-gupta-1902/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/ananya-gta"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://twitter.com/ananyxgupta"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://discord.com/users/864127704231968789"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-discord-alt"></i>
          </a>
          <a
            href="mailto:ananyagupta.works@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-gmail"></i>
          </a>
        </div>

        <span className="footer__copyright">
        Ananya Gupta | &copy; 2024 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
