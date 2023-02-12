import React from "react";
import { withData } from "../hoc-helpers";
import ProdItem from "./product-item";

import "./product-list.css";
import withMealService from "../hoc-helpers/with-meal-service";

const ProductList = ({ data, filter, onUpdateProduct }) => {
  const elements = data.map((item) => {
    const { ingredient_id } = item;
    return (
      <li key={ingredient_id} className="dish-main-list-item">
        <ProdItem
          filter={filter}
          item={item}
          onUpdateProduct={onUpdateProduct}
        />
      </li>
    );
  });

  return <React.Fragment>{elements}</React.Fragment>;
};

const mapMethodsToProps = (mealService) => {
  return { getData: mealService.getFriedge };
};
export default withMealService(mapMethodsToProps)(withData(ProductList));
