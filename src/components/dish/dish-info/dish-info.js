import React from "react";
import DishImg from "../dish-img/dish-img";
import ProdLi from "../product-list";
import DishRecipe from "../dish-recipe";
import "./dish-info.css";
const DishInfo = ({ data }) => {
  const { meal_name, meal_image, receipt, receipts } = data;
  return (
    <React.Fragment>
      <div className="dish-name">
        <h3>{meal_name}</h3>
      </div>
      <div className="dish-content">
        <DishImg imgUrl={meal_image} />
        <ProdLi products={receipts} />
      </div>
      <DishRecipe receipt={receipt} />
    </React.Fragment>
  );
};
export default DishInfo;
