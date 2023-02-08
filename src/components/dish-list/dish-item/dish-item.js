import React from "react";
import { Link } from "react-router-dom";
import ListDif from "../dish-item-dif";
import "./dish-item.css";

const DishItem = ({ id, meal_name, meal_image, difficulty }) => {
  const imageUrl = meal_image ? meal_image : "https://cutt.ly/93rLjy2";
  return (
    <div className="dish-list-item">
      <div className="dish-list-div">
        <img className="dish-list-img" src={imageUrl} alt={meal_name}></img>
        <h4>{meal_name}</h4>
        <ListDif compl={difficulty} />
      </div>
      <button className="dish-list-button">
        <Link to={`../../dishes/${id}`} relative="path">
          Review
        </Link>
      </button>
    </div>
  );
};

export default DishItem;
