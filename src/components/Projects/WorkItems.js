import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__title">
        <h3 >{item.title}</h3>{" "}
        <a href={item.demo} className="work__button">
          <i className="bx bx-link-external work__button-icon"></i>
        </a>
      </div>
      <a href={item.code} className="work__button">
        Code <i className="bx bx-code-alt code"></i>
      </a>
    </div>
  );
};

export default WorkItems;
