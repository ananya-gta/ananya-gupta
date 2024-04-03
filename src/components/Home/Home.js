import React from "react";
import "./home.css";
import HomeSocials from "./HomeSocials";
import Data from "./Data";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <HomeSocials />
          <div className="home__img"></div>

          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
