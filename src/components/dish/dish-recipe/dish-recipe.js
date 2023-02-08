import React, { Component } from "react";

import "./dish-recipe.css";

const DishRecipe = ({ receipt }) => {
  return (
    <div className="dish-recipe-div">
      <h3>Method of cooking:</h3>
      <p className="dish-recipe">{receipt}</p>
    </div>
  );
};
export default DishRecipe;
