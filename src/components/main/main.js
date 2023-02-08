import React from "react";
import DishList from "../dish-list";
import DishMainImg from "../dish-list/dish-main-img/dish-main-img";
import "./main.css";

const Main = () => {
  return (
    <div className="main-div-main">
      <div className="main-img">
        <img src="https://cutt.ly/L3tzvPB" alt="imck"></img>
        <div className="main-text">
          <h1>welcome</h1>
          <p>
            Discover delicious inspiration and essential ingredients for <br />
            every meal with our comprehensive recipe and product hub
          </p>
        </div>
      </div>
      <div className="row list-m">
        <div className="back-img-1"></div>
        <div className="back-img-2"></div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8 dish-list-main">
          <h2>Meal of the week</h2>
          <DishList num={7} view={<DishMainImg />} />
        </div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
      </div>
    </div>
  );
};

export default Main;
