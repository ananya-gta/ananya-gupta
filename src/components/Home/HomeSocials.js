import React from "react";

const HomeSocials = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/ananya-gupta-1902/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/ananya-gta"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://twitter.com/ananya_192"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-twitter"></i>
      </a>
      {/* <a
        href="https://discord.com/users/864127704231968789"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-discord"></i>
      </a> */}
      <a
        href="mailto:ananyagupta.works@gmail.com"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-envelope-alt"></i>
      </a>
    </div>
  );
};

export default HomeSocials;
