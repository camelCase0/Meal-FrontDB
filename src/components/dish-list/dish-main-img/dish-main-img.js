import React from "react";
import { Link } from "react-router-dom";
import "./dish-main-img.css";

const DishMainImg = () => {
  return (
    <button className="dish-main-img-button">
      <div className="dish-main-img-div"></div>
      <Link to="/dishes">
        <p className="dish-main-img-p">
          View <br /> all <br /> dishes
        </p>
      </Link>
    </button>
  );
};

export default DishMainImg;
