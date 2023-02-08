import React from "react";

import "./dish-img.css";

const DishImg = ({ imgUrl }) => {
  const image = imgUrl ? imgUrl : "https://cutt.ly/33r9pO1";
  return (
    <div className="dish-img">
      <img src={image} alt="Error" />
    </div>
  );
};
export default DishImg;
